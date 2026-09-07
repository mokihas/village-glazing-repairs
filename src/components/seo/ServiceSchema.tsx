import { siteConfig } from "@/config/siteConfig"

interface ServiceSchemaProps {
  name: string
  description: string
  url: string
}

export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.businessName,
      image: siteConfig.logo
    },
    areaServed: siteConfig.serviceAreas.map(area => ({
      "@type": "City",
      name: area.name
    })),
    url: url
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
