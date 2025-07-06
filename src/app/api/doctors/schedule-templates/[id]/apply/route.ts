import { NextRequest, NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"

export async function POST(
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

    // Deactivate all other templates for this doctor
    await prisma.weeklyScheduleTemplate.updateMany({
      where: { 
        doctorId: user.id,
        id: { not: templateId }
      },
      data: { isActive: false }
    })

    // Activate the selected template
    const activeTemplate = await prisma.weeklyScheduleTemplate.update({
      where: { id: templateId },
      data: { 
        isActive: true,
        effectiveFrom: new Date()
      },
      include: { timeSlots: true }
    })

    return NextResponse.json(activeTemplate)
  } catch (error) {
    console.error("Error applying schedule template:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
