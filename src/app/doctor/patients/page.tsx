"use client"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useState, useEffect } from "react"
import {
  ArrowRightOnRectangleIcon,
  MagnifyingGlassIcon,
  UserIcon,
  PhoneIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline"
import { toast } from "sonner"

// Define the Patient type based on our API response
interface Patient {
  id: number
  name: string
  firstName: string
  lastName: string
  phone: string
  age: number
  gender: string
  lastVisit: string
  lastAppointmentStatus: string
  lastConsultationReason: string
  notes: string | null
}

function PatientsPage() {
  const [showSettingsBar, setShowSettingsBar] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [patients, setPatients] = useState<Patient[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [updatingNotes, setUpdatingNotes] = useState<Set<number>>(new Set())

  function toggleSettingsBar() {
    setShowSettingsBar(!showSettingsBar)
  }

  // Fetch patients from the API
  useEffect(() => {
    fetchPatients()
  }, [])

  const fetchPatients = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/patients")

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to fetch patients")
      }

      const data = await response.json()
      setPatients(data)
    } catch (err) {
      console.error("Error fetching patients:", err)
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  // Handle search with debouncing
  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      if (searchTerm.trim()) {
        fetchPatientsWithSearch(searchTerm)
      } else {
        fetchPatients()
      }
    }, 300)

    return () => clearTimeout(delayedSearch)
  }, [searchTerm])

  const fetchPatientsWithSearch = async (search: string) => {
    try {
      setLoading(true)
      const response = await fetch(
        `/api/patients?search=${encodeURIComponent(search)}`,
      )

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to search patients")
      }

      const data = await response.json()
      setPatients(data)
    } catch (err) {
      console.error("Error searching patients:", err)
      toast.error("Failed to search patients")
    } finally {
      setLoading(false)
    }
  }

  // Handle updating patient notes
  const handleNotesUpdate = async (patient: Patient, newNotes: string) => {
    // For now, we'll need the appointment ID. In a real scenario, you might want to
    // track the most recent appointment ID or create a separate patient notes system
    toast.info(
      "Note: To update notes, please use the patient's medical file system",
    )
  }

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING":
        return "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800"
      case "CONFIRMED":
        return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800"
      case "COMPLETED":
        return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800"
      case "CANCELLED":
        return "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800/20 dark:text-gray-300 dark:border-gray-700"
    }
  }

  // Get status text in French
  const getStatusText = (status: string) => {
    switch (status) {
      case "PENDING":
        return "En attente"
      case "CONFIRMED":
        return "Confirmé"
      case "COMPLETED":
        return "Terminé"
      case "CANCELLED":
        return "Annulé"
      default:
        return status
    }
  }

  // Get gender text in French
  const getGenderText = (gender: string) => {
    switch (gender) {
      case "MALE":
        return "Homme"
      case "FEMALE":
        return "Femme"
      case "OTHER":
        return "Autre"
      default:
        return gender
    }
  }
 
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header coloré en full width */}
      <div className="w-full bg-gradient-to-r from-blue-500 via-blue-500 to-green-400 py-12 shadow-md mb-8">
        <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
          <div className="mb-4 flex items-center justify-center">
            <UserIcon className="h-12 w-12 text-white bg-white/10 rounded-full p-2 shadow-lg" />
          </div>
          <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-2">
            Mes Patients
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Gérez vos patients et consultez leurs informations médicales
          </p>
        </div>
      </div>
      {/* Main content */}
      <div className="flex-1 p-6">
        <div className="mx-auto max-w-7xl">
         
          {/* Search and filters */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="relative max-w-md flex-1">
                  <MagnifyingGlassIcon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Rechercher un patient par nom ou téléphone..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={fetchPatients}
                    disabled={loading}
                  >
                    Actualiser
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Loading state */}
          {loading && (
            <Card>
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
                <p className="text-muted-foreground">Chargement des patients...</p>
              </CardContent>
            </Card>
          )}

          {/* Error state */}
          {error && (
            <Card className="border-destructive/20 bg-destructive/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-destructive">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-medium">Erreur:</span>
                  <span>{error}</span>
                </div>
                <Button
                  variant="outline"
                  onClick={fetchPatients}
                  className="mt-4"
                >
                  Réessayer
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Patients list */}
          {!loading && !error && (
            <>
              {patients.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <UserIcon className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                    <h3 className="mb-2 text-lg font-medium text-foreground">
                      Aucun patient trouvé
                    </h3>
                    <p className="text-muted-foreground">
                      {searchTerm
                        ? "Aucun patient ne correspond à votre recherche."
                        : "Vous n'avez pas encore de patients avec des rendez-vous."}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {patients.map((patient) => (
                    <Card
                      key={patient.id}
                      className="transition-shadow hover:shadow-lg"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg font-semibold text-foreground">
                              {patient.name}
                            </CardTitle>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {patient.age} ans •{" "}
                              {getGenderText(patient.gender)}
                            </p>
                          </div>
                          <Badge
                            className={getStatusColor(
                              patient.lastAppointmentStatus,
                            )}
                          >
                            {getStatusText(patient.lastAppointmentStatus)}
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Contact info */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <PhoneIcon className="h-4 w-4" />
                          <span>{patient.phone}</span>
                        </div>

                        {/* Last visit */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CalendarIcon className="h-4 w-4" />
                          <span>
                            Dernière visite: {formatDate(patient.lastVisit)}
                          </span>
                        </div>

                        {/* Last consultation reason */}
                        <div className="rounded-lg bg-muted p-3">
                          <p className="mb-1 text-xs text-muted-foreground">
                            Dernière consultation:
                          </p>
                          <p className="text-sm text-foreground">
                            {patient.lastConsultationReason}
                          </p>
                        </div>

                        {/* Notes */}
                        {patient.notes && (
                          <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3">
                            <p className="mb-1 text-xs text-blue-600 dark:text-blue-400">Notes:</p>
                            <p className="text-sm text-blue-800 dark:text-blue-300">
                              {patient.notes}
                            </p>
                          </div>
                        )}

                        {/* Actions */}
                        {/* <div className="flex gap-2 pt-4">
                          <Link
                            href={`/doctor/dossier?patientId=${patient.id}`}
                            className="flex-1"
                          >
                            <Button variant="default" className="w-full">
                              <ClipboardDocumentListIcon className="mr-2 h-4 w-4" />
                              Dossier médical
                            </Button>
                          </Link>
                        </div> */}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Summary */}
              {patients.length > 0 && (
                <Card className="mt-6">
                  <CardContent className="p-4">
                    <p className="text-center text-sm text-muted-foreground">
                      {patients.length} patient{patients.length > 1 ? "s" : ""}
                      {searchTerm && " trouvé(s)"}
                    </p>
                  </CardContent>
                </Card>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default PatientsPage
