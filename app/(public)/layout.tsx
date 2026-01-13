import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-14 border-b flex items-center px-4 justify-between">
        <Link href="/" className="font-semibold text-lg">
          App
        </Link>
        <Button asChild variant="outline" size="sm">
          <Link href="/login">Login</Link>
        </Button>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="h-14 border-t flex items-center justify-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Your Company
      </footer>
    </div>
  )
}
