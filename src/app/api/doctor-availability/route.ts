import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"

export async function GET(request: Request) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized - user must be logged in" },
        { status: 401 },
      )
    }

    const currentUser = await prisma.user.findUnique({
      where: { clerkId: userId },
    })

    if (!currentUser) {
      return NextResponse.json(
        { error: "User not found in database" },
        { status: 404 },
      )
    }

    if (currentUser.role !== "DOCTOR") {
      return NextResponse.json(
        { error: "Only doctors can manage availability" },
        { status: 403 },
      )
    }

    const { searchParams } = new URL(request.url)
    const date = searchParams.get("date")
    const startDate = searchParams.get("startDate")
    const endDate = searchParams.get("endDate")

    let whereClause: any = {
      doctorId: currentUser.id,
    }

    if (date) {
      whereClause.date = new Date(date)
    } else if (startDate && endDate) {
      whereClause.date = {
        gte: new Date(startDate),
        lte: new Date(endDate),
      }
    }

    const availability = await prisma.doctorAvailability.findMany({
      where: whereClause,
      include: {
        appointmentHours: true,
      },
      orderBy: {
        date: "asc",
      },
    })

    return NextResponse.json(availability)
  } catch (error) {
    console.error("Error fetching doctor availability:", error)
    return NextResponse.json(
      { error: "Failed to fetch availability" },
      { status: 500 },
    )
  }
}

export async function POST(request: Request) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized - user must be logged in" },
        { status: 401 },
      )
    }

    const currentUser = await prisma.user.findUnique({
      where: { clerkId: userId },
    })

    if (!currentUser) {
      return NextResponse.json(
        { error: "User not found in database" },
        { status: 404 },
      )
    }

    if (currentUser.role !== "DOCTOR") {
      return NextResponse.json(
        { error: "Only doctors can set availability" },
        { status: 403 },
      )
    }

    const body = await request.json()
    const { date, startTime, endTime, appointmentDuration = 30 } = body

    if (!date || !startTime || !endTime) {
      return NextResponse.json(
        { error: "Date, start time, and end time are required" },
        { status: 400 },
      )
    }

    // Validate time format
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
    if (!timeRegex.test(startTime) || !timeRegex.test(endTime)) {
      return NextResponse.json(
        { error: "Invalid time format. Use HH:MM format" },
        { status: 400 },
      )
    }

    // Validate that endTime is after startTime
    const [startHour, startMin] = startTime.split(':').map(Number)
    const [endHour, endMin] = endTime.split(':').map(Number)
    const startMinutes = startHour * 60 + startMin
    const endMinutes = endHour * 60 + endMin
    
    if (endMinutes <= startMinutes) {
      return NextResponse.json(
        { error: "End time must be after start time" },
        { status: 400 },
      )
    }

    // Check if availability already exists for this date
    const existingAvailability = await prisma.doctorAvailability.findFirst({
      where: {
        doctorId: currentUser.id,
        date: new Date(date),
      },
    })

    if (existingAvailability) {
      return NextResponse.json(
        { error: "Availability already exists for this date" },
        { status: 409 },
      )
    }

    // Create availability and appointment hours in a transaction
    const availability = await prisma.$transaction(async (tx) => {
      // Create the availability record
      const newAvailability = await tx.doctorAvailability.create({
        data: {
          doctorId: currentUser.id,
          date: new Date(date),
          startTime,
          endTime,
          isAvailable: true,
        },
      })

      // Generate appointment hours based on duration
      const appointmentHours = []
      let currentMinutes = startMinutes

      while (currentMinutes + appointmentDuration <= endMinutes) {
        const hour = Math.floor(currentMinutes / 60)
        const minute = currentMinutes % 60
        const timeSlot = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
        
        appointmentHours.push({
          doctorAvailabilityId: newAvailability.id,
          date: date,
          hour: timeSlot,
          isAvailable: true,
        })

        currentMinutes += appointmentDuration
      }

      // Create all appointment hours
      if (appointmentHours.length > 0) {
        await tx.appointmentHours.createMany({
          data: appointmentHours,
        })
      }

      return newAvailability
    })

    // Fetch the complete availability with appointment hours
    const completeAvailability = await prisma.doctorAvailability.findUnique({
      where: { id: availability.id },
      include: {
        appointmentHours: true,
      },
    })

    return NextResponse.json(completeAvailability, { status: 201 })
  } catch (error) {
    console.error("Error creating availability:", error)
    return NextResponse.json(
      { error: "Failed to create availability" },
      { status: 500 },
    )
  }
}

export async function PUT(request: Request) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized - user must be logged in" },
        { status: 401 },
      )
    }

    const currentUser = await prisma.user.findUnique({
      where: { clerkId: userId },
    })

    if (!currentUser) {
      return NextResponse.json(
        { error: "User not found in database" },
        { status: 404 },
      )
    }

    if (currentUser.role !== "DOCTOR") {
      return NextResponse.json(
        { error: "Only doctors can update availability" },
        { status: 403 },
      )
    }

    const body = await request.json()
    const { id, isAvailable, startTime, endTime } = body

    if (!id) {
      return NextResponse.json(
        { error: "Availability ID is required" },
        { status: 400 },
      )
    }

    // Check if the availability belongs to the current doctor
    const existingAvailability = await prisma.doctorAvailability.findUnique({
      where: { id: parseInt(id) },
    })

    if (!existingAvailability || existingAvailability.doctorId !== currentUser.id) {
      return NextResponse.json(
        { error: "Availability not found or access denied" },
        { status: 404 },
      )
    }

    const updateData: any = {}
    if (typeof isAvailable === 'boolean') updateData.isAvailable = isAvailable
    if (startTime) updateData.startTime = startTime
    if (endTime) updateData.endTime = endTime

    const updatedAvailability = await prisma.doctorAvailability.update({
      where: { id: parseInt(id) },
      data: updateData,
      include: {
        appointmentHours: true,
      },
    })

    return NextResponse.json(updatedAvailability)
  } catch (error) {
    console.error("Error updating availability:", error)
    return NextResponse.json(
      { error: "Failed to update availability" },
      { status: 500 },
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized - user must be logged in" },
        { status: 401 },
      )
    }

    const currentUser = await prisma.user.findUnique({
      where: { clerkId: userId },
    })

    if (!currentUser) {
      return NextResponse.json(
        { error: "User not found in database" },
        { status: 404 },
      )
    }

    if (currentUser.role !== "DOCTOR") {
      return NextResponse.json(
        { error: "Only doctors can delete availability" },
        { status: 403 },
      )
    }

    const body = await request.json()
    const { id } = body

    if (!id) {
      return NextResponse.json(
        { error: "Availability ID is required" },
        { status: 400 },
      )
    }

    // Check if the availability belongs to the current doctor
    const existingAvailability = await prisma.doctorAvailability.findUnique({
      where: { id: parseInt(id) },
      include: {
        appointmentHours: true,
      },
    })

    if (!existingAvailability || existingAvailability.doctorId !== currentUser.id) {
      return NextResponse.json(
        { error: "Availability not found or access denied" },
        { status: 404 },
      )
    }

    // Check if there are any booked appointments
    const bookedAppointments = await prisma.appointment.findMany({
      where: {
        doctorId: currentUser.id,
        date: existingAvailability.date,
        status: {
          in: ["PENDING", "CONFIRMED"],
        },
      },
    })

    if (bookedAppointments.length > 0) {
      return NextResponse.json(
        { error: "Cannot delete availability with existing appointments" },
        { status: 409 },
      )
    }

    // Delete availability (appointment hours will be cascade deleted)
    await prisma.doctorAvailability.delete({
      where: { id: parseInt(id) },
    })

    return NextResponse.json({ message: "Availability deleted successfully" })
  } catch (error) {
    console.error("Error deleting availability:", error)
    return NextResponse.json(
      { error: "Failed to delete availability" },
      { status: 500 },
    )
  }
}
