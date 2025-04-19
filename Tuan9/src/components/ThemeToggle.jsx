"use client"

import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../redux/features/themeSlice"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { useEffect } from "react"

export default function ThemeToggle() {
  const dispatch = useDispatch()
  const { theme } = useSelector((state) => state.theme)
  const { setTheme } = useTheme()

  // Sync Redux theme state with context theme
  useEffect(() => {
    setTheme(theme)
  }, [theme, setTheme])

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <div className="border rounded-lg shadow-sm">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">Theme Settings</h2>
        <p className="text-muted-foreground mb-6">Toggle between light and dark mode</p>

        <div className="flex flex-col items-center space-y-6">
          <div className="text-4xl">
            {theme === "dark" ? <MoonIcon className="h-16 w-16" /> : <SunIcon className="h-16 w-16" />}
          </div>

          <div className="text-center">
            <p className="mb-4">
              Current theme: <span className="font-bold">{theme}</span>
            </p>
            <button onClick={handleToggleTheme} className="bg-primary text-white px-4 py-2 rounded-md">
              Switch to {theme === "dark" ? "Light" : "Dark"} Mode
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
