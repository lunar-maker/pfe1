"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Clock, FileText, Heart, Search, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { FaComments } from "react-icons/fa"
import { Droplet, Activity, Moon } from "lucide-react";

interface Appointment {
  id: number
  date: string
  startTime: string
  endTime: string
  typemaladie: string
  status: string
  notes?: string
  doctor: {
    id: number
    first_name: string
    last_name: string
    specialty?: string
  }
}

export default function HomePage() {
  const [nextAppointment, setNextAppointment] = useState<Appointment | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/appointments')
        
        if (!response.ok) {
          throw new Error('Failed to fetch appointments')
        }
        
        const appointments: Appointment[] = await response.json()
        
        // Find the next upcoming appointment
        const now = new Date()
        const upcomingAppointments = appointments
          .filter(apt => {
            const appointmentDateTime = new Date(apt.date)
            const [hours, minutes] = apt.startTime.split(':').map(Number)
            appointmentDateTime.setHours(hours, minutes, 0, 0)
            return appointmentDateTime > now && apt.status !== 'CANCELLED'
          })
          .sort((a, b) => {
            const dateA = new Date(a.date)
            const dateB = new Date(b.date)
            return dateA.getTime() - dateB.getTime()
          })
        
        setNextAppointment(upcomingAppointments[0] || null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchAppointments()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'CONFIRMED':
        return 'text-green-600 dark:text-green-400'
      case 'PENDING':
        return 'text-yellow-600 dark:text-yellow-400'
      case 'CANCELLED':
        return 'text-red-600 dark:text-red-400'
      case 'COMPLETED':
        return 'text-blue-600 dark:text-blue-400'
      default:
        return 'text-gray-600 dark:text-gray-400'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'CONFIRMED':
        return 'Confirmé'
      case 'PENDING':
        return 'En attente'
      case 'CANCELLED':
        return 'Annulé'
      case 'COMPLETED':
        return 'Terminé'
      default:
        return status
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-green-500 py-12 px-4 shadow-md">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center">
          <div className="mb-4 flex items-center justify-center">
            <User className="h-12 w-12 text-white bg-blue-500/30 rounded-full p-2 shadow-lg" />
          </div>
          <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-2">
            Bienvenue sur votre espace patient
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Gérez facilement vos rendez-vous, accédez à vos ordonnances et suivez vos conseils santé personnalisés.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 py-10">
        <div className="mx-auto max-w-7xl">
          {/* Quick Actions Cards */}
          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Trouver un médecin */}
            <Link href="/patient/doctors" className="group">
              <div className="relative rounded-2xl bg-white/90 dark:bg-gray-800/90 border-0 shadow-lg p-8 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                <div className="mb-4 flex items-center justify-center rounded-full bg-blue-100 p-5 dark:bg-blue-900/30 z-10">
                  <Search className="h-10 w-10 text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mb-1 text-2xl font-bold text-blue-900 dark:text-blue-100 z-10">Trouver un médecin</h3>
                <p className="text-blue-700 dark:text-blue-300 text-sm mb-2 z-10">Réservez un rendez-vous avec un spécialiste près de chez vous.</p>
                <p className="text-gray-500 dark:text-gray-300 text-center mb-4 z-10">
                  Accédez à la liste des médecins disponibles et choisissez celui qui vous convient.
                </p>
                <Button className=" cursor-pointer z-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition-all duration-300 mt-auto">Découvrir</Button>
              </div>
            </Link>
            {/* Mes rendez-vous */}
            <Link href="/patient/appointments" className="group">
              <div className="relative rounded-2xl bg-white/90 dark:bg-gray-800/90 border-0 shadow-lg p-8 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-green-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                <div className="mb-4 flex items-center justify-center rounded-full bg-green-100 p-5 dark:bg-green-900/30 z-10">
                  <Calendar className="h-10 w-10 text-green-600 dark:text-green-400 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mb-1 text-2xl font-bold text-green-900 dark:text-green-100 z-10">Mes rendez-vous</h3>
                <p className="text-green-700 dark:text-green-300 text-sm mb-2 z-10">Gérez vos rendez-vous médicaux en toute simplicité.</p>
                <p className="text-gray-500 dark:text-gray-300 text-center mb-4 z-10">
                  Consultez l'historique, modifiez ou annulez vos rendez-vous à tout moment.
                </p>
                <Button className=" cursor-pointer z-10 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow transition-all duration-300 mt-auto">Voir mes rendez-vous</Button>
              </div>
            </Link>
            {/* Mes ordonnances */}
            <Link href="/patient/ordonnances" className="group">
              <div className="relative rounded-2xl bg-white/90 dark:bg-gray-800/90 border-0 shadow-lg p-8 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-orange-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                <div className="mb-4 flex items-center justify-center rounded-full bg-orange-100 p-5 dark:bg-orange-900/30 z-10">
                  <FileText className="h-10 w-10 text-orange-600 dark:text-orange-400 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mb-1 text-2xl font-bold text-orange-900 dark:text-orange-100 z-10">Mes ordonnances</h3>
                <p className="text-orange-700 dark:text-orange-300 text-sm mb-2 z-10">Retrouvez toutes vos ordonnances en un clic.</p>
                <p className="text-gray-500 dark:text-gray-300 text-center mb-4 z-10">
                  Téléchargez, imprimez ou partagez vos ordonnances médicales facilement.
                </p>
                <Button className="cursor-pointer z-10 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow transition-all duration-300 mt-auto">Voir mes ordonnances</Button>
              </div>
            </Link>
          </div>

            {/* Next Appointment Card */}
          <div className="mb-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-blue-900/30 dark:via-gray-800/60 dark:to-gray-900/80 border-0 shadow-lg p-8">
              <div className="mb-6 flex items-center gap-3">
                <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">Prochain rendez-vous</h3>
              </div>
              {loading ? (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-900/30 animate-pulse">
                    <Clock className="h-8 w-8 text-blue-400 dark:text-blue-200 animate-spin" />
                  </div>
                  <p className="text-blue-400 dark:text-blue-200">Chargement...</p>
                </div>
              ) : error ? (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                    <Calendar className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>
                  <p className="mb-4 text-red-600 dark:text-red-400">Erreur lors du chargement des rendez-vous</p>
                  <p className="text-gray-500 dark:text-gray-300 text-sm">{error}</p>
                </div>
              ) : nextAppointment ? (
                <div className="space-y-4">
                  <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-500/20 dark:bg-blue-500/10 shadow">
                    <div className="mb-4 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-500 dark:text-gray-300 mb-1 text-sm">Date</p>
                        <p className="text-blue-900 dark:text-blue-100 font-medium">{formatDate(nextAppointment.date)}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-300 mb-1 text-sm">Heure</p>
                        <p className="text-blue-900 dark:text-blue-100 font-medium">{nextAppointment.startTime} - {nextAppointment.endTime}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-300 mb-1 text-sm">Médecin</p>
                        <p className="text-blue-900 dark:text-blue-100 font-medium">Dr. {nextAppointment.doctor.first_name} {nextAppointment.doctor.last_name}</p>
                        {nextAppointment.doctor.specialty && (
                          <p className="text-gray-400 dark:text-gray-300 text-sm">{nextAppointment.doctor.specialty}</p>
                        )}
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-300 mb-1 text-sm">Motif</p>
                        <p className="text-blue-900 dark:text-blue-100 font-medium">{nextAppointment.typemaladie}</p>
                      </div>
                    </div>
                    <div className="border-t border-blue-200 dark:border-blue-500/20 pt-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-500 dark:text-gray-300 mb-1 text-sm">Statut</p>
                          <p className={`font-medium ${getStatusColor(nextAppointment.status)}`}>{getStatusText(nextAppointment.status)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link href="/patient/appointments">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition-all duration-300">Voir tous mes rendez-vous</Button>
                  </Link>
                </div>
              ) : (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <Calendar className="h-8 w-8 text-blue-400 dark:text-blue-200" />
                  </div>
                  <p className="text-blue-400 dark:text-blue-200 mb-4">Vous n'avez pas de rendez-vous à venir.</p>
                  <Link href="/patient/doctors">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition-all duration-300">Prendre un rendez-vous</Button>
                  </Link>
                </div>
              )}
            </div>
            {/* Health Overview (optional, placeholder for now) */}
            <div className="rounded-2xl bg-white/90 dark:bg-gray-800/90 border-0 shadow-lg p-8 flex flex-col items-center justify-center">
              <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-4 flex items-center gap-2"><User className="h-5 w-5" /> Mon espace santé</h3>
              <p className="text-gray-500 dark:text-gray-300 mb-2">Gardez un œil sur vos informations médicales et vos rendez-vous.</p>
              <div className="flex flex-wrap gap-4 justify-center mt-4">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-blue-700 dark:text-blue-300">{nextAppointment ? 1 : 0}</span>
                  <span className="text-xs text-gray-500">Rendez-vous à venir</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-green-700 dark:text-green-300">✓</span>
                  <span className="text-xs text-gray-500">Dossier à jour</span>
                </div>
              </div>
            </div>
          </div>

          {/* Health Tips Section */}
          <div className="mt-8 rounded-2xl border-0 shadow-lg bg-gradient-to-r from-blue-50 to-green-50 p-8 dark:from-blue-900/10 dark:to-green-900/10">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-blue-500/10 p-2 dark:bg-blue-500/20">
                <Heart className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-100">Conseils santé du jour</h3>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-white/80 dark:bg-gray-800/80 border-0 p-6 flex flex-col items-center">
  <Droplet className="h-8 w-8 text-blue-500 mb-2" />
  <p className="text-gray-500 dark:text-gray-300 mb-2 text-sm">Hydratation</p>
  <p className="text-blue-900 dark:text-blue-100 text-center">
    Buvez au moins 1,5L d'eau par jour pour maintenir une bonne hydratation.
  </p>
</div>
<div className="rounded-xl bg-white/80 dark:bg-gray-800/80 border-0 p-6 flex flex-col items-center">
  <Activity className="h-8 w-8 text-green-500 mb-2" />
  <p className="text-gray-500 dark:text-gray-300 mb-2 text-sm">Activité physique</p>
  <p className="text-blue-900 dark:text-blue-100 text-center">
    30 minutes d'activité physique modérée par jour sont recommandées.
  </p>
</div>
<div className="rounded-xl bg-white/80 dark:bg-gray-800/80 border-0 p-6 flex flex-col items-center">
  <Moon className="h-8 w-8 text-purple-500 mb-2" />
  <p className="text-gray-500 dark:text-gray-300 mb-2 text-sm">Sommeil</p>
  <p className="text-blue-900 dark:text-blue-100 text-center">
    Un sommeil de 7-8h par nuit est essentiel pour votre bien-être.
  </p>
</div>
            </div>
          </div>
        </div>
      </main>
      {/* Modern Floating Chatbot Button */}
      <div className="fixed bottom-8 right-8 z-50">
              <Link href="/chat">
                <Button
                  variant="secondary"
            className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-green-500 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                >
            <FaComments className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span className="font-medium">Chatbot</span>
                </Button>
              </Link>
            </div>
    </div>
  )
}