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

    // Only doctors can access patient lists
    if (currentUser.role !== "DOCTOR") {
      return NextResponse.json(
        { error: "Only doctors can access patient lists" },
        { status: 403 },
      )
    }

    const { searchParams } = new URL(request.url)
    const search = searchParams.get("search")

    // Get patients who have appointments with this doctor
    const appointments = await prisma.appointment.findMany({
      where: {
        status:'COMPLETED',
        doctorId: currentUser.id,
      },
      include: {
        patient: true,
      },
      orderBy:[ {
        date: 'desc',
      },]
    })

    // Extract unique patients and their latest appointment info
    const patientMap = new Map()
    
    appointments.forEach(appointment => {
      const patientId = appointment.patient.id
      if (!patientMap.has(patientId) || 
          new Date(appointment.date) > new Date(patientMap.get(patientId).lastVisit)) {
        patientMap.set(patientId, {
          id: appointment.patient.id,
          name: `${appointment.patient.first_name} ${appointment.patient.last_name}`,
          firstName: appointment.patient.first_name,
          lastName: appointment.patient.last_name,
          phone: appointment.patient.phone_number,
          birthDate: appointment.patient.birth_date,
          gender: appointment.patient.gender,
          lastVisit: appointment.date,
          lastAppointmentStatus: appointment.status,
          lastConsultationReason: appointment.typemaladie,
          notes: appointment.notes,
        })
      }
    })

    let patients = Array.from(patientMap.values())

    // Apply search filter if provided
    if (search) {
      patients = patients.filter(patient =>
        patient.name.toLowerCase().includes(search.toLowerCase()) ||
        patient.phone.includes(search)
      )
    }

    // Calculate age for each patient
    patients = patients.map(patient => ({
      ...patient,
      age: new Date().getFullYear() - new Date(patient.birthDate).getFullYear(),
    }))

    // Sort by last visit date (most recent first)
    patients.sort((a, b) => new Date(b.lastVisit).getTime() - new Date(a.lastVisit).getTime())

    return NextResponse.json(patients)
  } catch (error) {
    console.error("Error fetching patients:", error)
    return NextResponse.json(
      { error: "Failed to fetch patients" },
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

    // Only doctors can update patient notes
    if (currentUser.role !== "DOCTOR") {
      return NextResponse.json(
        { error: "Only doctors can update patient notes" },
        { status: 403 },
      )
    }

    const body = await request.json()
    const { patientId, appointmentId, notes } = body

    if (!patientId || !appointmentId) {
      return NextResponse.json(
        { error: "Patient ID and appointment ID are required" },
        { status: 400 },
      )
    }

    // Verify the appointment exists and belongs to this doctor
    const appointment = await prisma.appointment.findFirst({
      where: {
        id: appointmentId,
        doctorId: currentUser.id,
        patientId: parseInt(patientId),
      },
    })

    if (!appointment) {
      return NextResponse.json(
        { error: "Appointment not found or access denied" },
        { status: 404 },
      )
    }

    // Update the appointment notes
    const updatedAppointment = await prisma.appointment.update({
      where: { id: appointmentId },
      data: { notes: notes?.trim() || null },
      include: {
        patient: true,
      },
    })

    return NextResponse.json(updatedAppointment)
  } catch (error) {
    console.error("Error updating patient notes:", error)
    return NextResponse.json(
      { error: "Failed to update patient notes" },
      { status: 500 },
    )
  }
}
