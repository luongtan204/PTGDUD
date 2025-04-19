import { Inter } from "next/font/google"
import "./globals.css"
import { ReduxProvider } from "@/redux/provider"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/Navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Redux Toolkit Examples",
  description: "Complete Redux Toolkit examples with multiple features",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-1 container mx-auto p-4 md:p-6">{children}</main>
            </div>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}


import './globals.css'