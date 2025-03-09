import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PlaidProvider } from "@/lib/plaid"

const inter = Inter({ subsets: ["latin"] })

// Load Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--roboto",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          :root {
            --roboto: ${roboto.style.fontFamily}, sans-serif;
          }
        `}</style>
      </head>
      <body className={`${roboto.variable} font-sans antialiased`}>
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
      </body>
    </html>
  )
}

import './globals.css'