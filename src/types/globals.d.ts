export {}

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      onboardingComplete?: boolean
      role?: "PATIENT" | "DOCTOR"
    }
  }
}
