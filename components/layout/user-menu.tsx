"use client"

import { useSyncExternalStore } from "react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface UserMenuProps {
  avatarUrl?: string
  avatarFallback?: string
  onLogout?: () => void | Promise<void>
}

export function UserMenu({ avatarUrl, avatarFallback = "U", onLogout }: UserMenuProps) {
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false)
  const router = useRouter()

  const handleLogout = async () => {
    if (onLogout) await onLogout()
    router.push("/login")
  }

  if (!mounted) {
    return (
      <div className="rounded-full">
        <Avatar className="h-7 w-7">
          <AvatarFallback className="text-[10px]">{avatarFallback}</AvatarFallback>
        </Avatar>
      </div>
    )
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full cursor-pointer">
          <Avatar className="h-7 w-7">
            {avatarUrl && <AvatarImage src={avatarUrl} />}
            <AvatarFallback className="text-[10px]">{avatarFallback}</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="cursor-pointer" onClick={() => router.push("/profile")}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={() => router.push("/settings")}>
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
