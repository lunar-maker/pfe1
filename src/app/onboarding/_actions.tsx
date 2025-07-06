"use server"

import { auth, clerkClient } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"
import { OnboardingFormData } from "./onboarding-form"

export async function completeOnboarding(data: OnboardingFormData) {
  const client = await clerkClient()
  const { userId } = await auth()

  if (!userId) {
    return { message: "No Logged In User" }
  }

  try {
    // Create user in database
    await prisma.user.create({
      data: {
        clerkId: userId,
        role: data.role,
        first_name: data.firstName,
        last_name: data.lastName,
        phone_number: data.phoneNumber,
        birth_date: data.dateOfBirth,
        gender: data.gender,
        specialty: data.specialty || null,
      },
    })

    // Update Clerk user metadata
    await client.users.updateUser(userId, {
      publicMetadata: {
        onboardingComplete: true,
        role: data.role,
      },
    })
    
    return { message: "User created and metadata updated successfully" }
  } catch (e) {
    console.log("error", e)
    return { message: "Error creating user or updating metadata" }
  }
}
