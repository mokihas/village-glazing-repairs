import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/config/siteConfig"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const viewport: Viewport = {
  themeColor: "#0284c7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.businessName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.description,
  keywords: ["glass replacement", "glazing", "commercial glazing", "residential glazing", siteConfig.city],
  authors: [{ name: siteConfig.businessName }],
  creator: siteConfig.businessName,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.website,
    title: siteConfig.businessName,
    description: siteConfig.description,
    siteName: siteConfig.businessName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.businessName,
    description: siteConfig.description,
    creator: "@glazing",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

import { runBuildTimeSEOGuards } from "@/lib/seo-guards"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  
  // Run advanced strict SEO checks
  runBuildTimeSEOGuards()

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} min-h-screen flex flex-col font-sans antialiased`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        
        {/* GoHighLevel Chat Widget Injection */}
        {siteConfig.ghl?.enableChatWidget && siteConfig.ghl.chatWidgetEmbedCode.includes('<') && !siteConfig.ghl.chatWidgetEmbedCode.includes('Paste your GHL') && (
          <div dangerouslySetInnerHTML={{ __html: siteConfig.ghl.chatWidgetEmbedCode }} />
        )}
      </body>
    </html>
  )
}
