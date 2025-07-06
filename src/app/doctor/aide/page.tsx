"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline"
import { Navbar } from "@/components/navbar"
import React, { useState } from "react"

export default function page() {
  const pathname = usePathname()
  const [showSettingsBar, setShowSettingsBar] = useState(false)

  function toggleSettingsBar() {
    setShowSettingsBar(!showSettingsBar)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Barre de navigation */}
      <Navbar>
        <div className="flex items-center gap-2">
          {/* Bouton Paramètre */}
          <div className="relative">
            <Link href="/sign-in">
              <Button
                variant="ghost"
                className="flex items-center gap-2 transition duration-200 hover:bg-blue-200 dark:hover:bg-red-600"
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5" />{" "}
                {/* Icône de déconnexion */}
                Se déconnecter
              </Button>
            </Link>
          </div>
          <Link href="/doctor/patients">
            <Button
              variant="ghost"
              className="rounded-lg px-4 py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-sky-100 dark:text-gray-200 dark:hover:bg-sky-700"
            >
              Mes patients
            </Button>
          </Link>
          <Link href="/doctor/schedule">
            <Button
              variant="ghost"
              className="rounded-lg px-4 py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-sky-100 dark:text-gray-200 dark:hover:bg-sky-700"
            >
              Disponibilité
            </Button>
          </Link>
          <Link href="/doctor/R-V">
            <Button
              variant="ghost"
              className="rounded-lg px-4 py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-sky-100 dark:text-gray-200 dark:hover:bg-sky-700"
            >
              Rendez-vous
            </Button>
          </Link>
          <Link href="/doctor">
            <Button
              variant="ghost"
              className="rounded-lg px-4 py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-blue-200 dark:text-gray-200 dark:hover:bg-sky-700"
            >
              Acceuil
            </Button>
          </Link>
        </div>

        <div className="relative">
          <Button
            variant="ghost"
            className="rounded-lg px-4 py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-blue-200 dark:text-gray-200 dark:hover:bg-sky-700"
            onClick={toggleSettingsBar}
          >
            Paramètres
          </Button>

          {showSettingsBar && (
            <div className="absolute right-0 z-10 mt-2 w-56 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-700">
              <ul className="flex flex-col">
                <li className="border-b border-gray-100 dark:border-gray-600">
                  <Link href="/doctor/profil">
                    <Button
                      variant="ghost"
                      className="w-full justify-start rounded-none px-4 py-3 text-left font-normal text-gray-700 hover:bg-sky-50 dark:text-gray-200 dark:hover:bg-sky-600"
                    >
                      Profil
                    </Button>
                  </Link>
                </li>
                <li className="border-b border-gray-100 dark:border-gray-600">
                  <Link href="/doctor/conf">
                    <Button
                      variant="ghost"
                      className="w-full justify-start rounded-none px-4 py-3 text-left font-normal text-gray-700 hover:bg-sky-50 dark:text-gray-200 dark:hover:bg-sky-600"
                    >
                      Confidentialité
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="/doctor/aide">
                    <Button
                      variant="ghost"
                      className="w-full justify-start rounded-none px-4 py-3 text-left font-normal text-gray-700 hover:bg-sky-50 dark:text-gray-200 dark:hover:bg-sky-600"
                    >
                      Aide
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </Navbar>
    </div>
  )
}
