"use client"

import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "@/redux/features/themeSlice"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { useEffect } from "react"

export default function ThemeToggle() {
  const dispatch = useDispatch()
  const { theme } = useSelector((state) => state.theme)
  const { setTheme } = useTheme()

  // Sync Redux theme state with next-themes
  useEffect(() => {
    setTheme(theme)
  }, [theme, setTheme])

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Theme Settings</CardTitle>
        <CardDescription>Toggle between light and dark mode</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-6">
        <div className="text-4xl">
          {theme === "dark" ? <MoonIcon className="h-16 w-16" /> : <SunIcon className="h-16 w-16" />}
        </div>

        <div className="text-center">
          <p className="mb-4">
            Current theme: <span className="font-bold">{theme}</span>
          </p>
          <Button onClick={handleToggleTheme} size="lg">
            Switch to {theme === "dark" ? "Light" : "Dark"} Mode
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
