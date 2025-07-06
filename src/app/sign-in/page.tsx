import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Link href="/" className="text-2xl font-bold text-primary hover:underline mb-6">
        mediconnect
      </Link>
      <SignIn appearance={{ elements: { card: "shadow-lg" } }} />
    </div>
  );
}