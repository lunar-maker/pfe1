"use client"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  DoctorProfile,
  SPECIALTIES,
  TimeSlot,
  doctorService,
  formatDoctorName,
  getSpecialtyLabel
} from "@/services/doctorService"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import {
  AlertCircle,
  CalendarIcon,
  CheckCircle,
  Clock,
  Filter,
  Loader2,
  MapPin,
  Phone,
  Search,
  Star,
  User,
} from "lucide-react"
import { ChangeEvent, useEffect, useState } from "react"
import { toast } from "sonner"

export default function DoctorSearchPage() {
  const [doctors, setDoctors] = useState<DoctorProfile[]>([])
  const [filteredDoctors, setFilteredDoctors] = useState<DoctorProfile[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("")
  // Set tomorrow as the default date
  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow
  })
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorProfile | null>(
    null,
  )
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([])
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null)
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingSlots, setLoadingSlots] = useState(false)
  const [booking, setBooking] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [typeMaladie, setTypeMaladie] = useState("")
  const [notes, setNotes] = useState("")

  // Load doctors on component mount
  useEffect(() => {
    loadDoctors()
  }, [])

  // Filter doctors based on search criteria
  useEffect(() => {
    let filtered = doctors

    if (searchTerm) {
      filtered = filtered.filter(
        (doctor) =>
          doctor.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doctor.last_name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedSpecialty && selectedSpecialty !== "all") {
      filtered = filtered.filter(
        (doctor) => doctor.specialty === selectedSpecialty,
      )
    }

    setFilteredDoctors(filtered)
  }, [doctors, searchTerm, selectedSpecialty])

  const loadDoctors = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await doctorService.getDoctors({
        isAvailable: true,
        date: selectedDate ? format(selectedDate, "yyyy-MM-dd") : undefined,
      })

      if (response.error) {
        setError(response.error)
        setDoctors([])
      } else {
        setDoctors(response.data || [])
      }
    } catch (err) {
      setError("Une erreur est survenue lors du chargement des médecins")
      setDoctors([])
    } finally {
      setLoading(false)
    }
  }

  const handleDoctorSelect = async (doctor: DoctorProfile) => {
    setSelectedDoctor(doctor)
    setSelectedSlot(null)
    setLoadingSlots(true)
    setIsBookingDialogOpen(true)

    const searchDate = selectedDate || new Date()

    try {
      const response = await doctorService.getAvailableSlots(
        doctor.id,
        format(searchDate, "yyyy-MM-dd"),
      )

      if (response.error) {
        toast.error(response.error)
        setAvailableSlots([])
      } else {
        setAvailableSlots(response.data || [])
      }
    } catch (err) {
      toast.error("Erreur lors du chargement des créneaux")
      setAvailableSlots([])
    } finally {
      setLoadingSlots(false)
    }
  }

  const handleBookAppointment = async () => {
    // Enhanced validation for required fields
    if (!selectedDoctor || !selectedSlot || !typeMaladie.trim()) {
      toast.error("Veuillez remplir tous les champs obligatoires")
      return
    }

    // Enhanced date validation
    if (!selectedDate) {
      toast.error("Veuillez sélectionner une date")
      return
    }

    // Validate date is not in the past
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const appointmentDate = new Date(selectedDate)
    appointmentDate.setHours(0, 0, 0, 0)
    
    if (appointmentDate < today) {
      toast.error("Impossible de réserver un rendez-vous dans le passé")
      return
    }

    // Validate appointment time is not in the past for today's appointments
    if (appointmentDate.getTime() === today.getTime()) {
      const currentTime = new Date()
      const [hours, minutes] = selectedSlot.time.split(':').map(Number)
      const appointmentTime = new Date()
      appointmentTime.setHours(hours, minutes, 0, 0)
      
      if (appointmentTime <= currentTime) {
        toast.error("Ce créneau est déjà passé aujourd'hui")
        return
      }
    }

    // Validate typeMaladie length and content
    if (typeMaladie.trim().length < 3) {
      toast.error("Le motif de consultation doit contenir au moins 3 caractères")
      return
    }

    if (typeMaladie.trim().length > 200) {
      toast.error("Le motif de consultation ne peut pas dépasser 200 caractères")
      return
    }

    // Validate notes length if provided
    if (notes && notes.trim().length > 500) {
      toast.error("Les notes ne peuvent pas dépasser 500 caractères")
      return
    }

    setBooking(true)

    try {
      // Re-check slot availability before booking to prevent race conditions
      const slotsResponse = await doctorService.getAvailableSlots(
        selectedDoctor.id,
        format(selectedDate, "yyyy-MM-dd")
      )

      if (slotsResponse.error) {
        toast.error("Erreur lors de la vérification de disponibilité")
        return
      }

      const currentSlot = slotsResponse.data?.find(
        slot => slot.id === selectedSlot.id && !slot.isBooked
      )

      if (!currentSlot) {
        toast.error("Ce créneau n'est plus disponible. Veuillez en choisir un autre.")
        await refreshAvailableSlots()
        return
      }

      // Calculate end time with fixed 30-minute duration
      const startDateTime = new Date(`2000-01-01T${selectedSlot.time}:00`)
      const endDateTime = new Date(startDateTime.getTime() + 30 * 60 * 1000)
      const endTime = endDateTime.toTimeString().slice(0, 5) // Format: HH:MM

      const bookingData = {
        doctorId: selectedDoctor.id,
        date: format(selectedDate, "yyyy-MM-dd"),
        startTime: selectedSlot.time,
        endTime: endTime,
        typemaladie: typeMaladie.trim(),
        notes: notes.trim() || undefined,
      }

      // Final validation before sending
      if (!bookingData.doctorId || !bookingData.date || 
          !bookingData.startTime || !bookingData.endTime || !bookingData.typemaladie) {
        toast.error("Données de réservation incomplètes")
        return
      }

      const response = await doctorService.bookAppointment(bookingData)

      if (response.error) {
        // Enhanced error handling with specific messages
        if (response.error.includes("Time slot is not available")) {
          toast.error("Ce créneau n'est plus disponible. Veuillez en choisir un autre.")
          await refreshAvailableSlots()
        } else if (response.error.includes("Missing required fields")) {
          toast.error("Tous les champs obligatoires doivent être remplis")
        } else if (response.error.includes("Unauthorized")) {
          toast.error("Vous devez être connecté pour réserver un rendez-vous")
        } else if (response.error.includes("User not found")) {
          toast.error("Erreur d'authentification. Veuillez vous reconnecter.")
        } else if (response.error.includes("Failed to create appointment")) {
          toast.error("Erreur serveur lors de la création du rendez-vous")
        } else {
          toast.error(response.error)
        }
      } else {
        toast.success("Rendez-vous réservé avec succès!", {
          description: `Le ${format(selectedDate, "dd MMMM yyyy", { locale: fr })} à ${selectedSlot.time}`
        })
        setIsBookingDialogOpen(false)
        resetBookingForm()
        
        // Refresh the doctors list to update availability
        await loadDoctors()
      }
    } catch (err) {
      console.error("Booking error:", err)
      
      // Enhanced error logging and user feedback
      if (err instanceof TypeError && err.message.includes('fetch')) {
        toast.error("Erreur de connexion. Vérifiez votre connexion internet.")
      } else if (err instanceof SyntaxError) {
        toast.error("Erreur de format des données. Veuillez réessayer.")
      } else {
        toast.error("Erreur inattendue lors de la réservation. Veuillez réessayer.")
      }
    } finally {
      setBooking(false)
    }
  }

  // Helper function to refresh available slots
  const refreshAvailableSlots = async () => {
    if (!selectedDoctor || !selectedDate) return

    setLoadingSlots(true)
    try {
      const response = await doctorService.getAvailableSlots(
        selectedDoctor.id,
        format(selectedDate, "yyyy-MM-dd"),
      )

      if (response.error) {
        toast.error(response.error)
        setAvailableSlots([])
      } else {
        setAvailableSlots(response.data || [])
        // Clear selected slot if it's no longer available
        if (selectedSlot && !(response.data || []).find(slot => slot.id === selectedSlot.id && !slot.isBooked)) {
          setSelectedSlot(null)
        }
      }
    } catch (err) {
      toast.error("Erreur lors du chargement des créneaux")
      setAvailableSlots([])
    } finally {
      setLoadingSlots(false)
    }
  }

  const resetBookingForm = () => {
    setSelectedDoctor(null)
    setSelectedSlot(null)
    setTypeMaladie("")
    setNotes("")
  }

  const handleRefresh = () => {
    doctorService.clearCache()
    loadDoctors()
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Header bord à bord */}
      <div className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-green-500 py-12 shadow-md">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center">
          <div className="mb-4 flex items-center justify-center">
            <User className="h-12 w-12 text-white bg-blue-500/30 rounded-full p-2 shadow-lg" />
          </div>
          <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-2">
            Rechercher un médecin
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Trouvez le médecin qui vous convient et réservez votre rendez-vous en ligne.
          </p>
        </div>
      </div>
      {/* Le reste du contenu avec padding */}
      <div className="mx-auto max-w-7xl p-6">
        {/* Error Alert */}
        {error && (
          <Alert className="border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Search Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Filtres de recherche
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <label className="text-foreground mb-2 block text-sm font-medium">
                  Nom du médecin
                </label>
                <Input
                  placeholder="Rechercher par nom..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <label className="text-foreground mb-2 block text-sm font-medium">
                  Spécialité
                </label>
                <Select
                  value={selectedSpecialty}
                  onValueChange={setSelectedSpecialty}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Toutes les spécialités" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les spécialités</SelectItem>
                    {SPECIALTIES.filter(
                      (specialty) => specialty && typeof specialty === "string",
                    ).map((specialty) => (
                      <SelectItem
                        key={`specialty-${specialty}`}
                        value={specialty}
                      >
                        {getSpecialtyLabel(specialty)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-foreground mb-2 block text-sm font-medium">
                  Date souhaitée
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate
                        ? format(selectedDate, "dd MMMM yyyy", { locale: fr })
                        : "Sélectionner une date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => date && setSelectedDate(date)}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            {/* Boutons sous la barre de recherche */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-end w-full">
      <Button
    className="bg-blue-600 text-white hover:bg-blue-700 "
    onClick={handleRefresh}
    disabled={loading}
  >
    <Filter className=" mr-2 h-4 w-4" />
    Actualiser
  </Button>
      
    </div>
          </CardContent>
        </Card>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="text-primary h-8 w-8 animate-spin" />
            <span className="text-muted-foreground ml-2">
              Chargement des médecins...
            </span>
          </div>
        )}

        {/* Results */}
        {!loading && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredDoctors.map((doctor) => (
              <Card
                key={doctor.id}
                className="border-border cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 dark:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full">
                        <User className="text-primary h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-foreground text-xl font-bold">
                          {formatDoctorName(doctor)}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-1 text-xs px-2 py-1 rounded">
                          {getSpecialtyLabel(doctor.specialty || "")}
                        </Badge>
                      </div>
                    </div>
                    {doctor.rating && (
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-foreground text-sm font-medium">
                          {doctor.rating}
                        </span>
                      </div>
                    )}
                  </div>
                </CardHeader>
<hr className="border-gray-200 dark:border-gray-700 mx-4" />
                <CardContent className="pt-4">
                  <div className="text-muted-foreground space-y-2 text-sm">
                    {/* {doctor.experience && (
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{doctor.experience}</span>
                      </div>
                    )} */}
                    {/* {doctor.location && (
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{doctor.location}</span>
                      </div>
                    )} */}
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>{doctor.phone_number}</span>
                    </div>
                  </div>

                  <Button
                    className="  cursor-pointer mt-6 w-full
        bg-blue-600
        text-white font-semibold
        rounded-lg
        shadow
        hover:bg-blue-700
        hover:shadow-lg
        transition-all duration-200
        py-2
        text-base"
                    onClick={() => handleDoctorSelect(doctor)}
                  >
                    Réserver un rendez-vous
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!loading && filteredDoctors.length === 0 && (
          <div className="py-12 text-center">
            <div className="bg-muted mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <Search className="text-muted-foreground h-8 w-8" />
            </div>
            <h3 className="text-foreground mb-2 text-lg font-medium">
              Aucun médecin trouvé
            </h3>
            <p className="text-muted-foreground">
              Essayez de modifier vos critères de recherche
            </p>
          </div>
        )}

        {/* Booking Dialog */}
        <Dialog
          open={isBookingDialogOpen}
          onOpenChange={setIsBookingDialogOpen}
        >
          <DialogContent className="max-h-[90vh] max-w-lg overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Réserver un rendez-vous</DialogTitle>
              <DialogDescription>
                {selectedDoctor && `avec ${formatDoctorName(selectedDoctor)}`}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {loadingSlots ? (
                <div className="py-8 text-center">
                  <Loader2 className="text-primary mx-auto h-8 w-8 animate-spin" />
                  <p className="text-muted-foreground mt-2 text-sm">
                    Chargement des créneaux...
                  </p>
                </div>
              ) : (
                <>
                  {/* Time Slots */}
                  <div>
                    <label className="text-foreground mb-2 block text-sm font-medium">
                      Créneaux disponibles
                    </label>
                    {availableSlots.length > 0 ? (
                      <div className="grid grid-cols-3 gap-2">
                        {availableSlots.map((slot) => (
                          <Button
                            key={slot.id}
                            variant={
                              selectedSlot?.id === slot.id
                                ? "default"
                                : "outline"
                            }
                            className="text-sm"
                            onClick={() => setSelectedSlot(slot)}
                            disabled={slot.isBooked}
                          >
                            {slot.time}
                          </Button>
                        ))}
                      </div>
                    ) : (
                      <p className="bg-muted text-muted-foreground rounded p-3 text-sm">
                        Aucun créneau disponible pour cette date
                      </p>
                    )
                    }
                  </div>

                  {/* Appointment Details */}
                  <div className="space-y-4">
                    <div>
                      <label className="text-foreground mb-2 block text-sm font-medium">
                        Motif de consultation *
                      </label>
                      <Input
                        placeholder="Ex: Douleur abdominale, contrôle de routine..."
                        value={typeMaladie}
                        onChange={(e) => setTypeMaladie(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="text-foreground mb-2 block text-sm font-medium">
                        Notes supplémentaires
                      </label>
                      <Textarea
                        placeholder="Informations complémentaires..."
                        value={notes}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                          setNotes(e.target.value)
                        }
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Summary */}
                  {selectedSlot && (
                    <div className="bg-primary/10 dark:bg-primary/20 border-primary/20 rounded-lg border p-4">
                      <h4 className="text-primary mb-2 flex items-center font-medium">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Récapitulatif de votre rendez-vous
                      </h4>
                      <div className="text-foreground space-y-1 text-sm">
                        <p>
                          <strong>Médecin:</strong>{" "}
                          {selectedDoctor && formatDoctorName(selectedDoctor)}
                        </p>
                        <p>
                          <strong>Date:</strong>{" "}
                          {format(selectedDate || new Date(), "dd MMMM yyyy", {
                            locale: fr,
                          })}
                        </p>
                        <p>
                          <strong>Heure:</strong> {selectedSlot.time}
                        </p>
                        <p>
                          <strong>Motif:</strong>{" "}
                          {typeMaladie || "Non spécifié"}
                        </p>
                        <p>
                          <strong>Spécialité:</strong>{" "}
                          {selectedDoctor &&
                            getSpecialtyLabel(selectedDoctor.specialty || "")}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      className="flex-1 bg-red-500 text-white hover:bg-red-700 font-semibold rounded-lg shadow transition-all"
                      onClick={() => setIsBookingDialogOpen(false)}
                      disabled={booking}
                    >
                      Annuler
                    </Button>
                    <Button
                      className="flex-1 bg-blue-600 text-white hover:bg-blue-700 font-semibold rounded-lg shadow transition-all"
                      onClick={handleBookAppointment}
                      disabled={!selectedSlot || !typeMaladie.trim() || booking}
                    >
                      {booking ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Réservation...
                        </>
                      ) : (
                        "Confirmer"
                      )}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
