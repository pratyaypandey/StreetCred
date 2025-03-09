"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slogo-K0TLgY8fPdGH0RAZiiT1awcD8quZVW.png"
                alt="streetcred logo"
                width={20}
                height={20}
                className="h-5 w-5"
              />
              <span className="text-lg font-normal text-[#e72c61]">streetcred</span>
            </Link>

            <div className="hidden md:flex items-center space-x-10">
              <Link href="/about" className="text-[#363636] hover:text-[#e72c61] transition-colors text-sm">
                About
              </Link>
              <Link
                href="/check-credit-score"
                className="text-[#363636] hover:text-[#e72c61] transition-colors text-sm"
              >
                Check Credit Score
              </Link>
              <Link href="/develop-with-us" className="text-[#363636] hover:text-[#e72c61] transition-colors text-sm">
                Develop With Us
              </Link>
              <Link href="/">
                <Button size="sm" variant="outline" className="text-sm font-normal">
                  Get Started
                </Button>
              </Link>
            </div>

            <button className="md:hidden text-[#363636]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 bg-[#f5f5f5]/95 backdrop-blur-md z-40 md:hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-[#363636] hover:text-[#e72c61] transition-colors py-2 border-b border-[#363636]/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/check-credit-score"
                className="text-[#363636] hover:text-[#e72c61] transition-colors py-2 border-b border-[#363636]/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Check Credit Score
              </Link>
              <Link
                href="/develop-with-us"
                className="text-[#363636] hover:text-[#e72c61] transition-colors py-2 border-b border-[#363636]/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Develop With Us
              </Link>
              <Link href="/" className="w-full">
                <Button onClick={() => setIsMobileMenuOpen(false)} className="w-full mt-4">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

