"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { completeOnboarding } from "./_actions"
import { OnboardingForm, OnboardingFormData } from "./onboarding-form"


export default function Onboarding() {
  const { user } = useUser()
  const router = useRouter()

  async function handleFormSubmit(data: OnboardingFormData) {
    await completeOnboarding(data)
    await user?.reload()
    router.push("/")
  }

  return (
    <div className="flex w-full flex-col items-center justify-center" style={{ height: 'calc(100vh - 4rem)' }}>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Complétez votre profil</CardTitle>
          <CardDescription>
            Choisissez votre type de compte pour terminer l'inscription
          </CardDescription>
        </CardHeader>
        <CardContent>
          <OnboardingForm onSubmit={handleFormSubmit} />
        </CardContent>
      </Card>
    </div>
  )
}
