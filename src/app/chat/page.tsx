"use client"

import { Chat } from "@/components/chat"
import { Navbar } from "@/components/navbar"
export default function ChatPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center text-3xl font-bold text-slate-800 dark:text-white">
            Chat avec MediConnect
          </h1>
          <p className="mb-8 text-center text-slate-600 dark:text-slate-300">
            Posez vos questions sur nos services, la prise de rendez-vous ou
            tout autre sujet lié à votre santé.
          </p>
          <Chat />
        
          <div className="rounded-lg bg-blue-100 px-3 py-2 max-w-[80%]">
            Bonjour, comment puis-je vous aider ?
          </div>
        </div>
      </main>
    </div>
  )
}
