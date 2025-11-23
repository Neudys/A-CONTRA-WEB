"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight z-50">
          A CONTRA<span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#info" className="text-sm font-medium hover:text-primary transition-colors">
            Info
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About Us
          </Link>
          <Button
            variant="default"
            className="rounded-full px-6 font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
          >
            Contact
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile NavigationOverlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 md:hidden animate-in fade-in slide-in-from-top-10 duration-200">
            <Link href="#home" className="text-2xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="#info" className="text-2xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Info
            </Link>
            <Link href="#about" className="text-2xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>
            <Button size="lg" className="rounded-full px-8 text-lg mt-4">
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
