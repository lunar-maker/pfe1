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

    </div>
  )
}
