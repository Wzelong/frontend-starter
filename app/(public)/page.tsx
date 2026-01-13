import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-7rem)] px-4">
      <h1 className="text-4xl font-bold text-center">Welcome</h1>
      <p className="text-muted-foreground mt-4 text-center max-w-md">
        Your app description goes here.
      </p>
      <Button asChild className="mt-6">
        <Link href="/login">Get Started</Link>
      </Button>
    </div>
  )
}
