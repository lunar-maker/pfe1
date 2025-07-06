import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Returns all hours between two times (inclusive)
 * @param startTime - Start time in "HH:MM" format (24-hour)
 * @param endTime - End time in "HH:MM" format (24-hour)
 * @returns Array of hours between the times
 */
export function getHoursBetween(startTime: string, endTime: string): string[] {
  // Parse the times
  const [startHour, startMinute] = startTime.split(":").map(Number)
  const [endHour, endMinute] = endTime.split(":").map(Number)

  // Convert to total minutes for easier comparison
  const startTotal = startHour * 60 + startMinute
  const endTotal = endHour * 60 + endMinute

  if (startTotal >= endTotal) {
    throw new Error("Start time must be before end time")
  }

  const hours: string[] = []

  // Handle same hour case
  if (startHour === endHour) {
    return hours // return empty array since we don't want to include either
  }

  // Add the first hour
  hours.push(`${startHour.toString().padStart(2, "0")}:00`)

  // Add full hours in between (up to but not including endHour)
  for (let hour = startHour + 1; hour < endHour; hour++) {
    hours.push(`${hour.toString().padStart(2, "0")}:00`)
  }

  return hours
}
