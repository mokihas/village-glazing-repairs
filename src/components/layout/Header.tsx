"use client"

import * as React from "react"
import Link from "next/link"
import { Phone, Menu, X, MessageCircle } from "lucide-react"
import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="absolute top-6 left-0 w-full z-50 px-6 md:px-12">
      <div className="container flex h-16 max-w-[1200px] items-center justify-between rounded-full bg-foreground px-6 shadow-xl">
        <Link href="/" className="flex items-center space-x-2">
          {/* Logo */}
          <span className="text-xl font-bold tracking-tight text-white flex items-center">
            <span className="text-primary mr-1">V</span>
            Village Glazing
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/90">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-primary relative group"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Button asChild size="sm" className="h-10 px-6 rounded-full text-foreground bg-primary hover:brightness-105">
            <Link href="/request-a-quote">Free Quote</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col space-y-3 pt-4 border-t border-border">
            <Button asChild className="w-full justify-center">
              <Link href={`tel:${siteConfig.phone}`}>
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </Link>
            </Button>
            
            {siteConfig.whatsapp && siteConfig.whatsapp !== "WHATSAPP_PLACEHOLDER" && (
              <Button asChild variant="outline" className="w-full justify-center text-[#25D366] border-[#25D366] hover:bg-[#25D366]/10">
                <Link href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
                </Link>
              </Button>
            )}

            <Button asChild className="w-full justify-center">
              <Link href="/request-a-quote">Request a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
