import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PlaidProvider } from "@/lib/plaid"
import { Providers } from "./providers"

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: "streetcred - On-Chain Credit Scoring",
  description: "The future of credit scoring is on-chain",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slogo-K0TLgY8fPdGH0RAZiiT1awcD8quZVW.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slogo-K0TLgY8fPdGH0RAZiiT1awcD8quZVW.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <PlaidProvider>
              {children}
            </PlaidProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}

import './globals.css'