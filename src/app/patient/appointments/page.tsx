"use client"

import React, { useState, useEffect, Children } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
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
import {
  ArrowRightOnRectangleIcon,
  UserIcon,
  CalendarIcon,
  ClockIcon,
  PhoneIcon,
  XMarkIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline"
import { Navbar } from "@/components/navbar"
import { format, isToday, isTomorrow } from "date-fns"
import { fr } from "date-fns/locale"
import { FaComments } from "react-icons/fa"
import { CheckCircleIcon } from "lucide-react"

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
  phone_number: string
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
}

export default function AppointmentsPage() {
  const [showSettingsBar, setShowSettingsBar] = useState(false)
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [activeTab, setActiveTab] = useState("upcoming")
  const router = useRouter()

  // Fetch appointments
  const fetchAppointments = async (date?: Date) => {
    try {
      setLoading(true)
      const searchParams = new URLSearchParams()
      if (date) {
        searchParams.append(
          "date",
          `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
        )
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

  // Cancel appointment
  const cancelAppointment = async (appointmentId: number) => {
    if (!confirm("Êtes-vous sûr de vouloir annuler ce rendez-vous ?")) {
      return
    }

    try {
      const response = await fetch("/api/appointments", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: appointmentId,
          status: "CANCELLED",
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to cancel appointment")
      }

      // Refresh appointments
      fetchAppointments(selectedDate)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to cancel appointment",
      )
    }
  }

  // Filter appointments based on criteria
  const getFilteredAppointments = () => {
    return appointments.filter((appointment) => {
      const matchesStatus =
        filterStatus === "all" ||
        appointment.status === filterStatus.toUpperCase()
      const matchesSearch =
        appointment.doctor.first_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        appointment.doctor.last_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        appointment.typemaladie
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        (appointment.doctor.specialty &&
          appointment.doctor.specialty
            .toLowerCase()
            .includes(searchTerm.toLowerCase()))

      return matchesStatus && matchesSearch
    })
  }

  // Get appointments by category
  const getUpcomingAppointments = () => {
    const today = new Date()
    return getFilteredAppointments()
      .filter(
        (appointment) =>
          new Date(appointment.date) >= today &&
          appointment.status !== "CANCELLED",
      )
      .slice(0, 10)
  }

  const getPastAppointments = () => {
    const today = new Date()
    return getFilteredAppointments()
      .filter((appointment) => new Date(appointment.date) < today)
      .slice(0, 10)
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
        return "En attente"
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
 const canCancelAppointment = (appointment: Appointment) => {
  // Gère les deux formats de date
  let appointmentDate: Date
  if (appointment.date.includes('T')) {
    appointmentDate = new Date(appointment.date)
  } else {
    const [year, month, day] = appointment.date.split('-')
    appointmentDate = new Date(Number(year), Number(month) - 1, Number(day))
  }

  // On ignore l'heure, on ne garde que l'année, le mois, le jour
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  appointmentDate.setHours(0, 0, 0, 0)

  // Calcul du nombre de jours de différence
  const diffDays = Math.ceil(
    (appointmentDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  )

  return diffDays >= 2
}
  function toggleSettingsBar() {
    setShowSettingsBar(!showSettingsBar)
  }

  const AppointmentCard = ({ appointment }: { appointment: Appointment }) => (
    <Card className="mb-4">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="rounded-full bg-blue-100 dark:bg-blue-900/20 p-3">
              <UserIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold text-foreground truncate">
                Dr. {appointment.doctor.first_name} {appointment.doctor.last_name}
              </h3>
              <p className="mb-1 text-muted-foreground truncate">
                {appointment.doctor.specialty && (
                  <span className="flex items-center gap-1">
                    <BuildingOfficeIcon className="h-4 w-4" />
                    {appointment.doctor.specialty}
                  </span>
                )}
              </p>
              <p className="mb-1 font-medium text-muted-foreground truncate">
                {appointment.typemaladie}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <ClockIcon className="h-4 w-4" />
                  {formatTime(appointment.startTime)} - {formatTime(appointment.endTime)}
                </div>
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4" />
                  {formatAppointmentDate(appointment.date)}
                </div>
                <div className="flex items-center gap-1">
                  <PhoneIcon className="h-4 w-4" />
                  {appointment.doctor.phone_number}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Badge variant={getStatusBadgeVariant(appointment.status)} className="flex-shrink-0 whitespace-nowrap">
              {getStatusText(appointment.status)}
            </Badge>
          </div>
        </div>
        {appointment.notes && (
          <div className="mt-4 rounded-lg bg-muted p-3">
            <p className="text-sm text-muted-foreground">
              <strong>Notes:</strong> {appointment.notes}
            </p>
          </div>
        )}
        {(appointment.status === "PENDING" || appointment.status === "CONFIRMED") &&
          new Date(appointment.date) >= new Date() && (
            <Button
              size="sm"
              variant="outline"
              className="mt-4 border-red-600 text-red-600 hover:bg-red-50 dark:text-red-400 dark:border-red-400 dark:hover:bg-red-950/20"
              onClick={() => cancelAppointment(appointment.id)}
              disabled={!canCancelAppointment(appointment)}
              title={
                !canCancelAppointment(appointment)
                  ? "Vous ne pouvez annuler ce rendez-vous que plus de 48h à l'avance."
                  : ""
              }
            >
              <XMarkIcon className="h-4 w-4" />
              Annuler
            </Button>
          )}
      </CardContent>
    </Card>
  )

  return (
    <div className="flex min-h-screen flex-col bg-background">
    
      <div className="w-full bg-gradient-to-r from-green-500 via-blue-500 to-indigo-500 py-12 shadow-md">
  <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
    <div className="mb-4 flex items-center justify-center">
      <CalendarIcon className="h-12 w-12 text-white bg-white/10 rounded-full p-2 shadow-lg" />
    </div>
    <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-2">
      Mes rendez-vous
    </h1>
    <p className="text-blue-100 text-lg max-w-2xl">
      Gérez vos rendez-vous médicaux et suivez votre planning de santé
    </p>
  </div>
</div>
<div className="w-full bg-transparent py-6">
  <div className="mx-auto max-w-6xl grid grid-cols-1 gap-6 md:grid-cols-3">
    {/* Rendez-vous à venir */}
    <div className="rounded-2xl bg-white shadow-md p-6 flex items-center justify-between">
      <div>
        <div className="text-sm text-muted-foreground mb-1">Rendez-vous à venir</div>
        <div className="text-2xl font-bold text-blue-700">{getUpcomingAppointments().length}</div>
      </div>
      <div className="rounded-full bg-blue-100 p-3">
        <ClockIcon className="h-6 w-6 text-blue-500" />
      </div>
    </div>
    {/* Rendez-vous terminés */}
    <div className="rounded-2xl bg-white shadow-md p-6 flex items-center justify-between">
      <div>
        <div className="text-sm text-muted-foreground mb-1">Rendez-vous passés</div>
        <div className="text-2xl font-bold text-green-600">{getPastAppointments().length}</div>
      </div>
      <div className="rounded-full bg-green-100 p-3">
        <CheckCircleIcon className="h-6 w-6 text-green-500" />
      </div>
    </div>
    {/* Total */}
    <div className="rounded-2xl bg-white shadow-md p-6 flex items-center justify-between">
      <div>
        <div className="text-sm text-muted-foreground mb-1">Total</div>
        <div className="text-2xl font-bold text-gray-800">{getAllAppointments().length}</div>
      </div>
      <div className="rounded-full bg-gray-100 p-3">
        <CalendarIcon className="h-6 w-6 text-gray-500" />
      </div>
    </div>
  </div>
</div>
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8 flex items-center justify-between">
          
          <Link href="/patient/doctors">
            <Button className="  flex items-center gap-2
      bg-blue-600
      text-white
      font-semibold
      rounded-lg
      shadow
      hover:bg-blue-700
      transition-all
      px-5 py-2
      text-base">
              <PlusIcon className="h-4 w-4" />
              Prendre rendez-vous
            </Button>
          </Link>
        </div>

        {error && (
          <div className="mb-6 rounded-lg border border-destructive/20 bg-destructive/10 p-4">
            <p className="text-destructive">{error}</p>
          </div>
        )}

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex-1">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
                  <Input
                    placeholder="Rechercher par médecin, spécialité ou motif..."
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
                  <SelectItem
    value="all"
    className="py-2 px-4 rounded-md
    hover:bg-blue-50 dark:hover:bg-blue-900/30
    transition-colors font-medium
    data-[state=checked]:bg-blue-100 data-[state=checked]:text-blue-700"
  >
    Tous les statuts
  </SelectItem>
  <SelectItem
    value="confirmed"
    className="py-2 px-4 rounded-md hover:bg-yellow-50 dark:hover:bg-yellow-900/30 transition-colors font-medium data-[state=checked]:bg-blue-100 data-[state=checked]:text-blue-700 "
  >
    En attente
  </SelectItem>
  {/* <SelectItem
    value="confirmed"
    className="py-2 px-4 rounded-md hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors font-medium data-[state=checked]:bg-blue-100 data-[state=checked]:text-blue-700 "
  >
    Confirmés
  </SelectItem> */}
  <SelectItem
    value="completed"
    className="py-2 px-4 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors font-medium data-[state=checked]:bg-blue-100 data-[state=checked]:text-blue-700 "
  >
    Terminés
  </SelectItem>
  <SelectItem
    value="cancelled"
    className="py-2 px-4 rounded-md hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors font-medium data-[state=checked]:bg-blue-100 data-[state=checked]:text-blue-700 "
  >
    Annulés
  </SelectItem>
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
                    onSelect={(date) => {
                      setSelectedDate(date)
                      if (date) {
                        fetchAppointments(date)
                      } else {
                        fetchAppointments()
                      }
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {selectedDate && (
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSelectedDate(undefined)
                    fetchAppointments()
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
            <TabsTrigger value="upcoming">
              À venir ({getUpcomingAppointments().length})
            </TabsTrigger>
            <TabsTrigger value="past">
              Passés ({getPastAppointments().length})
            </TabsTrigger>
            <TabsTrigger value="all">
              Tous ({getAllAppointments().length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Rendez-vous à venir</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="py-8 text-center">
                    <div className="mx-auto h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
                    <p className="mt-2 text-muted-foreground">Chargement...</p>
                  </div>
                ) : getUpcomingAppointments().length === 0 ? (
                  <div className="py-8 text-center">
                    <CalendarIcon className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                    <p className="mb-4 text-muted-foreground">
                      Aucun rendez-vous à venir
                    </p>
                    <Link href="/patient/doctors">
  <Button className="bg-blue-600 text-white hover:bg-blue-700 font-semibold rounded-lg shadow transition-all">
    <PlusIcon className="mr-2 h-4 w-4" />
    Prendre un rendez-vous
  </Button>
</Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getUpcomingAppointments().map((appointment) => (
                      <AppointmentCard
                        key={appointment.id}
                        appointment={appointment}
                      />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="past" className="mt-6">
  <Card>
    <CardHeader>
      <CardTitle>Rendez-vous passés</CardTitle>
    </CardHeader>
    <CardContent>
      {loading ? (
        <div className="py-8 text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
          <p className="mt-2 text-muted-foreground">Chargement...</p>
        </div>
      ) : getPastAppointments().length === 0 ? (
        <div className="py-8 text-center">
          <CalendarIcon className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
          <p className="text-muted-foreground">Aucun rendez-vous passé</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {getPastAppointments().map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
            />
          ))}
        </div>
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
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
          <p className="mt-2 text-muted-foreground">Chargement...</p>
        </div>
      ) : getAllAppointments().length === 0 ? (
        <div className="py-8 text-center">
          <CalendarIcon className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
          <p className="text-muted-foreground">Aucun rendez-vous trouvé</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {getAllAppointments().map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
            />
          ))}
        </div>
      )}
    </CardContent>
  </Card>
</TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
