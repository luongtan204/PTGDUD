"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "@/redux/features/themeSlice"
import { useTheme } from "next-themes"
import { useEffect } from "react"

export default function Navigation() {
  const pathname = usePathname()
  const dispatch = useDispatch()
  const { theme: reduxTheme } = useSelector((state) => state.theme)
  const { setTheme } = useTheme()

  // Sync Redux theme state with next-themes
  useEffect(() => {
    setTheme(reduxTheme)
  }, [reduxTheme, setTheme])

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
          <Link href="/" className="font-bold text-xl">
            Redux Examples
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === route.path ? "text-primary font-medium" : "text-muted-foreground",
                )}
              >
                {route.name}
              </Link>
            ))}
          </nav>
        </div>
        <Button variant="ghost" size="icon" onClick={handleToggleTheme}>
          {reduxTheme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}
