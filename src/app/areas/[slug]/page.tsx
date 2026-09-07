import { notFound } from "next/navigation"
import Link from "next/link"
import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/Button"
import { CheckCircle2, Phone } from "lucide-react"

import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"

export async function generateStaticParams() {
  return siteConfig.serviceAreas.map((area) => ({
    slug: area.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const area = siteConfig.serviceAreas.find((a) => a.slug === resolvedParams.slug)
  if (!area) return {}

  return {
    title: `Glass & Glazing Services in ${area.name}`,
    description: `Professional glass replacement, residential, and commercial glazing services in ${area.name}. Contact ${siteConfig.businessName} today.`,
  }
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const area = siteConfig.serviceAreas.find((a) => a.slug === resolvedParams.slug)
  
  if (!area) {
    notFound()
  }

  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Areas We Serve", path: "/areas" },
          { name: area.name, path: `/areas/${area.slug}` }
        ]} 
      />
      <section className="bg-background border-b border-border py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-3">
               <span className="w-8 h-[1px] bg-secondary" />
               <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary">Local Coverage</span>
            </div>
            <h1 className="text-[3rem] md:text-[4rem] font-bold tracking-tight text-foreground leading-[1.1]">
              {area.name}.
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl">
              Precision architectural glazing and commercial glass services deployed throughout {area.name} and surrounding districts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container grid md:grid-cols-3 gap-16">
          
          <div className="md:col-span-2 space-y-12">
            <h2 className="text-2xl font-bold tracking-tight">Expert Glaziers in {area.name}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {siteConfig.businessName !== "[BUSINESS NAME]" ? siteConfig.businessName : "GlazeCorp"} executes high-specification architectural glazing projects across {area.name}. From structural commercial facades to bespoke residential installations, our local teams operate with absolute precision and strict adherence to safety protocols.
            </p>
            
            <h3 className="text-xl font-bold mt-12 mb-6 tracking-tight">Available Services in {area.name}</h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mt-4">
              {siteConfig.services.map((service) => (
                <div key={service.id} className="border-b border-border py-4 flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    <h4 className="text-sm font-bold uppercase tracking-[0.1em]">{service.name}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.shortDescription}</p>
                  <Link href={`/services/${service.slug}`} className="text-xs font-bold text-foreground tracking-[0.1em] uppercase hover:text-secondary transition-colors mt-2 inline-flex items-center">
                    View Specifications <span className="ml-2 text-secondary">&rarr;</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div className="bg-foreground text-white p-8 space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Local Deployment</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Our technical teams are positioned to deploy rapidly throughout the {area.name} district.</p>
              
              <div className="space-y-3 pt-4">
                <Button className="w-full bg-white text-foreground hover:bg-gray-200" size="sm" asChild>
                  <Link href={`tel:${siteConfig.phone}`}>
                    Call {siteConfig.phone}
                  </Link>
                </Button>
                <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800" size="sm" asChild>
                  <Link href="/request-a-quote">Request Estimate</Link>
                </Button>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}
