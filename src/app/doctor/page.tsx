"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
  CalendarDaysIcon,
  UsersIcon,
  ClockIcon,
  DocumentTextIcon,
  ChartBarIcon,
  BellIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline"
import { FaComments } from "react-icons/fa"

interface DashboardStats {
  today: {
    appointments: number
    patients: number
  }
  total: {
    patients: number
  }
  thisWeek: {
    appointments: number
  }
}

export default function DoctorDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch("/api/doctors/stats")
        if (!response.ok) {
          throw new Error("Failed to fetch statistics")
        }
        const data = await response.json()
        setStats(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Enhanced Header */}
      <div className="relative overflow-hidden border-b border-gray-200 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:border-gray-700">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white drop-shadow-lg">
                Tableau de bord
          </h1>
              <p className="mt-2 text-blue-100">
                Gérez vos patients et votre emploi du temps professionnellement
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                <BellIcon className="h-6 w-6 text-white" />
              </div>
              <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                <UserGroupIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="mx-auto w-full max-w-7xl px-4 py-8">
        {/* Stats Overview Cards */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Today's Appointments */}
          <Card className="group relative overflow-hidden border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105 dark:bg-gray-800/80">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <CardContent className="relative p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Rendez-vous aujourd'hui
                  </p>
                  <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                    {loading ? "..." : stats?.today.appointments || 0}
                  </p>
                </div>
                <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/30">
                  <CalendarIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <ArrowTrendingUpIcon className="mr-1 h-4 w-4 text-green-500" />
                <span className="text-green-600 dark:text-green-400">+12%</span>
                <span className="ml-1 text-gray-500">vs hier</span>
              </div>
            </CardContent>
          </Card>

          {/* Today's Patients */}
          <Card className="group relative overflow-hidden border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105 dark:bg-gray-800/80">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <CardContent className="relative p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Patients aujourd'hui
                  </p>
                  <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                    {loading ? "..." : stats?.today.patients || 0}
                  </p>
                </div>
                <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/30">
                  <UsersIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <ArrowTrendingUpIcon className="mr-1 h-4 w-4 text-green-500" />
                <span className="text-green-600 dark:text-green-400">+8%</span>
                <span className="ml-1 text-gray-500">vs hier</span>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Appointments */}
          <Card className="group relative overflow-hidden border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105 dark:bg-gray-800/80">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <CardContent className="relative p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Cette semaine
                  </p>
                  <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                    {loading ? "..." : stats?.thisWeek.appointments || 0}
                  </p>
                </div>
                <div className="rounded-full bg-orange-100 p-3 dark:bg-orange-900/30">
                  <ClockIcon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <ArrowTrendingUpIcon className="mr-1 h-4 w-4 text-green-500" />
                <span className="text-green-600 dark:text-green-400">+15%</span>
                <span className="ml-1 text-gray-500">vs semaine dernière</span>
              </div>
            </CardContent>
          </Card>

          {/* Total Patients */}
          <Card className="group relative overflow-hidden border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105 dark:bg-gray-800/80">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <CardContent className="relative p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Total patients
                  </p>
                  <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                    {loading ? "..." : stats?.total.patients || 0}
                  </p>
                </div>
                <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/30">
                  <UserGroupIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <ArrowTrendingUpIcon className="mr-1 h-4 w-4 text-green-500" />
                <span className="text-green-600 dark:text-green-400">+5%</span>
                <span className="ml-1 text-gray-500">ce mois</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Action Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Schedule Management - Enhanced Featured Card */}
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 lg:col-span-2">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/5"></div>
            <CardHeader className="relative">
              <div className="flex items-center space-x-4">
                <div className="rounded-xl bg-white/20 p-3 backdrop-blur-sm">
                  <CalendarDaysIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-white">
                    Gestion des horaires
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Définissez votre disponibilité hebdomadaire professionnellement
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <p className="mb-6 text-blue-100">
                Configurez vos créneaux de consultation et laissez vos patients
                réserver en ligne de manière autonome.
              </p>
              <Link href="/doctor/schedule">
                <Button className="group/btn bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                  <span>Configurer mes horaires</span>
                  <ArrowTrendingUpIcon className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Quick Actions Sidebar */}
          <div className="space-y-6">
            {/* Appointments Card */}
            <Card className="group overflow-hidden border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105 dark:bg-gray-800/80">
              <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                  <div className="rounded-lg bg-orange-100 p-2 dark:bg-orange-900/30">
                    <ClockIcon className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <CardTitle className="text-lg">Rendez-vous</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                  Consultez et gérez vos rendez-vous en temps réel
              </p>
              <Link href="/doctor/appointments">
                  <Button variant="outline" className="w-full group/btn transition-all duration-300 hover:scale-105">
                    <span>Voir les rendez-vous</span>
                    <ArrowTrendingUpIcon className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

            {/* Patients Card */}
            <Card className="group overflow-hidden border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105 dark:bg-gray-800/80">
              <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                  <div className="rounded-lg bg-purple-100 p-2 dark:bg-purple-900/30">
                    <UsersIcon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-lg">Mes patients</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                  Accédez aux dossiers patients et informations médicales
              </p>
              <Link href="/doctor/patients">
                  <Button variant="outline" className="w-full group/btn transition-all duration-300 hover:scale-105">
                    <span>Voir les patients</span>
                    <ArrowTrendingUpIcon className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

            {/* Medical Records Card */}
            {/* <Card className="group overflow-hidden border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105 dark:bg-gray-800/80"> */}
              {/* <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                  <div className="rounded-lg bg-teal-100 p-2 dark:bg-teal-900/30">
                    <DocumentTextIcon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <CardTitle className="text-lg">Dossiers médicaux</CardTitle>
              </div>
            </CardHeader> */}
            {/* <CardContent>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                  Gérez les dossiers médicaux et ordonnances
                </p>
                <Link href="/doctor/dossier">
                  <Button variant="outline" className="w-full group/btn transition-all duration-300 hover:scale-105">
                    <span>Voir les dossiers</span>
                    <ArrowTrendingUpIcon className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
            </Card> */}
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mt-8">
          <Card className="border-0 bg-white/80 shadow-lg backdrop-blur-sm dark:bg-gray-800/80">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChartBarIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Activité récente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                  <div className="flex items-center space-x-3">
                    <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900/30">
                      <UsersIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Nouveau patient enregistré
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                       IBRIHAL ES SBAR 
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">Il y a 2h</span>
                </div>
                {/* <div className="flex items-center justify-between rounded-lg bg-green-50 p-4 dark:bg-green-900/20"> */}
                  {/* <div className="flex items-center space-x-3"> */}
                    {/* <div className="rounded-full bg-green-100 p-2 dark:bg-green-900/30">
                      <CalendarIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div> */}
                    {/* <div> */}
                      {/* <p className="font-medium text-gray-900 dark:text-white">
                        Rendez-vous confirmé
                      </p> */}
                      {/* <p className="text-sm text-gray-600 dark:text-gray-400">
                        Consultation - 15h30 aujourd'hui
                      </p>
                    </div> */}
                  {/* </div>
                  <span className="text-sm text-gray-500">Il y a 1h</span>
                </div> */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Enhanced Floating Chatbot Button */}
      <div className="fixed bottom-8 right-8 z-50">
              <Link href="/chat">
                <Button
                  variant="secondary"
            className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                >
            <FaComments className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span className="font-medium">Assistant IA</span>
                </Button>
              </Link>
            </div>
    </div>
  )
}