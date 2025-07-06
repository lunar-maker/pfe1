"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  FileText,
  Pill,
  User,
} from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

interface PrescriptionMedication {
  id: number
  medicationName: string
  dosage: string
  frequency: string
  duration: string
  instructions?: string
}

interface Prescription {
  id: number
  diagnosis: string
  instructions?: string
  validUntil?: string
  isActive: boolean
  createdAt: string
  updatedAt: string
  medications: PrescriptionMedication[]
  doctor: {
    first_name: string
    last_name: string
    specialty?: string
  }
  appointment: {
    date: string
    startTime: string
    typemaladie: string
  }
}

export default function PatientPrescriptionsPage() {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/prescriptions")

        if (!response.ok) {
          throw new Error("Failed to fetch prescriptions")
        }

        const data = await response.json()
        setPrescriptions(data.prescriptions || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchPrescriptions()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const isExpired = (validUntil?: string) => {
    if (!validUntil) return false
    return new Date(validUntil) < new Date()
  }

  const getStatusBadge = (prescription: Prescription) => {
    if (!prescription.isActive) {
      return <Badge variant="secondary">Inactive</Badge>
    }
    if (isExpired(prescription.validUntil)) {
      return <Badge variant="destructive">Expirée</Badge>
    }
    return (
      <Badge variant="default" className="bg-green-500">
        Active
      </Badge>
    )
  }

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <main className="bg-background flex-1 p-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <h1 className="text-foreground mb-2 text-3xl font-bold">
                Mes ordonnances
              </h1>
              <p className="text-muted-foreground">
                Consultez et gérez vos ordonnances médicales
              </p>
            </div>

            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="h-4 rounded bg-gray-200 dark:bg-gray-700"></div>
                      <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col">
        <main className="bg-background flex-1 p-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <h1 className="text-foreground mb-2 text-3xl font-bold">
                Mes ordonnances
              </h1>
            </div>

            <Card className="border-red-200 bg-red-50 dark:border-red-500/20 dark:bg-red-500/10">
              <CardContent className="p-6">
                <div className="text-center">
                  <FileText className="mx-auto mb-4 h-16 w-16 text-red-600 dark:text-red-400" />
                  <h3 className="mb-2 text-lg font-semibold text-red-600 dark:text-red-400">
                    Erreur lors du chargement
                  </h3>
                  <p className="text-red-600 dark:text-red-400">{error}</p>
                  <Button
                    onClick={() => window.location.reload()}
                    variant="outline"
                    className="mt-4"
                  >
                    Réessayer
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="w-full bg-gradient-to-r from-blue-500 via-blue-500 to-green-400 py-12 shadow-md">
  <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
    <div className="mb-4 flex items-center justify-center">
      <FileText className="h-12 w-12 text-white bg-white/10 rounded-full p-2 shadow-lg" />
    </div>
    <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-2">
      Mes ordonnances
    </h1>
    <p className="text-blue-100 text-lg max-w-2xl">
      Consultez et gérez vos prescriptions médicales en toute sécurité
    </p>
  </div>
</div>
      <main className="bg-background flex-1 p-6">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground text-sm">
                {prescriptions.length} ordonnance
                {prescriptions.length !== 1 ? "s" : ""}
              </div>
            </div>
          </div>

          {prescriptions.length === 0 ? (
            <Card>
              <CardContent className="p-12">
                <div className="text-center">
                  <FileText className="text-muted-foreground mx-auto mb-4 h-16 w-16" />
                  <h3 className="text-foreground mb-2 text-lg font-semibold">
                    Aucune ordonnance trouvée
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Vous n'avez pas encore d'ordonnances. Elles apparaîtront ici
                    après vos consultations.
                  </p>
                  <Link href="/patient/doctors">
                    <Button>
                      <Calendar className="mr-2 h-4 w-4" />
                      Prendre un rendez-vous
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {prescriptions.map((prescription) => (
                <Card key={prescription.id} className="overflow-hidden">
                  <CardHeader className="bg-muted/30 pb-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <CardTitle className="text-xl">
                            Ordonnance #{prescription.id}
                          </CardTitle>
                          {getStatusBadge(prescription)}
                        </div>
                        <div className="text-muted-foreground flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            Dr. {prescription.doctor.first_name}{" "}
                            {prescription.doctor.last_name}
                            {prescription.doctor.specialty && (
                              <span className="ml-1">
                                ({prescription.doctor.specialty})
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formatDate(prescription.appointment.date)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {prescription.appointment.startTime}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <div className="grid gap-6 lg:grid-cols-2">
                      {/* Diagnostic et informations */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-foreground mb-2 font-semibold">
                            Diagnostic
                          </h4>
                          <p className="text-muted-foreground">
                            {prescription.diagnosis}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-foreground mb-2 font-semibold">
                            Motif de consultation
                          </h4>
                          <p className="text-muted-foreground">
                            {prescription.appointment.typemaladie}
                          </p>
                        </div>

                        {prescription.instructions && (
                          <div>
                            <h4 className="text-foreground mb-2 font-semibold">
                              Instructions générales
                            </h4>
                            <p className="text-muted-foreground">
                              {prescription.instructions}
                            </p>
                          </div>
                        )}

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">
                              Prescrite le:
                            </span>
                            <p className="font-medium">
                              {formatDateTime(prescription.createdAt)}
                            </p>
                          </div>
                          {prescription.validUntil && (
                            <div>
                              <span className="text-muted-foreground">
                                Valide jusqu'au:
                              </span>
                              <p
                                className={`font-medium ${isExpired(prescription.validUntil) ? "text-red-600 dark:text-red-400" : ""}`}
                              >
                                {formatDateTime(prescription.validUntil)}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Médicaments */}
                      <div>
                        <h4 className="text-foreground mb-4 flex items-center gap-2 font-semibold">
                          <Pill className="h-5 w-5" />
                          Médicaments prescrits (
                          {prescription.medications.length})
                        </h4>
                        <div className="space-y-3">
                          {prescription.medications.map((medication) => (
                            <div
                              key={medication.id}
                              className="border-border bg-card rounded-lg border p-4"
                            >
                              <div className="mb-2">
                                <h5 className="text-foreground font-semibold">
                                  {medication.medicationName}
                                </h5>
                                <p className="text-muted-foreground text-sm">
                                  {medication.dosage}
                                </p>
                              </div>
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                  <span className="text-muted-foreground">
                                    Fréquence:
                                  </span>
                                  <p className="font-medium">
                                    {medication.frequency}
                                  </p>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">
                                    Durée:
                                  </span>
                                  <p className="font-medium">
                                    {medication.duration}
                                  </p>
                                </div>
                              </div>
                              {medication.instructions && (
                                <div className="mt-2">
                                  <span className="text-muted-foreground text-sm">
                                    Instructions:
                                  </span>
                                  <p className="text-sm">
                                    {medication.instructions}
                                  </p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Info section */}
          <Card className="mt-8 border-blue-200 bg-blue-50 dark:border-blue-500/20 dark:bg-blue-500/10">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-blue-500/10 p-2 dark:bg-blue-500/20">
                  <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-blue-900 dark:text-blue-100">
                    À propos de vos ordonnances
                  </h3>
                  <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                    <p>
                      • Conservez vos ordonnances dans un endroit sûr et
                      accessible
                    </p>
                    <p>
                      • Respectez scrupuleusement les posologies et durées de
                      traitement
                    </p>
                    <p>
                      • En cas de doute, contactez votre médecin ou pharmacien
                    </p>
                    <p>
                      • Les ordonnances expirées ne sont plus valables en
                      pharmacie
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
