"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 bg-gradient-to-r from-blue-600 to-blue-500 bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-bold">
            PULSE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#services" className="text-white hover:text-blue-100 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-white hover:text-blue-100 transition-colors">
              About Us
            </Link>
            <Link href="#case-studies" className="text-white hover:text-blue-100 transition-colors">
              Case Studies
            </Link>
            <Link href="#testimonials" className="text-white hover:text-blue-100 transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-white hover:text-blue-100 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-4 flex flex-col space-y-4">
            <Link
              href="#services"
              className="text-white hover:text-blue-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-blue-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#case-studies"
              className="text-white hover:text-blue-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              href="#testimonials"
              className="text-white hover:text-blue-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-blue-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

