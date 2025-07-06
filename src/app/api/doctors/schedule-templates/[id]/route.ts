import { NextRequest, NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { name, weeklySchedule } = body
    const { id } = await params
    const templateId = parseInt(id)

    // Get the user to ensure they're a doctor
    const user = await prisma.user.findUnique({
      where: { clerkId: userId }
    })

    if (!user || user.role !== "DOCTOR") {
      return NextResponse.json({ error: "Access denied" }, { status: 403 })
    }

    // Verify the template belongs to this doctor
    const existingTemplate = await prisma.weeklyScheduleTemplate.findFirst({
      where: { 
        id: templateId,
        doctorId: user.id 
      }
    })

    if (!existingTemplate) {
      return NextResponse.json({ error: "Template not found" }, { status: 404 })
    }

    // Update template name if provided
    if (name && name !== existingTemplate.name) {
      await prisma.weeklyScheduleTemplate.update({
        where: { id: templateId },
        data: { name }
      })
    }

    // Update time slots if provided
    if (weeklySchedule) {
      // Delete existing time slots
      await prisma.weeklyTimeSlot.deleteMany({
        where: { templateId }
      })

      // Create new time slots
      const newTimeSlots = Object.entries(weeklySchedule).flatMap(([day, schedule]: [string, any]) => 
        schedule.isActive 
          ? schedule.timeSlots.map((slot: any) => ({
              templateId,
              dayOfWeek: day as any,
              startTime: slot.startTime,
              endTime: slot.endTime,
              isActive: true
            }))
          : []
      )

      if (newTimeSlots.length > 0) {
        await prisma.weeklyTimeSlot.createMany({
          data: newTimeSlots
        })
      }
    }

    // Fetch and return updated template
    const updatedTemplate = await prisma.weeklyScheduleTemplate.findUnique({
      where: { id: templateId },
      include: { timeSlots: true }
    })

    return NextResponse.json(updatedTemplate)
  } catch (error) {
    console.error("Error updating schedule template:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params
    const templateId = parseInt(id)

    // Get the user to ensure they're a doctor
    const user = await prisma.user.findUnique({
      where: { clerkId: userId }
    })

    if (!user || user.role !== "DOCTOR") {
      return NextResponse.json({ error: "Access denied" }, { status: 403 })
    }

    // Verify the template belongs to this doctor
    const template = await prisma.weeklyScheduleTemplate.findFirst({
      where: { 
        id: templateId,
        doctorId: user.id 
      }
    })

    if (!template) {
      return NextResponse.json({ error: "Template not found" }, { status: 404 })
    }

    // Delete the template (time slots will be cascade deleted)
    await prisma.weeklyScheduleTemplate.delete({
      where: { id: templateId }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting schedule template:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
