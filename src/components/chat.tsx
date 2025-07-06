"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { FaPaperPlane, FaRobot, FaUser } from "react-icons/fa"

interface Message {
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  function scrollToBottom() {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch(
        "http://localhost:5005/webhooks/rest/webhook",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sender: "user",
            message: input,
          }),
        },
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data && data.length > 0) {
        const botMessage: Message = {
          text: data[0].text,
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
      } else {
        const errorMessage: Message = {
          text: "Désolé, je n'ai pas pu traiter votre demande. Veuillez réessayer.",
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, errorMessage])
      }
    } catch (error) {
      console.error("Error:", error)
      const errorMessage: Message = {
        text: "Désolé, je ne peux pas me connecter au serveur. Veuillez vérifier que le serveur Rasa est bien démarré.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mx-auto flex h-[600px] w-full max-w-2xl flex-col rounded-lg bg-white shadow-lg dark:bg-slate-800">
      <div className="border-b border-slate-200 p-4 dark:border-slate-700">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white">
          Chat MediConnect
        </h2>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`flex max-w-[80%] items-start gap-2 ${
                message.sender === "user"
                  ? "bg-sky-500 text-white"
                  : "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-white"
              } rounded-lg p-3`}
            >
              <div className="flex-shrink-0">
                {message.sender === "user" ? (
                  <FaUser className="h-5 w-5" />
                ) : (
                  <FaRobot className="h-5 w-5" />
                )}
              </div>
              <div>
                <p className="text-sm">{message.text}</p>
                <span className="text-xs opacity-70">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="border-t border-slate-200 p-4 dark:border-slate-700"
      >
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Écrivez votre message..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            <FaPaperPlane className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  )
}
