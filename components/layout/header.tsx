"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { UserMenu } from "./user-menu"
import { MobileMenu } from "./mobile-menu"

interface HeaderProps {
  logo?: React.ReactNode
  logoHref?: string
}

export function Header({ logo, logoHref = "/" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-11 md:h-12 lg:h-[54px] border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 flex items-center z-50">
        <Link href={logoHref} className="w-11 md:w-10 lg:w-11 flex items-center justify-center">
          {logo || <span className="font-semibold text-lg">App</span>}
        </Link>
        <div className="flex-1" />

        <div className="hidden md:flex items-center gap-1.5 md:gap-2 pr-2 md:pr-3 lg:pr-2">
          <ThemeToggle />
          <UserMenu />
        </div>

        <div className="md:hidden flex items-center justify-center w-11">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="cursor-pointer h-6 w-6"
          >
            {mobileMenuOpen ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
          </Button>
        </div>
      </header>

      {mobileMenuOpen && (
        <>
          <div
            className="md:hidden fixed top-11 left-0 right-0 bottom-0 bg-background/80 backdrop-blur-sm z-[60]"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="md:hidden fixed top-11 right-0 w-11 bg-background border-l border-b rounded-bl-md shadow-lg z-[60] animate-in slide-in-from-top-2 duration-200">
            <MobileMenu onClose={() => setMobileMenuOpen(false)} />
          </div>
        </>
      )}
    </>
  )
}
