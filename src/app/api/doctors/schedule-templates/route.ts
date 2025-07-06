import { NextRequest, NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get the user to ensure they're a doctor
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      include: {
        weeklySchedules: {
          include: {
            timeSlots: true
          },
          orderBy: { createdAt: 'desc' }
        }
      }
    })

    if (!user || user.role !== "DOCTOR") {
      return NextResponse.json({ error: "Access denied" }, { status: 403 })
    }

    return NextResponse.json(user.weeklySchedules)
  } catch (error) {
    console.error("Error fetching schedule templates:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { name, weeklySchedule, isActive = false } = body

    // Get the user to ensure they're a doctor
    const user = await prisma.user.findUnique({
      where: { clerkId: userId }
    })

    if (!user || user.role !== "DOCTOR") {
      return NextResponse.json({ error: "Access denied" }, { status: 403 })
    }

    // If this template is being set as active, deactivate all others
    if (isActive) {
      await prisma.weeklyScheduleTemplate.updateMany({
        where: { doctorId: user.id },
        data: { isActive: false }
      })
    }

    // Create the template with time slots
    const template = await prisma.weeklyScheduleTemplate.create({
      data: {
        doctorId: user.id,
        name,
        isActive,
        timeSlots: {
          create: Object.entries(weeklySchedule).flatMap(([day, schedule]: [string, any]) => 
            schedule.isActive 
              ? schedule.timeSlots.map((slot: any) => ({
                  dayOfWeek: day as any,
                  startTime: slot.startTime,
                  endTime: slot.endTime,
                  isActive: true
                }))
              : []
          )
        }
      },
      include: {
        timeSlots: true
      }
    })

    return NextResponse.json(template)
  } catch (error) {
    console.error("Error creating schedule template:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
