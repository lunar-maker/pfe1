import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const specialty = searchParams.get("specialty")
    const location = searchParams.get("location")
    const search = searchParams.get("search")
    const date = searchParams.get("date")
    const isAvailable = searchParams.get("isAvailable")
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "20")
    const skip = (page - 1) * limit

    const where: any = {
      role: "DOCTOR",
    }

    // Filter by specialty
    if (specialty) {
      where.specialty = specialty
    }

    // Search by name
    if (search) {
      where.OR = [
        { first_name: { contains: search, mode: "insensitive" } },
        { last_name: { contains: search, mode: "insensitive" } },
      ]
    }

    // Enhanced availability filter
    if (isAvailable === "true" && date) {
      const searchDate = new Date(date)
      const dayOfWeek = searchDate.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase()
      
      where.AND = [
        // Must have active weekly schedule templates
        {
          weeklySchedules: {
            some: {
              isActive: true,
              effectiveFrom: { lte: searchDate },
              OR: [
                { effectiveTo: null },
                { effectiveTo: { gte: searchDate } }
              ],
              // Must have active time slots for the day of week
              timeSlots: {
                some: {
                  dayOfWeek: dayOfWeek,
                  isActive: true
                }
              }
            }
          }
        },
        // Optional: Also check specific date availability if it exists
        {
          OR: [
            // No specific availability record for this date (use weekly schedule)
            {
              doctorAvailabilities: {
                none: {
                  date: searchDate
                }
              }
            },
            // Or has specific availability that is active
            {
              doctorAvailabilities: {
                some: {
                  date: searchDate,
                  isAvailable: true
                }
              }
            }
          ]
        }
      ]
    }

    const doctors = await prisma.user.findMany({
      where,
      select: {
        id: true,
        first_name: true,
        last_name: true,
        phone_number: true,
        specialty: true,
        createdAt: true,
        updatedAt: true,
        // Add mock data for enhanced profile
        clerkId: true,
        role: true,
        birth_date: true,
        gender: true,
      },
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    })

    // Enhance doctors with mock data for demonstration
    const enhancedDoctors = doctors.map((doctor) => ({
      ...doctor,
      rating: Math.round((Math.random() * 2 + 3.5) * 10) / 10, // 3.5-5.0 rating
      experience: `${Math.floor(Math.random() * 20 + 5)} ans d'expérience`,
      location: "Paris " + Math.floor(Math.random() * 20 + 1) + "ème",
      bio: "Médecin expérimenté avec une approche bienveillante et professionnelle.",
      consultationFee: Math.floor(Math.random() * 50 + 50), // 50-100€
    }))

    // Get total count for pagination
    const total = await prisma.user.count({ where })

    return NextResponse.json({
      doctors: enhancedDoctors,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching doctors:", error)
    return NextResponse.json(
      { error: "Failed to fetch doctors" },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, specialty, location } = body

    if (!name || !specialty || !location) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const [firstName, ...lastNameParts] = name.split(" ")
    const lastName = lastNameParts.join(" ")

    const doctor = await prisma.user.create({
      data: {
        clerkId: `doctor_${Date.now()}`, // Temporary ID, should be from Clerk in production
        role: "DOCTOR",
        first_name: firstName,
        last_name: lastName,
        specialty: specialty,
        phone_number: "+1234567890",
        birth_date: new Date("1980-01-01"), // Default birth date
        gender: "OTHER", // Default gender
      },
    })

    return NextResponse.json(doctor)
  } catch (error) {
    console.error("Error creating doctor:", error)
    return NextResponse.json(
      { error: "Failed to create doctor" },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const { id, ...updates } = body

    if (!id) {
      return NextResponse.json(
        { error: "Doctor ID is required" },
        { status: 400 }
      )
    }

    const doctor = await prisma.user.update({
      where: { 
        id: parseInt(id),
        role: "DOCTOR" 
      },
      data: updates,
    })

    return NextResponse.json(doctor)
  } catch (error) {
    console.error("Error updating doctor:", error)
    return NextResponse.json(
      { error: "Failed to update doctor" },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json()
    const { id } = body

    if (!id) {
      return NextResponse.json(
        { error: "Doctor ID is required" },
        { status: 400 }
      )
    }

    await prisma.user.delete({
      where: { 
        id: parseInt(id),
        role: "DOCTOR"
      },
    })

    return NextResponse.json({ message: "Doctor deleted successfully" })
  } catch (error) {
    console.error("Error deleting doctor:", error)
    return NextResponse.json(
      { error: "Failed to delete doctor" },
      { status: 500 }
    )
  }
}
