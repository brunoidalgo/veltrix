"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import logo from "@/public/logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Call once to set initial state
    handleScroll()

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image alt="logo" src={logo} width={40} height={40} />
          <span className="text-xl font-bold">Veltrix</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden space-x-6 md:flex">
          <NavLinks className="text-sm font-medium" />
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <div className="flex flex-col space-y-4 py-4">
              <NavLinks className="flex flex-col space-y-3" onClick={() => setIsOpen(false)} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

interface NavLinksProps {
  className?: string
  onClick?: () => void
}

function NavLinks({ className, onClick }: NavLinksProps) {
  return (
    <div className={cn("flex gap-4", className)}>
      <Link href="/" className="text-foreground transition-colors hover:text-primary" onClick={onClick}>
        Início
      </Link>
      <Link href="#about" className="text-foreground transition-colors hover:text-primary" onClick={onClick}>
        Sobre
      </Link>
      <Link href="#services" className="text-foreground transition-colors hover:text-primary" onClick={onClick}>
        Serviços
      </Link>
      <Link href="#contact" className="text-foreground transition-colors hover:text-primary" onClick={onClick}>
        Contato
      </Link>
    </div>
  )
}

