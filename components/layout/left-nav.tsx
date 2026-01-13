"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { navItems } from "./nav-config"

export function LeftNav() {
  const pathname = usePathname()

  return (
    <TooltipProvider>
      <nav className="hidden md:flex fixed left-0 top-11 md:top-12 lg:top-[54px] bottom-0 w-10 lg:w-11 border-r bg-background flex-col items-center py-3 gap-3 z-40">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link href={item.href}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "cursor-pointer h-7 w-7",
                      isActive && "bg-primary/10 hover:bg-primary/20"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          )
        })}
      </nav>
    </TooltipProvider>
  )
}
