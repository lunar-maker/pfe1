import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const doctorId = searchParams.get("doctorId")
    const date = searchParams.get("date")

    if (!doctorId) {
      return NextResponse.json(
        { error: "Doctor ID is required" },
        { status: 400 },
      )
    }

    const availability = await prisma.doctorAvailability.findMany({
      where: {
        doctorId: parseInt(doctorId),
        ...(date ? { date: new Date(date) } : {}),
      },
      orderBy: {
        date: "asc",
      },
    })

    return NextResponse.json(availability)
  } catch (error) {
    console.error("Error fetching availability:", error)
    return NextResponse.json(
      { error: "Failed to fetch availability" },
      { status: 500 },
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { doctorId, date, startTime, endTime, isAvailable } = body

    if (!doctorId || !date || !startTime || !endTime) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      )
    }

    const availability = await prisma.doctorAvailability.create({
      data: {
        doctorId: parseInt(doctorId),
        date: new Date(date),
        startTime,
        endTime,
        isAvailable: isAvailable ?? true,
      },
    })

    return NextResponse.json(availability)
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
    const body = await request.json()
    const { id, isAvailable, startTime, endTime } = body

    if (!id) {
      return NextResponse.json(
        { error: "Availability ID is required" },
        { status: 400 },
      )
    }

    const availability = await prisma.doctorAvailability.update({
      where: { id: parseInt(id) },
      data: {
        isAvailable,
        ...(startTime && { startTime }),
        ...(endTime && { endTime }),
      },
    })

    return NextResponse.json(availability)
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
    const body = await request.json()
    const { id } = body

    if (!id) {
      return NextResponse.json(
        { error: "Availability ID is required" },
        { status: 400 },
      )
    }

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
