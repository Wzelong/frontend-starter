import type { Metadata, Viewport } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ToastProvider } from "@/components/toast-provider"
import { Header, LeftNav, MainContent } from "@/components/layout"

export const metadata: Metadata = {
  title: "App",
  description: "App Description",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ToastProvider>
            <Header />
            <LeftNav />
            <MainContent>{children}</MainContent>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
