import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"

export async function GET() {
  try {
    // Get the authenticated user from Clerk
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized - user must be logged in" },
        { status: 401 },
      )
    }

    // Find the user in our database using their Clerk ID
    const currentUser = await prisma.user.findUnique({
      where: { clerkId: userId },
    })

    if (!currentUser) {
      return NextResponse.json(
        { error: "User not found in database" },
        { status: 404 },
      )
    }

    // Only doctors can access these stats
    if (currentUser.role !== "DOCTOR") {
      return NextResponse.json(
        { error: "Forbidden - only doctors can access these stats" },
        { status: 403 },
      )
    }

    // Get today's date in the user's timezone
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    // Get today's appointments count
    const todayAppointmentsCount = await prisma.appointment.count({
      where: {
        doctorId: currentUser.id,
        date: {
          gte: today,
          lt: tomorrow,
        },
        status: {
          not: "CANCELLED"
        }
      },
    })

    // Get unique patients count for today
    const todayPatients = await prisma.appointment.findMany({
      where: {
        doctorId: currentUser.id,
        date: {
          gte: today,
          lt: tomorrow,
        },
        status: {
          not: "CANCELLED"
        }
      },
      select: {
        patientId: true,
      },
      distinct: ['patientId'],
    })

    const todayPatientsCount = todayPatients.length

    // Get total patients count (all time)
    const totalPatients = await prisma.appointment.findMany({
      where: {
        doctorId: currentUser.id,
      },
      select: {
        patientId: true,
      },
      distinct: ['patientId'],
    })

    const totalPatientsCount = totalPatients.length

    // Get upcoming appointments this week
    const startOfWeek = new Date(today)
    startOfWeek.setDate(today.getDate() - today.getDay())
    const endOfWeek = new Date(startOfWeek)
    endOfWeek.setDate(startOfWeek.getDate() + 7)

    const weeklyAppointmentsCount = await prisma.appointment.count({
      where: {
        doctorId: currentUser.id,
        date: {
          gte: startOfWeek,
          lt: endOfWeek,
        },
        status: {
          not: "CANCELLED"
        }
      },
    })

    return NextResponse.json({
      today: {
        appointments: todayAppointmentsCount,
        patients: todayPatientsCount,
      },
      total: {
        patients: totalPatientsCount,
      },
      thisWeek: {
        appointments: weeklyAppointmentsCount,
      }
    })

  } catch (error) {
    console.error("Error fetching doctor stats:", error)
    return NextResponse.json(
      { error: "Failed to fetch dashboard statistics" },
      { status: 500 },
    )
  }
}
