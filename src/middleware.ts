import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

const isPublicRoute = createRouteMatcher(["/", "/home", "/onboarding","/chat"])

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims, redirectToSignIn } = await auth()

  // If the user isn't signed in and the route is private, redirect to sign-in
  if (!userId && !isPublicRoute(req)) {
    return redirectToSignIn({ returnBackUrl: req.url })
  }

  // Catch users who do not have `onboardingComplete: true` in their publicMetadata
  // Redirect them to the /onboading route to complete onboarding
  if (
    userId &&
    !sessionClaims?.metadata?.onboardingComplete &&
    req.nextUrl.pathname !== "/onboarding"
  ) {
    const onboardingUrl = new URL("/onboarding", req.url)
    return NextResponse.redirect(onboardingUrl)
  }

  // If user has completed onboarding and is trying to access the home page ("/"), 
  // redirect them to their appropriate dashboard based on their role
  if (
    userId &&
    sessionClaims?.metadata?.onboardingComplete &&
    req.nextUrl.pathname === "/"
  ) {
    const userRole = sessionClaims?.metadata?.role
    if (userRole === "PATIENT") {
      const patientDashboard = new URL("/patient", req.url)
      return NextResponse.redirect(patientDashboard)
    } else if (userRole === "DOCTOR") {
      const doctorDashboard = new URL("/doctor", req.url)
      return NextResponse.redirect(doctorDashboard)
    }
  }

  // If the user is logged in and the route is protected, let them view.
  if (userId && !isPublicRoute(req)) {
    return NextResponse.next()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
}
