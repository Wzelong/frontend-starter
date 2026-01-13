import { LucideIcon, LayoutDashboard, Settings, User } from "lucide-react"

export interface NavItem {
  href: string
  icon: LucideIcon
  label: string
}

export const navItems: NavItem[] = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/settings", icon: Settings, label: "Settings" },
  { href: "/profile", icon: User, label: "Profile" },
]
