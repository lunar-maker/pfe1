"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DatePicker } from "@/components/ui/date-picker"
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline"

interface PrescriptionMedication {
  medicationName: string
  dosage: string
  frequency: string
  duration: string
  instructions?: string
}

interface CreatePrescriptionDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  appointmentId: number
  patientName: string
  onSuccess: () => void
}

export function CreatePrescriptionDialog({
  open,
  onOpenChange,
  appointmentId,
  patientName,
  onSuccess,
}: CreatePrescriptionDialogProps) {
  const [loading, setLoading] = useState(false)
  const [diagnosis, setDiagnosis] = useState("")
  const [instructions, setInstructions] = useState("")
  const [validUntil, setValidUntil] = useState<Date>()
  const [medications, setMedications] = useState<PrescriptionMedication[]>([
    {
      medicationName: "",
      dosage: "",
      frequency: "",
      duration: "",
      instructions: "",
    },
  ])

  const addMedication = () => {
    setMedications([
      ...medications,
      {
        medicationName: "",
        dosage: "",
        frequency: "",
        duration: "",
        instructions: "",
      },
    ])
  }

  const removeMedication = (index: number) => {
    setMedications(medications.filter((_, i) => i !== index))
  }

  const updateMedication = (
    index: number,
    field: keyof PrescriptionMedication,
    value: string
  ) => {
    setMedications(
      medications.map((med, i) =>
        i === index ? { ...med, [field]: value } : med
      )
    )
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/prescriptions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          appointmentId,
          diagnosis,
          instructions,
          validUntil: validUntil?.toISOString(),
          medications: medications.filter(med => med.medicationName.trim()),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to create prescription")
      }

      onSuccess()
      onOpenChange(false)
      
      // Reset form
      setDiagnosis("")
      setInstructions("")
      setValidUntil(undefined)
      setMedications([
        {
          medicationName: "",
          dosage: "",
          frequency: "",
          duration: "",
          instructions: "",
        },
      ])
    } catch (error) {
      console.error("Error creating prescription:", error)
      alert("Erreur lors de la création de l'ordonnance")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Créer une ordonnance</DialogTitle>
          <DialogDescription>
            Créer une ordonnance pour {patientName}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Diagnostic */}
          <div className="space-y-2">
            <Label htmlFor="diagnosis">Diagnostic *</Label>
            <Textarea
              id="diagnosis"
              placeholder="Entrez le diagnostic médical..."
              value={diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
              rows={3}
            />
          </div>

          {/* Instructions générales */}
          <div className="space-y-2">
            <Label htmlFor="instructions">Instructions générales</Label>
            <Textarea
              id="instructions"
              placeholder="Instructions générales pour le patient..."
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              rows={3}
            />
          </div>

          {/* Date de validité */}
          <div className="space-y-2">
            <Label>Date de validité (optionnel)</Label>
            <DatePicker
              date={validUntil}
              onDateChange={setValidUntil}
              placeholder="Sélectionner une date d'expiration"
            />
          </div>

          {/* Médicaments */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-lg font-semibold">Médicaments</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addMedication}
              >
                <PlusIcon className="h-4 w-4 mr-2" />
                Ajouter un médicament
              </Button>
            </div>

            {medications.map((medication, index) => (
              <Card key={index} className="relative">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm">
                      Médicament {index + 1}
                    </CardTitle>
                    {medications.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeMedication(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Nom du médicament *</Label>
                      <Input
                        placeholder="ex: Doliprane"
                        value={medication.medicationName}
                        onChange={(e) =>
                          updateMedication(index, "medicationName", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Dosage *</Label>
                      <Input
                        placeholder="ex: 500mg"
                        value={medication.dosage}
                        onChange={(e) =>
                          updateMedication(index, "dosage", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Fréquence *</Label>
                      <Input
                        placeholder="ex: 3 fois par jour"
                        value={medication.frequency}
                        onChange={(e) =>
                          updateMedication(index, "frequency", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Durée *</Label>
                      <Input
                        placeholder="ex: 7 jours"
                        value={medication.duration}
                        onChange={(e) =>
                          updateMedication(index, "duration", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Instructions spécifiques</Label>
                    <Textarea
                      placeholder="Instructions particulières pour ce médicament..."
                      value={medication.instructions}
                      onChange={(e) =>
                        updateMedication(index, "instructions", e.target.value)
                      }
                      rows={2}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={loading}
          >
            Annuler
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={loading || !diagnosis.trim() || medications.every(med => !med.medicationName.trim())}
          >
            {loading ? "Création..." : "Créer l'ordonnance"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
