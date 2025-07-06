import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get("date")
    const resolvedParams = await params
    const doctorId = parseInt(resolvedParams.id)

    if (!doctorId) {
      return NextResponse.json(
        { error: "Doctor ID is required" },
        { status: 400 }
      )
    }

    if (!date) {
      return NextResponse.json(
        { error: "Date is required" },
        { status: 400 }
      )
    }

    // Mock time slots for demonstration
    // In a real app, this would check actual availability and booked appointments
    const mockSlots = [
      { id: 1, time: "09:00", isBooked: false },
      { id: 2, time: "09:30", isBooked: false },
      { id: 3, time: "10:00", isBooked: true },
      { id: 4, time: "10:30", isBooked: false },
      { id: 5, time: "11:00", isBooked: false },
      { id: 6, time: "11:30", isBooked: false },
      { id: 7, time: "14:00", isBooked: false },
      { id: 8, time: "14:30", isBooked: false },
      { id: 9, time: "15:00", isBooked: true },
      { id: 10, time: "15:30", isBooked: false },
      { id: 11, time: "16:00", isBooked: false },
      { id: 12, time: "16:30", isBooked: false },
    ]

    // Filter out booked slots
    const availableSlots = mockSlots.filter(slot => !slot.isBooked)

    return NextResponse.json(availableSlots)
  } catch (error) {
    console.error("Error fetching time slots:", error)
    return NextResponse.json(
      { error: "Failed to fetch time slots" },
      { status: 500 }
    )
  }
}
