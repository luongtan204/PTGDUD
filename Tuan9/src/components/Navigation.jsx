"use client"

import { Link, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../redux/features/themeSlice"
import { useEffect, useState } from "react"
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react"

export default function Navigation() {
  const location = useLocation()
  const dispatch = useDispatch()
  const { theme } = useSelector((state) => state.theme)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Update document class when theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  const routes = [
    { name: "Home", path: "/" },
    { name: "Counter", path: "/counter" },
    { name: "Todo", path: "/todo" },
    { name: "Theme", path: "/theme" },
    { name: "Cart", path: "/cart" },
    { name: "Auth", path: "/auth" },
  ]

  return (
    <header className="border-b sticky top-0 z-10 bg-background">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-bold text-xl">
            Redux Examples
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`text-sm transition-colors hover:text-primary ${
                  location.pathname === route.path ? "text-primary font-medium" : "text-muted-foreground"
                }`}
              >
                {route.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-md hover:bg-muted" onClick={handleToggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>

          <button
            className="md:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto py-3">
            <nav className="flex flex-col space-y-3">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className={`p-2 rounded-md ${
                    location.pathname === route.path ? "bg-primary/10 text-primary font-medium" : "text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {route.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
