import { notFound } from "next/navigation"
import Link from "next/link"
import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/Button"
import { ServiceSchema } from "@/components/seo/ServiceSchema"
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema"
import { CheckCircle2 } from "lucide-react"

export async function generateStaticParams() {
  return siteConfig.services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = siteConfig.services.find((s) => s.slug === resolvedParams.slug)
  if (!service) return {}

  return {
    title: `${service.name} in ${siteConfig.city}`,
    description: service.shortDescription,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = siteConfig.services.find((s) => s.slug === resolvedParams.slug)
  
  if (!service) {
    notFound()
  }

  return (
    <>
      <ServiceSchema 
        name={service.name} 
        description={service.longDescription} 
        url={`${siteConfig.website}/services/${service.slug}`} 
      />
      <BreadcrumbSchema 
        items={[
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` }
        ]} 
      />
      
      {/* Hero */}
      <section className="bg-background border-b border-border py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-3">
               <span className="w-8 h-[1px] bg-secondary" />
               <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary">Service Specialization</span>
            </div>
            <h1 className="text-[3rem] md:text-[4rem] font-bold tracking-tight text-foreground leading-[1.1]">
              {service.name}.
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="container grid md:grid-cols-3 gap-16">
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center text-muted-foreground font-medium overflow-hidden">
              <img src={service.image || "/images/service-placeholder.svg"} alt={service.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4 tracking-tight">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
              
              <h3 className="text-xl font-bold mt-12 mb-6 tracking-tight">Technical Applications</h3>
              <ul className="grid sm:grid-cols-2 gap-4 mt-4">
                {service.applications.map((app, i) => (
                  <li key={i} className="flex items-center gap-3 m-0 p-0 text-sm font-bold uppercase tracking-[0.1em] text-foreground border-b border-border pb-3">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <div className="border border-border p-8 space-y-6 bg-muted/50">
              <h3 className="text-lg font-bold uppercase tracking-[0.1em]">Engage Our Services</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Schedule a technical consultation or request an immediate estimate.</p>
              <div className="space-y-3">
                <Button className="w-full" size="sm" asChild>
                  <Link href="/request-a-quote">Request Estimate</Link>
                </Button>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href={`tel:${siteConfig.phone}`}>Call {siteConfig.phone}</Link>
                </Button>
              </div>
            </div>

            <div className="bg-foreground text-white p-8 space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Coverage Areas</h3>
              <ul className="space-y-3 text-xs font-bold tracking-[0.1em] uppercase">
                {siteConfig.serviceAreas.map(area => (
                  <li key={area.slug} className="border-b border-gray-800 pb-2">
                    <Link href={`/areas/${area.slug}`} className="text-gray-400 hover:text-secondary transition-colors block">
                      {service.name} in {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}
