import { siteConfig } from "@/config/siteConfig"
import { ServiceCard } from "@/components/ui/ServiceCard"

export const metadata = {
  title: "Glass & Glazing Services",
  description: `Professional glass and glazing services by ${siteConfig.businessName}. View our full range of residential and commercial solutions.`,
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive glass repair, replacement, and installation services tailored to your specific requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {siteConfig.services.map((service) => (
              <ServiceCard 
                key={service.id}
                title={service.name}
                description={service.shortDescription}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
