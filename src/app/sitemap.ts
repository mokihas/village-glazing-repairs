import { MetadataRoute } from "next"
import { siteConfig } from "@/config/siteConfig"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.website

  // Static routes
  const routes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/areas",
    "/contact",
    "/request-a-quote",
    "/faqs"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Dynamic Service routes
  const serviceRoutes = siteConfig.services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  // Dynamic Area routes
  const areaRoutes = siteConfig.serviceAreas.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...routes, ...serviceRoutes, ...areaRoutes]
}
