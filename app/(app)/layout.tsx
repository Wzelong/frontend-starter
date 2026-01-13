import { Header, LeftNav, MainContent } from "@/components/layout"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <LeftNav />
      <MainContent>{children}</MainContent>
    </>
  )
}
