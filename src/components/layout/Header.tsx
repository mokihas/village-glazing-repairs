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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {/* Placeholder for Logo, fallback to text */}
          <span className="text-2xl font-bold tracking-tight text-primary">
            {siteConfig.businessName !== "[BUSINESS NAME]" ? siteConfig.businessName : "GlazeCorp"}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-secondary relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href={`tel:${siteConfig.phone}`} className="flex items-center text-[11px] font-bold uppercase tracking-[0.1em] hover:text-secondary transition-colors text-foreground">
            <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
            {siteConfig.phone}
          </Link>
          <Button asChild size="sm" className="h-10 px-6 text-[10px]">
            <Link href="/request-a-quote">GET A QUOTE</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground"
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
