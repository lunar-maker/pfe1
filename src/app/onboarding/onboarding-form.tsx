"use client"

import "react-day-picker/dist/style.css";

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { isValidPhoneNumber } from "react-phone-number-input"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/date-picker"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PhoneInput } from "@/components/ui/phone-input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useUser } from "@clerk/nextjs"
import { DayPicker } from "react-day-picker"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

interface OnboardingFormProps {
  onSubmit: (data: OnboardingFormData) => Promise<void> | void
}

// Define enum values as const arrays for proper Zod inference
const ROLE_VALUES = ["PATIENT", "DOCTOR"] as const
const GENDER_VALUES = ["MALE", "FEMALE", "OTHER"] as const
const SPECIALTY_VALUES = [
  "CARDIOLOGY",
  "DERMATOLOGY",
  "PEDIATRICS",
  "NEUROLOGY",
  "GYNECOLOGY",
  "OPHTHALMOLOGY",
  "GENERAL_MEDICINE",
  "PSYCHIATRY",
  "ORTHOPEDICS",
  "RADIOLOGY",
] as const

// Create Zod enums
const RoleEnum = z.enum(ROLE_VALUES)
const GenderEnum = z.enum(GENDER_VALUES)
const SpecialtyEnum = z.enum(SPECIALTY_VALUES)

// Type aliases for the enum values
type Role = z.infer<typeof RoleEnum>
type Gender = z.infer<typeof GenderEnum>
type MedicalSpecialty = z.infer<typeof SpecialtyEnum>

// Localization mappings using the string values
const ROLE_LABELS: Record<Role, string> = {
  PATIENT: "Patient",
  DOCTOR: "Médecin",
}

const GENDER_LABELS: Record<Gender, string> = {
  MALE: "Homme",
  FEMALE: "Femme",
  OTHER: "Autre",
}

const SPECIALTY_LABELS: Record<MedicalSpecialty, string> = {
  CARDIOLOGY: "Cardiologie",
  DERMATOLOGY: "Dermatologie",
  PEDIATRICS: "Pédiatrie",
  NEUROLOGY: "Neurologie",
  GYNECOLOGY: "Gynécologie",
  OPHTHALMOLOGY: "Ophtalmologie",
  GENERAL_MEDICINE: "Médecine générale",
  PSYCHIATRY: "Psychiatrie",
  ORTHOPEDICS: "Orthopédie",
  RADIOLOGY: "Radiologie",
}

// Single unified schema with optional specialty field
const onboardingSchema = z
  .object({
    role: RoleEnum,
    firstName: z
      .string()
      .min(2, "Le prénom doit contenir au moins 2 caractères"),
    lastName: z
      .string()
      .min(2, "Le nom de famille doit contenir au moins 2 caractères"),
    phoneNumber: z
      .string()
      .refine(isValidPhoneNumber, { message: "Numéro de téléphone invalide" }),
    gender: GenderEnum,
    dateOfBirth: z
      .date({
        required_error: "La date de naissance est requise",
      })
      .refine((date) => {
        const today = new Date()
        const age = today.getFullYear() - date.getFullYear()
        const monthDiff = today.getMonth() - date.getMonth()
        const finalAge =
          monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())
            ? age - 1
            : age
        return finalAge >= 0 && finalAge <= 120
      }, "Veuillez entrer une date de naissance valide"),
    specialty: SpecialtyEnum.optional(),
  })
  .superRefine((data, ctx) => {
    // Require specialty for doctors
    if (data.role === "DOCTOR" && !data.specialty) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "La spécialité est requise pour les médecins",
        path: ["specialty"],
      })
    }
  })

export type OnboardingFormData = z.infer<typeof onboardingSchema>

export function OnboardingForm({
  onSubmit: onSubmitProp,
}: OnboardingFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<OnboardingFormData>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      gender: undefined,
      dateOfBirth: undefined,
      role: "PATIENT",
      specialty: undefined,
    },
  })

  const selectedRole = form.watch("role")

  async function onSubmit(data: OnboardingFormData) {
    setIsLoading(true)
    await onSubmitProp(data)
    setIsLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type de compte</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value)
                    // Reset specialty when switching to patient
                    if (value === "PATIENT") {
                      form.setValue("specialty", undefined)
                    }
                  }}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionnez votre type de compte" />
                  </SelectTrigger>
             <SelectContent>
  {ROLE_VALUES.map((roleValue) => (
    <SelectItem
      key={roleValue}
      value={roleValue}
      className={form.watch("role") === roleValue ? "text-blue-600 font-semibold" : ""}
    >
      {ROLE_LABELS[roleValue]}
    </SelectItem>
  ))}
</SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom de famille</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Genre</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {GENDER_VALUES.map((genderValue) => (
                        <SelectItem key={genderValue} value={genderValue}>
                          {GENDER_LABELS[genderValue]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

     <FormField
  control={form.control}
  name="dateOfBirth"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Date de naissance</FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            className="w-full flex items-center justify-between rounded-lg border bg-white p-3 shadow-md text-left"
          >
            <span>
              {field.value ? format(field.value, "dd/MM/yyyy") : "Sélectionnez une date"}
            </span>
            <CalendarIcon className="ml-2 h-5 w-5 text-gray-400" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <DayPicker
            mode="single"
            selected={field.value}
            onSelect={field.onChange}
            captionLayout="dropdown"
            fromYear={1950}
            toYear={new Date().getFullYear()}
          />
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  )}
/>
        </div>

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro de téléphone</FormLabel>
              <FormControl>
                <PhoneInput
                  placeholder="Entrez un numéro de téléphone"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {selectedRole === "DOCTOR" && (
          <FormField
            control={form.control}
            name="specialty"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Spécialité médicale</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {SPECIALTY_VALUES.map((specialtyValue) => (
                        <SelectItem key={specialtyValue} value={specialtyValue}>
                          {SPECIALTY_LABELS[specialtyValue]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
<Button
  type="submit"
  className="w-full bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-all"
  disabled={isLoading}
>
  {isLoading ? "En cours..." : "Continuer"}
</Button>
      </form>
    </Form>
  )
}
