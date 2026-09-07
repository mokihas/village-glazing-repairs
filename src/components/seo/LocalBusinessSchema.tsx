import { siteConfig } from "@/config/siteConfig"

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": siteConfig.primaryCategory === "Glass & Glazing Contractor" ? "HomeAndConstructionBusiness" : "LocalBusiness",
    name: siteConfig.businessName,
    image: siteConfig.logo,
    "@id": siteConfig.website,
    url: siteConfig.website,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.latitude,
      longitude: siteConfig.longitude
    },
    openingHoursSpecification: siteConfig.openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.day,
      opens: hours.open !== "Closed" ? hours.open : undefined,
      closes: hours.close !== "Closed" ? hours.close : undefined
    })).filter(h => h.opens),
    sameAs: Object.values(siteConfig.socialProfiles).filter(Boolean)
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
