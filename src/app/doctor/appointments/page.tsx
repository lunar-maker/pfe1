"use client"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreatePrescriptionDialog } from "@/components/prescription-dialog"
import {
  ArrowRightOnRectangleIcon,
  UserIcon,
  CalendarIcon,
  ClockIcon,
  PhoneIcon,
  CheckIcon,
  XMarkIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  PlusIcon,
} from "@heroicons/react/24/outline"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { format, isToday, isTomorrow, formatDistance } from "date-fns"
import { fr } from "date-fns/locale"

interface Patient {
  id: number
  first_name: string
  last_name: string
  phone_number: string
}

interface Doctor {
  id: number
  first_name: string
  last_name: string
  specialty: string
}

interface Prescription {
  id: number
  diagnosis: string
  instructions?: string
  validUntil?: string
  createdAt: string
  medications: {
    id: number
    medicationName: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string
  }[]
}

interface Appointment {
  id: number
  date: string
  startTime: string
  endTime: string
  typemaladie: string
  status: "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED"
  notes?: string
  createdAt: string
  updatedAt: string
  patient: Patient
  doctor: Doctor
  prescription?: Prescription
}

function AppointmentsPage() {
  const [showSettingsBar, setShowSettingsBar] = useState(false)
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [activeTab, setActiveTab] = useState("today")
  const [prescriptionDialogOpen, setPrescriptionDialogOpen] = useState(false)
  const [selectedAppointmentForPrescription, setSelectedAppointmentForPrescription] = useState<Appointment | null>(null)
  const router = useRouter()

  // Fetch appointments
  const fetchAppointments = async (date?: Date) => {
    try {
      setLoading(true)
      const searchParams = new URLSearchParams()
      if (date) {
        searchParams.append("date", date.toISOString().split("T")[0])
      }

      const response = await fetch(
        `/api/appointments?${searchParams.toString()}`,
      )
      if (!response.ok) {
        throw new Error("Failed to fetch appointments")
      }

      const data = await response.json()
      setAppointments(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAppointments()
  }, [])

  // Update appointment status
  const updateAppointmentStatus = async (
    appointmentId: number,
    newStatus: string,
  ) => {
    try {
      const response = await fetch("/api/appointments", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: appointmentId,
          status: newStatus,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to update appointment")
      }

      // Refresh appointments
      fetchAppointments(selectedDate)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to update appointment",
      )
    }
  }

  // Handle prescription creation
  const handleCreatePrescription = (appointment: Appointment) => {
    setSelectedAppointmentForPrescription(appointment)
    setPrescriptionDialogOpen(true)
  }

  const handlePrescriptionSuccess = () => {
    // Refresh appointments to show the new prescription
    fetchAppointments(selectedDate)
  }

  // Filter appointments based on criteria
  const getFilteredAppointments = () => {
    return appointments.filter((appointment) => {
       if (appointment.status === "CANCELLED" && filterStatus !== "cancelled") {
      return false
    }
      const matchesStatus =
        filterStatus === "all" ||
        appointment.status === filterStatus.toUpperCase()
      const matchesSearch =
        appointment.patient.first_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        appointment.patient.last_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        appointment.typemaladie.toLowerCase().includes(searchTerm.toLowerCase())
    // Filtre par date sélectionnée
    const matchesDate =
      !selectedDate ||
      new Date(appointment.date).toDateString() === selectedDate.toDateString()
      return matchesStatus && matchesSearch && matchesDate
    })
  }

  // Get appointments by category
  const getTodayAppointments = () => {
    const today = new Date().toDateString()
    return getFilteredAppointments().filter(
      (appointment) => new Date(appointment.date).toDateString() === today,
    )
  }

  const getUpcomingAppointments = () => {
    const today = new Date()
    return getFilteredAppointments()
      .filter((appointment) => new Date(appointment.date) > today)
      .slice(0, 5)
  }

  const getAllAppointments = () => {
    return getFilteredAppointments()
  }

  // Format time for display
  const formatTime = (timeString: string) => {
    return timeString.slice(0, 5) // Remove seconds if present
  }

  // Format date for display
  const formatAppointmentDate = (dateString: string) => {
    const date = new Date(dateString)
    if (isToday(date)) return "Aujourd'hui"
    if (isTomorrow(date)) return "Demain"
    return format(date, "EEEE d MMMM", { locale: fr })
  }

  // Get status badge variant
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "CONFIRMED":
        return "default"
      case "PENDING":
        return "secondary"
      case "COMPLETED":
        return "outline"
      case "CANCELLED":
        return "destructive"
      default:
        return "secondary"
    }
  }

  // Get status text in French
  const getStatusText = (status: string) => {
    switch (status) {
      case "CONFIRMED":
        return "en attente"
      case "PENDING":
        return "En attente"
      case "COMPLETED":
        return "Terminé"
      case "CANCELLED":
        return "Annulé"
      default:
        return status
    }
  }

  function toggleSettingsBar() {
    setShowSettingsBar(!showSettingsBar)
  }

  const AppointmentCard = ({ appointment }: { appointment: Appointment }) => (
    <Card className="mb-4">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/20">
              <UserIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-foreground text-lg font-semibold">
                {appointment.patient.first_name} {appointment.patient.last_name}
              </h3>
              <p className="text-muted-foreground mb-1">
                {appointment.typemaladie}
              </p>
              <div className="text-muted-foreground flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <ClockIcon className="h-4 w-4" />
                  {formatTime(appointment.startTime)} -{" "}
                  {formatTime(appointment.endTime)}
                </div>
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4" />
                  {formatAppointmentDate(appointment.date)}
                </div>
                <div className="flex items-center gap-1">
                  <PhoneIcon className="h-4 w-4" />
                  {appointment.patient.phone_number}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant={getStatusBadgeVariant(appointment.status)}>
              {getStatusText(appointment.status)}
            </Badge>
            <div className="flex gap-2">
              {appointment.status === "PENDING" && (
                <>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-50 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-950/20"
                    onClick={() =>
                      updateAppointmentStatus(appointment.id, "CANCELLED")
                    }
                  >
                    <XMarkIcon className="h-4 w-4" />
                    Annuler
                  </Button>
                </>
              )}
              {appointment.status === "CONFIRMED" && (
                <Button
                  size="sm"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/20"
                  onClick={() =>
                    updateAppointmentStatus(appointment.id, "COMPLETED")
                  }
                  disabled={!isAppointmentPast(appointment)} // Désactive si le RV n'est pas passé
                  title={
                    !isAppointmentPast(appointment)
                      ? "Vous ne pouvez terminer ce rendez-vous que lorsque sa date et son heure sont passées."
                      : ""
                  }
                >
                  <CheckIcon className="h-4 w-4" />
                  Marquer terminé
                </Button>
              )}
              {appointment.status === "COMPLETED" && (
                <>
                  {appointment.prescription ? (
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      <DocumentTextIcon className="h-4 w-4 mr-1" />
                      Ordonnance créée
                    </Badge>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-950/20"
                      onClick={() => handleCreatePrescription(appointment)}
                    >
                      <PlusIcon className="h-4 w-4 mr-1" />
                      Créer ordonnance
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        {appointment.notes && (
          <div className="bg-muted mt-4 rounded-lg p-3">
            <p className="text-muted-foreground text-sm">
              <strong>Notes:</strong> {appointment.notes}
            </p>
          </div>
        )}
        {appointment.prescription && (
          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 mt-4 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <DocumentTextIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
              <p className="text-green-800 dark:text-green-200 text-sm font-medium">
                Ordonnance créée le {format(new Date(appointment.prescription.createdAt), "dd/MM/yyyy à HH:mm", { locale: fr })}
              </p>
            </div>
            <p className="text-green-700 dark:text-green-300 text-sm">
              <strong>Diagnostic:</strong> {appointment.prescription.diagnosis}
            </p>
            <p className="text-green-700 dark:text-green-300 text-sm">
              <strong>Médicaments:</strong> {appointment.prescription.medications.length} médicament(s) prescrit(s)
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )

  // Vérifie si la date et l'heure de fin du rendez-vous sont passées
const isAppointmentPast = (appointment: Appointment) => {
  // Si appointment.date contient déjà une heure (format ISO), pars de là
  let baseDate: Date
  if (appointment.date.includes('T')) {
    baseDate = new Date(appointment.date)
  } else {
    // Format YYYY-MM-DD
    const [year, month, day] = appointment.date.split('-')
    baseDate = new Date(Number(year), Number(month) - 1, Number(day))
  }

  // Ajoute l'heure de fin
  const endTime = appointment.endTime.length === 5
    ? `${appointment.endTime}:00`
    : appointment.endTime
  const [hour, minute, secondRaw] = endTime.split(':')
  const second = secondRaw !== undefined ? Number(secondRaw) : 0

  // Crée la date/heure de fin du rendez-vous
  const endDateTime = new Date(baseDate)
  endDateTime.setHours(Number(hour), Number(minute), second, 0)

  console.log('RV:', appointment.date, appointment.endTime, 'End:', endDateTime, 'Now:', new Date())
  return new Date() >= endDateTime
}
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <div className="w-full bg-gradient-to-r from-blue-500 via-blue-500 to-green-400 py-12 shadow-md mb-8">
  <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
    <div className="mb-4 flex items-center justify-center">
      <CalendarIcon className="h-12 w-12 text-white bg-white/10 rounded-full p-2 shadow-lg" />
    </div>
    <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-2">
      Gestion des rendez-vous
    </h1>
    <p className="text-blue-100 text-lg max-w-2xl">
      Consultez, gérez et suivez vos rendez-vous patients en toute simplicité
    </p>
  </div>
</div>
      <div className="container mx-auto px-6 py-8">
        {/* <div className="mb-8">
          <h1 className="text-foreground mb-2 text-3xl font-bold">
            Gestion des Rendez-vous
          </h1>
          <p className="text-muted-foreground">
            Gérez vos consultations et rendez-vous patients
          </p>
        </div> */}

        {error && (
          <div className="bg-destructive/10 border-destructive/20 mb-6 rounded-lg border p-4">
            <p className="text-destructive">{error}</p>
          </div>
        )}

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex-1">
                <div className="relative">
                  <MagnifyingGlassIcon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                  <Input
                    placeholder="Rechercher par nom de patient ou motif..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filtrer par statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les statuts</SelectItem>
                  <SelectItem value="pending">En attente</SelectItem>
                  <SelectItem value="confirmed">Confirmés</SelectItem>
                  <SelectItem value="completed">Terminés</SelectItem>
                  <SelectItem value="cancelled">Annulés</SelectItem>
                </SelectContent>
              </Select>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-48 justify-start">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate
                      ? format(selectedDate, "dd/MM/yyyy")
                      : "Sélectionner une date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                 <Calendar
  mode="single"
  selected={selectedDate}
  onSelect={setSelectedDate}
  initialFocus
/>
                </PopoverContent>
              </Popover>
              {selectedDate && (
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSelectedDate(undefined)
                    // fetchAppointments()
                  }}
                >
                  Effacer filtre
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Appointments Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="today">
              Aujourd'hui ({getTodayAppointments().length})
            </TabsTrigger>
            <TabsTrigger value="upcoming">
              À venir ({getUpcomingAppointments().length})
            </TabsTrigger>
            <TabsTrigger value="all">
              Tous ({getAllAppointments().length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="today" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Rendez-vous du jour</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="py-8 text-center">
                    <div className="border-primary mx-auto h-8 w-8 animate-spin rounded-full border-b-2"></div>
                    <p className="text-muted-foreground mt-2">Chargement...</p>
                  </div>
                ) : getTodayAppointments().length === 0 ? (
                  <div className="py-8 text-center">
                    <CalendarIcon className="text-muted-foreground mx-auto mb-4 h-12 w-12" />
                    <p className="text-muted-foreground">
                      Aucun rendez-vous aujourd'hui
                    </p>
                  </div>
                ) : (
                  getTodayAppointments().map((appointment) => (
                    <AppointmentCard
                      key={appointment.id}
                      appointment={appointment}
                    />
                  ))
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upcoming" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Prochains rendez-vous</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="py-8 text-center">
                    <div className="border-primary mx-auto h-8 w-8 animate-spin rounded-full border-b-2"></div>
                    <p className="text-muted-foreground mt-2">Chargement...</p>
                  </div>
                ) : getUpcomingAppointments().length === 0 ? (
                  <div className="py-8 text-center">
                    <CalendarIcon className="text-muted-foreground mx-auto mb-4 h-12 w-12" />
                    <p className="text-muted-foreground">
                      Aucun rendez-vous à venir
                    </p>
                  </div>
                ) : (
                  getUpcomingAppointments().map((appointment) => (
                    <AppointmentCard
                      key={appointment.id}
                      appointment={appointment}
                    />
                  ))
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="all" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Tous les rendez-vous</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="py-8 text-center">
                    <div className="border-primary mx-auto h-8 w-8 animate-spin rounded-full border-b-2"></div>
                    <p className="text-muted-foreground mt-2">Chargement...</p>
                  </div>
                ) : getAllAppointments().length === 0 ? (
                  <div className="py-8 text-center">
                    <CalendarIcon className="text-muted-foreground mx-auto mb-4 h-12 w-12" />
                    <p className="text-muted-foreground">
                      Aucun rendez-vous trouvé
                    </p>
                  </div>
                ) : (
                  getAllAppointments().map((appointment) => (
                    <AppointmentCard
                      key={appointment.id}
                      appointment={appointment}
                    />
                  ))
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Prescription Dialog */}
      {selectedAppointmentForPrescription && (
        <CreatePrescriptionDialog
          open={prescriptionDialogOpen}
          onOpenChange={setPrescriptionDialogOpen}
          appointmentId={selectedAppointmentForPrescription.id}
          patientName={`${selectedAppointmentForPrescription.patient.first_name} ${selectedAppointmentForPrescription.patient.last_name}`}
          onSuccess={handlePrescriptionSuccess}
        />
      )}
    </div>
  )
}

export default AppointmentsPage
