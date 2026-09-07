import Link from "next/link"
import { siteConfig } from "@/config/siteConfig"
import { MapPin } from "lucide-react"

export const metadata = {
  title: "Areas We Serve",
  description: `Professional glass and glazing services across ${siteConfig.city} and surrounding areas. Find your local glazier today.`,
}

export default function AreasPage() {
  return (
    <>
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Areas We Serve
            </h1>
            <p className="text-xl text-muted-foreground">
              We provide professional glass replacement and glazing services across {siteConfig.city} and surrounding regions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {siteConfig.serviceAreas.map((area) => (
              <Link 
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:shadow-sm transition-all group"
              >
                <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="font-medium group-hover:text-primary transition-colors">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
