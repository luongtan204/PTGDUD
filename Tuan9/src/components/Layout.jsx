import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto p-4 md:p-6">
        <Outlet />
      </main>
    </div>
  )
}
