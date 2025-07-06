import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"

export async function GET(request: Request) {
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

    const { searchParams } = new URL(request.url)
    const doctorId = searchParams.get("doctorId")
    const date = searchParams.get("date")

    const where: any = {}
    
    // If user is a patient, only show their appointments
    // If user is a doctor, show appointments for the specified doctor (should be themselves)
    if (currentUser.role === "PATIENT") {
      where.patientId = currentUser.id
    } else if (currentUser.role === "DOCTOR") {
      where.doctorId = currentUser.id
    }
    
    // Allow filtering by doctor if specified (useful for admin or patient searching)
    if (doctorId && currentUser.role === "PATIENT") {
      where.doctorId = parseInt(doctorId)
    }
    
    if (date) where.date = new Date(date)

    const appointments = await prisma.appointment.findMany({
      where,
      include: {
        doctor: true,
        patient: true,
        prescription: {
          include: {
            medications: true,
          },
        },
      },
      orderBy: {
        date: "asc",
      },
    })

    return NextResponse.json(appointments)
  } catch (error) {
    console.error("Error fetching appointments:", error)
    return NextResponse.json(
      { error: "Failed to fetch appointments" },
      { status: 500 },
    )
  }
}

export async function POST(request: Request) {
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

    // Only patients can book appointments
    if (currentUser.role !== "PATIENT") {
      return NextResponse.json(
        { error: "Only patients can book appointments" },
        { status: 403 },
      )
    }

    const body = await request.json()
    const {
      doctorId,
      date,
      startTime,
      endTime,
      typemaladie,
      notes,
    } = body

    // Enhanced validation
    if (!doctorId || !date || !startTime || !endTime || !typemaladie) {
      return NextResponse.json(
        { error: "Missing required fields: doctorId, date, startTime, endTime, typemaladie are required" },
        { status: 400 },
      )
    }

    // Validate doctorId is a number
    const parsedDoctorId = parseInt(doctorId)
    if (isNaN(parsedDoctorId)) {
      return NextResponse.json(
        { error: "Invalid doctor ID" },
        { status: 400 },
      )
    }

    // Validate date format and that it's not in the past
    let appointmentDate: Date
    try {
      appointmentDate = new Date(date)
      if (isNaN(appointmentDate.getTime())) {
        throw new Error("Invalid date")
      }
    } catch {
      return NextResponse.json(
        { error: "Invalid date format" },
        { status: 400 },
      )
    }

    const today = new Date()
    today.setHours(0, 0, 0, 0)
    appointmentDate.setHours(0, 0, 0, 0)
    
    if (appointmentDate < today) {
      return NextResponse.json(
        { error: "Cannot book appointments in the past" },
        { status: 400 },
      )
    }

    // Validate time format (HH:MM)
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

    // Validate appointment duration (minimum 15 minutes, maximum 4 hours)
    const durationMinutes = endMinutes - startMinutes
    if (durationMinutes < 15 || durationMinutes > 240) {
      return NextResponse.json(
        { error: "Appointment duration must be between 15 minutes and 4 hours" },
        { status: 400 },
      )
    }

    // Validate typemaladie length and content
    if (typeof typemaladie !== 'string' || typemaladie.trim().length < 3) {
      return NextResponse.json(
        { error: "Consultation reason must be at least 3 characters long" },
        { status: 400 },
      )
    }

    if (typemaladie.trim().length > 200) {
      return NextResponse.json(
        { error: "Consultation reason cannot exceed 200 characters" },
        { status: 400 },
      )
    }

    // Validate notes if provided
    if (notes && (typeof notes !== 'string' || notes.trim().length > 500)) {
      return NextResponse.json(
        { error: "Notes cannot exceed 500 characters" },
        { status: 400 },
      )
    }

    // Verify doctor exists and is actually a doctor
    const doctor = await prisma.user.findFirst({
      where: {
        id: parsedDoctorId,
        role: "DOCTOR",
      },
    })

    if (!doctor) {
      return NextResponse.json(
        { error: "Doctor not found or invalid" },
        { status: 404 },
      )
    }

    // Check for overlapping appointments with more comprehensive logic
    const overlappingAppointment = await prisma.appointment.findFirst({
      where: {
        doctorId: parsedDoctorId,
        date: new Date(date),
        status: {
          not: "CANCELLED" // Don't consider cancelled appointments
        },
        OR: [
          // New appointment starts during existing appointment
          {
            AND: [
              { startTime: { lte: startTime } },
              { endTime: { gt: startTime } }
            ]
          },
          // New appointment ends during existing appointment
          {
            AND: [
              { startTime: { lt: endTime } },
              { endTime: { gte: endTime } }
            ]
          },
          // New appointment completely encompasses existing appointment
          {
            AND: [
              { startTime: { gte: startTime } },
              { endTime: { lte: endTime } }
            ]
          }
        ]
      },
    })

    if (overlappingAppointment) {
      return NextResponse.json(
        { error: "Time slot is not available - there's a conflicting appointment" },
        { status: 409 },
      )
    }

    // Check if patient already has an appointment with this doctor on the same day
    const existingPatientAppointment = await prisma.appointment.findFirst({
      where: {
        patientId: currentUser.id,
        doctorId: parsedDoctorId,
        date: new Date(date),
        status: {
          not: "CANCELLED"
        }
      },
    })

    if (existingPatientAppointment) {
      return NextResponse.json(
        { error: "You already have an appointment with this doctor on this date" },
        { status: 409 },
      )
    }

    // Create the appointment with transaction for data consistency
    const appointment = await prisma.$transaction(async (tx) => {
      // Double-check availability within transaction
      const finalCheck = await tx.appointment.findFirst({
        where: {
          doctorId: parsedDoctorId,
          date: new Date(date),
          startTime,
          status: { not: "CANCELLED" }
        },
      })

      if (finalCheck) {
        throw new Error("Time slot was just booked by another user")
      }

      return await tx.appointment.create({
        data: {
          doctorId: parsedDoctorId,
          patientId: currentUser.id,
          date: new Date(date),
          startTime,
          endTime,
          typemaladie: typemaladie.trim(),
          notes: notes?.trim() || null,
          status: "CONFIRMED",
        },
        include: {
          doctor: {
            select: {
              id: true,
              first_name: true,
              last_name: true,
              specialty: true,
              phone_number: true
            }
          },
          patient: {
            select: {
              id: true,
              first_name: true,
              last_name: true,
              phone_number: true
            }
          },
        },
      })
    })

    return NextResponse.json({
      ...appointment,
      message: "Appointment booked successfully"
    }, { status: 201 })

  } catch (error) {
    console.error("Error creating appointment:", error)
    
    // Handle specific Prisma errors
    if (error instanceof Error) {
      if (error.message.includes("Time slot was just booked")) {
        return NextResponse.json(
          { error: "Time slot is no longer available" },
          { status: 409 },
        )
      }
      
      if (error.message.includes("Unique constraint")) {
        return NextResponse.json(
          { error: "A conflicting appointment already exists" },
          { status: 409 },
        )
      }
    }
    
    return NextResponse.json(
      { error: "Failed to create appointment" },
      { status: 500 },
    )
  }
}

export async function PUT(request: Request) {
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

    const body = await request.json()
    const { id, status } = body

    if (!id || !status) {
      return NextResponse.json(
        { error: "Appointment ID and status are required" },
        { status: 400 },
      )
    }

    // Check if the user has permission to update this appointment
    const existingAppointment = await prisma.appointment.findUnique({
      where: { id: parseInt(id) },
    })

    if (!existingAppointment) {
      return NextResponse.json(
        { error: "Appointment not found" },
        { status: 404 },
      )
    }

    // Only allow patients to update their own appointments or doctors to update appointments they're involved in
    if (
      currentUser.role === "PATIENT" && existingAppointment.patientId !== currentUser.id ||
      currentUser.role === "DOCTOR" && existingAppointment.doctorId !== currentUser.id
    ) {
      return NextResponse.json(
        { error: "Forbidden - you can only update your own appointments" },
        { status: 403 },
      )
    }

    const appointment = await prisma.appointment.update({
      where: { id: parseInt(id) },
      data: { status },
      include: {
        doctor: true,
        patient: true,
      },
    })

    return NextResponse.json(appointment)
  } catch (error) {
    console.error("Error updating appointment:", error)
    return NextResponse.json(
      { error: "Failed to update appointment" },
      { status: 500 },
    )
  }
}

export async function DELETE(request: Request) {
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

    const body = await request.json()
    const { id } = body

    if (!id) {
      return NextResponse.json(
        { error: "Appointment ID is required" },
        { status: 400 },
      )
    }

    // Check if the user has permission to delete this appointment
    const existingAppointment = await prisma.appointment.findUnique({
      where: { id: parseInt(id) },
    })

    if (!existingAppointment) {
      return NextResponse.json(
        { error: "Appointment not found" },
        { status: 404 },
      )
    }

    // Only allow patients to delete their own appointments or doctors to delete appointments they're involved in
    if (
      currentUser.role === "PATIENT" && existingAppointment.patientId !== currentUser.id ||
      currentUser.role === "DOCTOR" && existingAppointment.doctorId !== currentUser.id
    ) {
      return NextResponse.json(
        { error: "Forbidden - you can only delete your own appointments" },
        { status: 403 },
      )
    }

    await prisma.appointment.delete({
      where: { id: parseInt(id) },
    })

    return NextResponse.json({ message: "Appointment deleted successfully" })
  } catch (error) {
    console.error("Error deleting appointment:", error)
    return NextResponse.json(
      { error: "Failed to delete appointment" },
      { status: 500 },
    )
  }
}
