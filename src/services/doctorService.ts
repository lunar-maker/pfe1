import { User } from "@/generated/prisma"

// Enhanced types for the frontend
export interface DoctorProfile extends User {
  rating?: number
  experience?: string
  location?: string
  bio?: string
  education?: string[]
  languages?: string[]
  consultationFee?: number
  availability?: DoctorAvailability[]
}

export interface DoctorAvailability {
  id: number
  doctorId: number
  date: Date
  startTime: string
  endTime: string
  isAvailable: boolean
  slots?: TimeSlot[]
}

export interface TimeSlot {
  id: number
  time: string
  isBooked: boolean
  appointmentId?: number
}

export interface AppointmentBooking {
  doctorId: number
  patientId?: number // Optional since it's determined by the API from auth
  date: string
  startTime: string
  endTime: string
  typemaladie: string
  notes?: string
}

// API Response wrapper
interface ApiResponse<T> {
  data?: T
  error?: string
  message?: string
}

// Enhanced doctor service with better error handling and caching
class DoctorService {
  private cache = new Map<string, { data: any; timestamp: number }>()
  private readonly CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

  private getCachedData<T>(key: string): T | null {
    const cached = this.cache.get(key)
    if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
      return cached.data
    }
    this.cache.delete(key)
    return null
  }

  private setCachedData(key: string, data: any): void {
    this.cache.set(key, { data, timestamp: Date.now() })
  }

  // Get all doctors with advanced filtering
  async getDoctors(params?: {
    specialty?: string
    location?: string
    date?: string
    isAvailable?: boolean
    search?: string
    page?: number
    limit?: number
  }): Promise<ApiResponse<DoctorProfile[]>> {
    try {
      const cacheKey = `doctors-${JSON.stringify(params)}`
      const cached = this.getCachedData<DoctorProfile[]>(cacheKey)
      if (cached) return { data: cached }

      const queryParams = new URLSearchParams()
      if (params?.specialty) queryParams.append("specialty", params.specialty)
      if (params?.location) queryParams.append("location", params.location)
      if (params?.date) queryParams.append("date", params.date)
      if (params?.isAvailable) queryParams.append("isAvailable", "true")
      if (params?.search) queryParams.append("search", params.search)
      if (params?.page) queryParams.append("page", params.page.toString())
      if (params?.limit) queryParams.append("limit", params.limit.toString())

      const response = await fetch(`/api/doctors?${queryParams}`, {
        headers: { "Content-Type": "application/json" },
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      // Handle the nested response structure from the API
      const data = result.doctors || result
      this.setCachedData(cacheKey, data)

      return { data }
    } catch (error) {
      console.error("Error fetching doctors:", error)
      return {
        error:
          error instanceof Error ? error.message : "Failed to fetch doctors",
        data: [],
      }
    }
  }

  // Get doctor by ID with full profile
  async getDoctorById(id: number): Promise<ApiResponse<DoctorProfile>> {
    try {
      const cacheKey = `doctor-${id}`
      const cached = this.getCachedData<DoctorProfile>(cacheKey)
      if (cached) return { data: cached }

      const response = await fetch(`/api/doctors/${id}`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      this.setCachedData(cacheKey, data)

      return { data }
    } catch (error) {
      console.error("Error fetching doctor:", error)
      return {
        error:
          error instanceof Error ? error.message : "Failed to fetch doctor",
      }
    }
  }

  // Get doctor availability for a specific date
  async getDoctorAvailability(
    doctorId: number,
    date?: string,
  ): Promise<ApiResponse<DoctorAvailability[]>> {
    try {
      const queryParams = new URLSearchParams()
      queryParams.append("doctorId", doctorId.toString())
      if (date) queryParams.append("date", date)

      const response = await fetch(`/api/doctors/availability?${queryParams}`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return { data }
    } catch (error) {
      console.error("Error fetching availability:", error)
      return {
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch availability",
        data: [],
      }
    }
  }

  // Get available time slots for a doctor on a specific date
  async getAvailableSlots(
    doctorId: number,
    date: string,
  ): Promise<ApiResponse<TimeSlot[]>> {
    try {
      const response = await fetch(
        `/api/doctors/${doctorId}/slots?date=${date}`,
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return { data }
    } catch (error) {
      console.error("Error fetching time slots:", error)
      return {
        error:
          error instanceof Error ? error.message : "Failed to fetch time slots",
        data: [],
      }
    }
  }

  // Book an appointment
  async bookAppointment(
    booking: AppointmentBooking,
  ): Promise<ApiResponse<any>> {
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`)
      }

      // Clear relevant caches
      this.cache.clear()

      return { data, message: "Appointment booked successfully" }
    } catch (error) {
      console.error("Error booking appointment:", error)
      return {
        error:
          error instanceof Error ? error.message : "Failed to book appointment",
      }
    }
  }

  // Search doctors by name or specialty
  async searchDoctors(query: string): Promise<ApiResponse<DoctorProfile[]>> {
    if (!query.trim()) {
      return { data: [] }
    }

    return this.getDoctors({ search: query })
  }

  // Get popular/featured doctors
  async getFeaturedDoctors(
    limit: number = 6,
  ): Promise<ApiResponse<DoctorProfile[]>> {
    try {
      const cacheKey = `featured-doctors-${limit}`
      const cached = this.getCachedData<DoctorProfile[]>(cacheKey)
      if (cached) return { data: cached }

      const response = await fetch(`/api/doctors/featured?limit=${limit}`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      this.setCachedData(cacheKey, data)

      return { data }
    } catch (error) {
      console.error("Error fetching featured doctors:", error)
      return {
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch featured doctors",
        data: [],
      }
    }
  }

  // Get specialties with doctor counts
  async getSpecialties(): Promise<
    ApiResponse<Array<{ specialty: string; count: number }>>
  > {
    try {
      const cacheKey = "specialties"
      const cached =
        this.getCachedData<Array<{ specialty: string; count: number }>>(
          cacheKey,
        )
      if (cached) return { data: cached }

      const response = await fetch("/api/doctors/specialties")

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      this.setCachedData(cacheKey, data)

      return { data }
    } catch (error) {
      console.error("Error fetching specialties:", error)
      return {
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch specialties",
        data: [],
      }
    }
  }

  // Clear cache (useful for forced refresh)
  clearCache(): void {
    this.cache.clear()
  }
}

// Export singleton instance
export const doctorService = new DoctorService()

// Export additional utility functions
export const SPECIALTY_LABELS = {
  CARDIOLOGY: "Cardiologie",
  DERMATOLOGY: "Dermatologie",
  PEDIATRICS: "Pédiatrie",
  NEUROLOGY: "Neurologie",
  GYNECOLOGY: "Gynécologie",
  OPHTHALMOLOGY: "Ophtalmologie",
  GENERAL_MEDICINE: "Médecine générale",
  PSYCHIATRY: "Psychiatrie",
  ORTHOPEDICS: "Orthopédie",
  RADIOLOGY: "Radiologie",
} as const

export const SPECIALTIES = Object.keys(SPECIALTY_LABELS) as Array<
  keyof typeof SPECIALTY_LABELS
>

// Utility function to format doctor name
export const formatDoctorName = (doctor: DoctorProfile): string => {
  return `Dr. ${doctor.first_name} ${doctor.last_name}`
}

// Utility function to get specialty label
export const getSpecialtyLabel = (specialty: string): string => {
  return (
    SPECIALTY_LABELS[specialty as keyof typeof SPECIALTY_LABELS] || specialty
  )
}
