"use client"

import { useRouter, usePathname } from "next/navigation"
import { Moon, Sun, User, Settings, LogOut } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { navItems } from "./nav-config"

interface MobileMenuProps {
  onClose: () => void
  onLogout?: () => void | Promise<void>
}

export function MobileMenu({ onClose, onLogout }: MobileMenuProps) {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  const toggleTheme = () => {
    const currentTheme = theme === "system" ? resolvedTheme : theme
    setTheme(currentTheme === "dark" ? "light" : "dark")
  }

  const handleLogout = async () => {
    if (onLogout) await onLogout()
    onClose()
    router.push("/login")
  }

  const handleNavigate = (path: string) => {
    onClose()
    router.push(path)
  }

  return (
    <div className="flex flex-col items-center py-1">
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
        return (
          <Button
            key={item.href}
            variant="ghost"
            size="icon"
            onClick={() => handleNavigate(item.href)}
            className={cn("cursor-pointer h-9 w-9", isActive && "bg-primary/10")}
          >
            <Icon className="h-5 w-5" />
          </Button>
        )
      })}
      <Separator className="my-1 w-6" />
      <Button variant="ghost" size="icon" onClick={toggleTheme} className="cursor-pointer h-9 w-9">
        {(theme === "system" ? resolvedTheme : theme) === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => handleNavigate("/profile")}
        className="cursor-pointer h-9 w-9"
      >
        <User className="h-5 w-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => handleNavigate("/settings")}
        className="cursor-pointer h-9 w-9"
      >
        <Settings className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" onClick={handleLogout} className="cursor-pointer h-9 w-9">
        <LogOut className="h-5 w-5" />
      </Button>
    </div>
  )
}
