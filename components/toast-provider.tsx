"use client"

import { ReactNode } from "react"
import { Toaster, toast as sonnerToast } from "sonner"
import { useTheme } from "next-themes"
import { CheckCircle2, XCircle, Info, AlertTriangle } from "lucide-react"

interface ToastAction {
  label: string
  onClick: () => void
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const { theme } = useTheme()

  return (
    <>
      {children}
      <Toaster
        position="top-center"
        theme={theme as "light" | "dark" | "system"}
        icons={{
          success: <CheckCircle2 className="h-4 w-4" />,
          error: <XCircle className="h-4 w-4" />,
          info: <Info className="h-4 w-4" />,
          warning: <AlertTriangle className="h-4 w-4" />,
        }}
      />
    </>
  )
}

export function useToast() {
  return {
    success: (message: string, action?: ToastAction) => {
      sonnerToast.success(message, action ? { action: { label: action.label, onClick: action.onClick } } : undefined)
    },
    error: (message: string) => sonnerToast.error(message),
    info: (message: string) => sonnerToast.info(message),
    warning: (message: string) => sonnerToast.warning(message),
  }
}
