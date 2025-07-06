import { ModeToggle } from "@/components/mode-toggle"
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "./ui/button"

interface NavbarProps {
  children?: React.ReactNode
}

export function Navbar({ children }: NavbarProps) {
  return (
    <header className="flex h-16 w-full items-center justify-between border-b px-4">
      <Link href="/" className="text-xl font-bold">
        MediConnect
      </Link>
      <div className="flex items-center gap-4">
        
        <ModeToggle />

        <SignedOut>
         <SignInButton>
  <Button
    className=" cursor-pointer border border-blue-700 bg-white text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 shadow"
  >
    Connexion
  </Button>
</SignInButton>
<SignUpButton>
  <Button
    className=" cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow"
  >
    Inscription
  </Button>
</SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
        {/* <Link
            href="/chat"
            className="flex items-center gap-2 text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            <FaComments className="h-5 w-5" />
            <span>Chat</span>
          </Link> */}
        {children}
      </div>
    </header>
  )
}
