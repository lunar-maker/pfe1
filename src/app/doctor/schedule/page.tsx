"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Link from "next/link"
import { useState, useEffect } from "react"
import {
  PlusIcon,
  TrashIcon,
  PencilIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { CheckCircle2Icon, AlertCircleIcon, InfoIcon } from "lucide-react"

interface TimeSlot {
  startTime: string
  endTime: string
}

interface DaySchedule {
  isActive: boolean
  timeSlots: TimeSlot[]
}

interface WeeklySchedule {
  MONDAY: DaySchedule
  TUESDAY: DaySchedule
  WEDNESDAY: DaySchedule
  THURSDAY: DaySchedule
  FRIDAY: DaySchedule
  SATURDAY: DaySchedule
  SUNDAY: DaySchedule
}

const DAYS_OF_WEEK = [
  { key: "MONDAY", label: "Lundi" },
  { key: "TUESDAY", label: "Mardi" },
  { key: "WEDNESDAY", label: "Mercredi" },
  { key: "THURSDAY", label: "Jeudi" },
  { key: "FRIDAY", label: "Vendredi" },
  { key: "SATURDAY", label: "Samedi" },
  { key: "SUNDAY", label: "Dimanche" },
] as const

interface AlertState {
  show: boolean
  type: 'success' | 'error' | 'info'
  title: string
  description?: string
}

export default function WeeklySchedulePage() {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("")
  const [isEditingName, setIsEditingName] = useState(false)
  const [editingTemplateName, setEditingTemplateName] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [showNewTemplateDialog, setShowNewTemplateDialog] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [newTemplateName, setNewTemplateName] = useState("")
  const [alertState, setAlertState] = useState<AlertState>({
    show: false,
    type: 'info',
    title: '',
    description: ''
  })

  const [availableTemplates, setAvailableTemplates] = useState<any[]>([])

  const [weeklySchedule, setWeeklySchedule] = useState<WeeklySchedule>({
    MONDAY: { isActive: false, timeSlots: [] },
    TUESDAY: { isActive: false, timeSlots: [] },
    WEDNESDAY: { isActive: false, timeSlots: [] },
    THURSDAY: { isActive: false, timeSlots: [] },
    FRIDAY: { isActive: false, timeSlots: [] },
    SATURDAY: { isActive: false, timeSlots: [] },
    SUNDAY: { isActive: false, timeSlots: [] },
  })

  useEffect(() => {
    const loadTemplates = async () => {
      try {
        const response = await fetch("/api/doctors/schedule-templates")
        if (response.ok) {
          const templates = await response.json()
          setAvailableTemplates(templates)

          const activeTemplate = templates.find((t: any) => t.isActive)
          const templateToSelect = activeTemplate || templates[0]

          if (templateToSelect) {
            setSelectedTemplate(templateToSelect.id.toString())
            loadTemplateData(templateToSelect)
          }
        }
      } catch (error) {
        console.error("Error loading templates:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadTemplates()
  }, [])

  const loadTemplateData = (template: any) => {
    const newSchedule: WeeklySchedule = {
      MONDAY: { isActive: false, timeSlots: [] },
      TUESDAY: { isActive: false, timeSlots: [] },
      WEDNESDAY: { isActive: false, timeSlots: [] },
      THURSDAY: { isActive: false, timeSlots: [] },
      FRIDAY: { isActive: false, timeSlots: [] },
      SATURDAY: { isActive: false, timeSlots: [] },
      SUNDAY: { isActive: false, timeSlots: [] },
    }

    template.timeSlots.forEach((slot: any) => {
      if (!newSchedule[slot.dayOfWeek as keyof WeeklySchedule].timeSlots) {
        newSchedule[slot.dayOfWeek as keyof WeeklySchedule].timeSlots = []
      }
      newSchedule[slot.dayOfWeek as keyof WeeklySchedule].timeSlots.push({
        startTime: slot.startTime,
        endTime: slot.endTime,
      })
      newSchedule[slot.dayOfWeek as keyof WeeklySchedule].isActive = true
    })

    setWeeklySchedule(newSchedule)
  }

  const handleTemplateChange = (templateId: string) => {
    setSelectedTemplate(templateId)
    const template = availableTemplates.find(
      (t) => t.id.toString() === templateId,
    )
    if (template) {
      loadTemplateData(template)
    }
  }

  const showAlert = (type: 'success' | 'error' | 'info', title: string, description?: string) => {
    setAlertState({ show: true, type, title, description })
    setTimeout(() => {
      setAlertState(prev => ({ ...prev, show: false }))
    }, 5000)
  }

  const createNewTemplate = async () => {
    if (newTemplateName.trim()) {
      setIsSaving(true)
      try {
        const response = await fetch("/api/doctors/schedule-templates", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: newTemplateName,
            weeklySchedule,
            isActive: false,
          }),
        })

        if (response.ok) {
          const newTemplate = await response.json()
          setAvailableTemplates((prev) => [...prev, newTemplate])
          setSelectedTemplate(newTemplate.id.toString())
          // Load the new template data immediately
          loadTemplateData(newTemplate)
          setShowNewTemplateDialog(false)
          setNewTemplateName("")
          showAlert('success', 'Nouveau planning créé avec succès!')
        } else {
          showAlert('error', 'Erreur lors de la création du planning')
        }
      } catch (error) {
        console.error("Error creating template:", error)
        showAlert('error', 'Erreur lors de la création du planning')
      } finally {
        setIsSaving(false)
      }
    }
  }

  const deleteTemplate = async () => {
    if (!selectedTemplate) return

    setIsSaving(true)
    try {
      const response = await fetch(
        `/api/doctors/schedule-templates/${selectedTemplate}`,
        {
          method: "DELETE",
        }
      )

      if (response.ok) {
        // Remove the deleted template from the list
        setAvailableTemplates((prev) => 
          prev.filter((t) => t.id.toString() !== selectedTemplate)
        )
        
        // Select the first available template or clear selection
        const remainingTemplates = availableTemplates.filter(
          (t) => t.id.toString() !== selectedTemplate
        )
        
        if (remainingTemplates.length > 0) {
          const newSelectedTemplate = remainingTemplates[0]
          setSelectedTemplate(newSelectedTemplate.id.toString())
          loadTemplateData(newSelectedTemplate)
        } else {
          setSelectedTemplate("")
          setWeeklySchedule({
            MONDAY: { isActive: false, timeSlots: [] },
            TUESDAY: { isActive: false, timeSlots: [] },
            WEDNESDAY: { isActive: false, timeSlots: [] },
            THURSDAY: { isActive: false, timeSlots: [] },
            FRIDAY: { isActive: false, timeSlots: [] },
            SATURDAY: { isActive: false, timeSlots: [] },
            SUNDAY: { isActive: false, timeSlots: [] },
          })
        }
        
        setShowDeleteDialog(false)
        showAlert('success', 'Planning supprimé avec succès!')
      } else {
        showAlert('error', 'Erreur lors de la suppression du planning')
      }
    } catch (error) {
      console.error("Error deleting template:", error)
      showAlert('error', 'Erreur lors de la suppression du planning')
    } finally {
      setIsSaving(false)
    }
  }

  const startEditingName = () => {
    const currentTemplate = availableTemplates.find(
      (t) => t.id.toString() === selectedTemplate,
    )
    if (currentTemplate) {
      setEditingTemplateName(currentTemplate.name)
      setIsEditingName(true)
    }
  }

  const saveTemplateName = async () => {
    if (editingTemplateName.trim() && selectedTemplate) {
      setIsSaving(true)
      try {
        const response = await fetch(
          `/api/doctors/schedule-templates/${selectedTemplate}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: editingTemplateName.trim(),
            }),
          },
        )

        if (response.ok) {
          const updatedTemplate = await response.json()
          setAvailableTemplates((prev) =>
            prev.map((t) =>
              t.id.toString() === selectedTemplate ? updatedTemplate : t,
            ),
          )
          setIsEditingName(false)
          setEditingTemplateName("")
          showAlert('success', 'Nom du planning sauvegardé avec succès!')
        } else {
          showAlert('error', 'Erreur lors de la sauvegarde du nom')
        }
      } catch (error) {
        console.error("Error saving template name:", error)
        showAlert('error', 'Erreur lors de la sauvegarde du nom')
      } finally {
        setIsSaving(false)
      }
    }
  }

  const cancelEditingName = () => {
    setIsEditingName(false)
    setEditingTemplateName("")
  }

  const toggleDayActive = (day: keyof WeeklySchedule) => {
    setWeeklySchedule((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        isActive: !prev[day].isActive,
        timeSlots: !prev[day].isActive
          ? [{ startTime: "09:00", endTime: "17:00" }]
          : [],
      },
    }))
  }

  const addTimeSlot = (day: keyof WeeklySchedule) => {
    setWeeklySchedule((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        timeSlots: [
          ...prev[day].timeSlots,
          { startTime: "09:00", endTime: "17:00" },
        ],
      },
    }))
  }

  const removeTimeSlot = (day: keyof WeeklySchedule, slotIndex: number) => {
    setWeeklySchedule((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        timeSlots: prev[day].timeSlots.filter(
          (_, index) => index !== slotIndex,
        ),
      },
    }))
  }

  const updateTimeSlot = (
    day: keyof WeeklySchedule,
    slotIndex: number,
    field: "startTime" | "endTime",
    value: string,
  ) => {
    setWeeklySchedule((prev) => {
      const updated = { ...prev }
      const daySlots = [...updated[day].timeSlots]
      const currentSlot = { ...daySlots[slotIndex] }

      // Simply update the field without validation
      currentSlot[field] = value

      daySlots[slotIndex] = currentSlot
      updated[day] = {
        ...updated[day],
        timeSlots: daySlots,
      }

      return updated
    })
  }

  // Validation function to check all time slots
  const validateSchedule = (): { isValid: boolean; message?: string } => {
    for (const [dayKey, daySchedule] of Object.entries(weeklySchedule)) {
      if (daySchedule.isActive) {
        for (const [index, slot] of daySchedule.timeSlots.entries()) {
          if (!slot.startTime || !slot.endTime) {
            return {
              isValid: false,
              message: `${DAYS_OF_WEEK.find((d) => d.key === dayKey)?.label}: Veuillez remplir toutes les heures du créneau ${index + 1}`
            }
          }

          const startTime = new Date(`2000-01-01T${slot.startTime}:00`)
          const endTime = new Date(`2000-01-01T${slot.endTime}:00`)

          if (endTime <= startTime) {
            return {
              isValid: false,
              message: `${DAYS_OF_WEEK.find((d) => d.key === dayKey)?.label}: L'heure de fin doit être supérieure à l'heure de début pour le créneau ${index + 1}`
            }
          }
        }
      }
    }
    return { isValid: true }
  }

  const copyToAllWeekdays = (sourceDay: keyof WeeklySchedule) => {
    const weekdays: (keyof WeeklySchedule)[] = [
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
    ]
    const sourceSchedule = weeklySchedule[sourceDay]

    setWeeklySchedule((prev) => {
      const updated = { ...prev }
      weekdays.forEach((day) => {
        updated[day] = {
          isActive: sourceSchedule.isActive,
          timeSlots: [...sourceSchedule.timeSlots],
        }
      })
      return updated
    })
  }

  const saveSchedule = async () => {
    if (!selectedTemplate) return

    const validation = validateSchedule()
    if (!validation.isValid) {
      showAlert('error', 'Erreur de validation', validation.message)
      return
    }

    setIsSaving(true)
    try {
      const response = await fetch(
        `/api/doctors/schedule-templates/${selectedTemplate}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            weeklySchedule,
          }),
        },
      )

      if (response.ok) {
        const updatedTemplate = await response.json()
        setAvailableTemplates((prev) =>
          prev.map((t) =>
            t.id.toString() === selectedTemplate ? updatedTemplate : t,
          ),
        )
        showAlert('success', 'Planning sauvegardé avec succès!')
      } else {
        showAlert('error', 'Erreur lors de la sauvegarde')
      }
    } catch (error) {
      console.error("Error saving schedule:", error)
      showAlert('error', 'Erreur lors de la sauvegarde')
    } finally {
      setIsSaving(false)
    }
  }

  const applySchedule = async () => {
    if (!selectedTemplate) return

    setIsSaving(true)
    try {
      const response = await fetch(
        `/api/doctors/schedule-templates/${selectedTemplate}/apply`,
        {
          method: "POST",
        },
      )

      if (response.ok) {
        const activeTemplate = await response.json()
        setAvailableTemplates((prev) =>
          prev.map((t) => ({
            ...t,
            isActive: t.id === activeTemplate.id,
          })),
        )
        showAlert('success', 'Planning appliqué avec succès!')
      } else {
        showAlert('error', 'Erreur lors de l\'application du planning')
      }
    } catch (error) {
      console.error("Error applying schedule:", error)
      showAlert('error', 'Erreur lors de l\'application du planning')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="w-full bg-gradient-to-r from-blue-500 via-blue-500 to-green-400 py-12 shadow-md mb-8">
  <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
    <div className="mb-4 flex items-center justify-center">
      <svg className="h-12 w-12 text-white bg-white/10 rounded-full p-2 shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="6" y="3" width="12" height="18" rx="2" strokeWidth="2"/>
        <path strokeWidth="2" d="M9 7h6M9 11h6M9 15h2"/>
      </svg>
    </div>
    <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-2">
      Gestion des horaires hebdomadaires
    </h1>
    <p className="text-blue-100 text-lg max-w-2xl">
      Définissez votre planning de consultation récurrent
    </p>
  </div>
</div>
          <Link href="/doctor">
            <Button variant="outline">Retour au tableau de bord</Button>
          </Link>
        </div>

        {/* Alert Component */}
        {alertState.show && (
          <div className="mb-6">
            <Alert variant={alertState.type === 'error' ? 'destructive' : 'default'}>
              {alertState.type === 'success' && <CheckCircle2Icon className="h-4 w-4" />}
              {alertState.type === 'error' && <AlertCircleIcon className="h-4 w-4" />}
              {alertState.type === 'info' && <InfoIcon className="h-4 w-4" />}
              <AlertTitle>{alertState.title}</AlertTitle>
              {alertState.description && (
                <AlertDescription>{alertState.description}</AlertDescription>
              )}
            </Alert>
          </div>
        )}

        {/* No Active Template Warning */}
        {!isLoading && availableTemplates.length > 0 && !availableTemplates.some(t => t.isActive) && (
          <div className="mb-6">
            <Alert variant="destructive">
              <AlertCircleIcon className="h-4 w-4" />
              <AlertTitle>Aucun planning actif</AlertTitle>
              <AlertDescription>
                Vous n'avez actuellement aucun planning de consultation actif. 
                Sélectionnez un planning et cliquez sur "Appliquer" pour l'activer et permettre aux patients de prendre rendez-vous.
              </AlertDescription>
            </Alert>
          </div>
        )}

        {/* No Templates Warning */}
        {!isLoading && availableTemplates.length === 0 && (
          <div className="mb-6">
            <Alert variant="destructive">
              <AlertCircleIcon className="h-4 w-4" />
              <AlertTitle>Aucun planning configuré</AlertTitle>
              <AlertDescription>
                Vous n'avez encore créé aucun planning de consultation. 
                Créez votre premier planning en cliquant sur "Nouveau" pour commencer à recevoir des patients.
              </AlertDescription>
            </Alert>
          </div>
        )}

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Planning actuel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                {isEditingName ? (
                  <div className="flex items-center gap-2">
                    <Input
                      value={editingTemplateName}
                      onChange={(e) => setEditingTemplateName(e.target.value)}
                      placeholder="Nom du planning"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") saveTemplateName()
                        if (e.key === "Escape") cancelEditingName()
                      }}
                      autoFocus
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={saveTemplateName}
                      className="text-green-500 hover:text-green-700"
                    >
                      <CheckIcon className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={cancelEditingName}
                      className="text-red-500 hover:text-red-700"
                    >
                      <XMarkIcon className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Select
                      value={selectedTemplate}
                      onValueChange={handleTemplateChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sélectionnez un planning" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableTemplates.map((template) => (
                          <SelectItem key={template.id} value={template.id.toString()}>
                            {template.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={startEditingName}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <PencilIcon className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowDeleteDialog(true)}
                      className="text-red-500 hover:text-red-700"
                      disabled={availableTemplates.length <= 1}
                    >
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <AlertDialog open={showNewTemplateDialog} onOpenChange={setShowNewTemplateDialog}>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline">
                      <PlusIcon className="mr-2 h-4 w-4" />
                      Nouveau
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Créer un nouveau planning</AlertDialogTitle>
                      <AlertDialogDescription>
                        Entrez le nom du nouveau planning de consultation.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="my-4">
                      <Input
                        value={newTemplateName}
                        onChange={(e) => setNewTemplateName(e.target.value)}
                        placeholder="Nom du planning"
                        autoFocus
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && newTemplateName.trim()) {
                            createNewTemplate()
                          }
                        }}
                      />
                    </div>
                    <AlertDialogFooter>
                      <AlertDialogCancel onClick={() => setNewTemplateName("")}>
                        Annuler
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={createNewTemplate}
                        disabled={!newTemplateName.trim() || isSaving}
                      >
                        {isSaving ? "Création..." : "Créer"}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                
                <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Supprimer le planning</AlertDialogTitle>
                      <AlertDialogDescription>
                        Êtes-vous sûr de vouloir supprimer ce planning ? Cette action est irréversible.
                        {availableTemplates.find(t => t.id.toString() === selectedTemplate)?.isActive && (
                          <span className="block mt-2 text-orange-600 font-medium">
                            ⚠️ Ce planning est actuellement actif.
                          </span>
                        )}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Annuler</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={deleteTemplate}
                        disabled={isSaving}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        {isSaving ? "Suppression..." : "Supprimer"}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <Button
                  variant="outline"
                  onClick={applySchedule}
                  className="border-blue-200 bg-blue-50 hover:bg-blue-100"
                  disabled={!selectedTemplate}
                >
                  Appliquer
                </Button>
                <Button
                  onClick={saveSchedule}
                  className="bg-green-600 hover:bg-green-700"
                  disabled={!selectedTemplate}
                >
                  Sauvegarder
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {DAYS_OF_WEEK.map(({ key, label }) => {
            const daySchedule = weeklySchedule[key]
            const isTemplateSelected = selectedTemplate !== ""

            return (
              <Card
                key={key}
                className={`${
                  daySchedule.isActive
                    ? "border-green-200 bg-green-50/50 dark:bg-green-900/10"
                    : "border-gray-200 bg-gray-50/50 dark:bg-gray-800/50"
                } ${!isTemplateSelected ? "opacity-50" : ""}`}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{label}</CardTitle>
                  <CardAction>
                    <div className="flex items-center gap-3">
                      <Label htmlFor={`toggle-${key}`} className="text-sm">
                        {daySchedule.isActive ? "Actif" : "Inactif"}
                      </Label>
                      <Switch
                        id={`toggle-${key}`}
                        checked={daySchedule.isActive}
                        onCheckedChange={() => toggleDayActive(key)}
                        disabled={!isTemplateSelected}
                      />
                    </div>
                  </CardAction>
                </CardHeader>

                {!isTemplateSelected && (
                  <CardContent>
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Veuillez sélectionner un planning pour configurer ce jour
                      </p>
                    </div>
                  </CardContent>
                )}

                {daySchedule.isActive && isTemplateSelected && (
                  <>
                    <CardContent>
                      <div className="space-y-3">
                        {daySchedule.timeSlots.map((slot, slotIndex) => (
                          <div
                            key={slotIndex}
                            className="flex items-center gap-3 rounded-lg border bg-white p-3 dark:bg-gray-800"
                          >
                            <div className="flex flex-1 items-center gap-2">
                              <Input
                                type="time"
                                value={slot.startTime}
                                onChange={(e) =>
                                  updateTimeSlot(
                                    key,
                                    slotIndex,
                                    "startTime",
                                    e.target.value,
                                  )
                                }
                                disabled={!isTemplateSelected}
                              />
                              <span className="text-gray-500">à</span>
                              <Input
                                type="time"
                                value={slot.endTime}
                                onChange={(e) =>
                                  updateTimeSlot(
                                    key,
                                    slotIndex,
                                    "endTime",
                                    e.target.value,
                                  )
                                }
                                disabled={!isTemplateSelected}
                              />
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeTimeSlot(key, slotIndex)}
                              className="text-red-500 hover:text-red-700"
                              disabled={!isTemplateSelected}
                            >
                              <TrashIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="flex-row gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => addTimeSlot(key)}
                        className="flex-1"
                        disabled={!isTemplateSelected}
                      >
                        <PlusIcon className="mr-2 h-4 w-4" />
                        Ajouter un créneau
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToAllWeekdays(key)}
                        className="flex-1 text-xs"
                        disabled={!isTemplateSelected}
                      >
                        Copier vers tous les jours ouvrés
                      </Button>
                    </CardFooter>
                  </>
                )}
              </Card>
            )
          })}
        </div>
      </div>

  )
}
