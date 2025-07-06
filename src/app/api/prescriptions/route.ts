import { NextRequest, NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get the current user (doctor)
    const currentUser = await prisma.user.findUnique({
      where: { clerkId: userId },
    })

    if (!currentUser || currentUser.role !== "DOCTOR") {
      return NextResponse.json({ error: "Access denied - Doctor only" }, { status: 403 })
    }

    const body = await request.json()
    const { appointmentId, diagnosis, instructions, validUntil, medications } = body

    // Validate required fields
    if (!appointmentId || !diagnosis || !medications || medications.length === 0) {
      return NextResponse.json(
        { error: "Missing required fields: appointmentId, diagnosis, and medications" },
        { status: 400 }
      )
    }

    // Verify the appointment exists and belongs to this doctor
    const appointment = await prisma.appointment.findUnique({
      where: { id: appointmentId },
      include: { patient: true, prescription: true },
    })

    if (!appointment) {
      return NextResponse.json({ error: "Appointment not found" }, { status: 404 })
    }

    if (appointment.doctorId !== currentUser.id) {
      return NextResponse.json({ error: "Access denied - Not your appointment" }, { status: 403 })
    }

    if (appointment.status !== "COMPLETED") {
      return NextResponse.json(
        { error: "Cannot create prescription for non-completed appointment" },
        { status: 400 }
      )
    }

    if (appointment.prescription) {
      return NextResponse.json(
        { error: "Prescription already exists for this appointment" },
        { status: 400 }
      )
    }

    // Validate medications
    for (const med of medications) {
      if (!med.medicationName?.trim() || !med.dosage?.trim() || !med.frequency?.trim() || !med.duration?.trim()) {
        return NextResponse.json(
          { error: "All medication fields (name, dosage, frequency, duration) are required" },
          { status: 400 }
        )
      }
    }

    // Create prescription with medications in a transaction
    const prescription = await prisma.$transaction(async (tx) => {
      // Create the prescription
      const newPrescription = await tx.prescription.create({
        data: {
          appointmentId,
          doctorId: currentUser.id,
          patientId: appointment.patientId,
          diagnosis: diagnosis.trim(),
          instructions: instructions?.trim() || null,
          validUntil: validUntil ? new Date(validUntil) : null,
        },
      })

      // Create the medications
      await tx.prescriptionMedication.createMany({
        data: medications.map((med: any) => ({
          prescriptionId: newPrescription.id,
          medicationName: med.medicationName.trim(),
          dosage: med.dosage.trim(),
          frequency: med.frequency.trim(),
          duration: med.duration.trim(),
          instructions: med.instructions?.trim() || null,
        })),
      })

      // Return the complete prescription with medications
      return await tx.prescription.findUnique({
        where: { id: newPrescription.id },
        include: {
          medications: true,
          doctor: {
            select: {
              first_name: true,
              last_name: true,
              specialty: true,
            },
          },
          patient: {
            select: {
              first_name: true,
              last_name: true,
            },
          },
        },
      })
    })

    return NextResponse.json({
      message: "Prescription created successfully",
      prescription,
    })
  } catch (error) {
    console.error("Error creating prescription:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const currentUser = await prisma.user.findUnique({
      where: { clerkId: userId },
    })

    if (!currentUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const { searchParams } = new URL(request.url)
    const appointmentId = searchParams.get("appointmentId")

    if (appointmentId) {
      // Get prescription for specific appointment
      const prescription = await prisma.prescription.findUnique({
        where: { appointmentId: parseInt(appointmentId) },
        include: {
          medications: true,
          doctor: {
            select: {
              first_name: true,
              last_name: true,
              specialty: true,
            },
          },
          patient: {
            select: {
              first_name: true,
              last_name: true,
            },
          },
          appointment: {
            select: {
              date: true,
              startTime: true,
              typemaladie: true,
            },
          },
        },
      })

      if (!prescription) {
        return NextResponse.json({ error: "Prescription not found" }, { status: 404 })
      }

      // Check access permissions
      if (currentUser.role === "DOCTOR" && prescription.doctorId !== currentUser.id) {
        return NextResponse.json({ error: "Access denied" }, { status: 403 })
      }

      if (currentUser.role === "PATIENT" && prescription.patientId !== currentUser.id) {
        return NextResponse.json({ error: "Access denied" }, { status: 403 })
      }

      return NextResponse.json({ prescription })
    } else {
      // Get all prescriptions for the user
      const where = currentUser.role === "DOCTOR" 
        ? { doctorId: currentUser.id }
        : { patientId: currentUser.id }

      const prescriptions = await prisma.prescription.findMany({
        where,
        include: {
          medications: true,
          doctor: {
            select: {
              first_name: true,
              last_name: true,
              specialty: true,
            },
          },
          patient: {
            select: {
              first_name: true,
              last_name: true,
            },
          },
          appointment: {
            select: {
              date: true,
              startTime: true,
              typemaladie: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
      })

      return NextResponse.json({ prescriptions })
    }
  } catch (error) {
    console.error("Error fetching prescriptions:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
