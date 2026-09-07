import { siteConfig } from "@/config/siteConfig"

/**
 * Validates the siteConfig against strict SEO constraints.
 * If this fails, the Next.js build will intentionally crash.
 * This prevents junior devs/SEOs from publishing un-optimized master templates.
 */
export function runBuildTimeSEOGuards() {
  const errors: string[] = []

  // 1. Title Constraints
  const title = `${siteConfig.businessName} | ${siteConfig.tagline}`
  if (title.length > 60) {
    errors.push(`SEO GUARD: Meta Title is too long (${title.length} chars). Must be ≤ 60 chars to prevent Google truncation.`)
  }

  // 2. Meta Description Constraints
  if (siteConfig.description.length < 50 || siteConfig.description.length > 160) {
    errors.push(`SEO GUARD: Meta Description must be between 50 and 160 characters. Current length: ${siteConfig.description.length}.`)
  }

  // 3. Local SEO Proof (City must be mentioned in description)
  if (!siteConfig.description.toLowerCase().includes(siteConfig.city.toLowerCase())) {
    errors.push(`SEO GUARD: Local SEO Failure. The meta description must contain the primary city ("${siteConfig.city}") for localized ranking.`)
  }

  // 4. Offer/Service validations
  if (siteConfig.services.length === 0) {
    errors.push(`SEO GUARD: Missing Services. You must define at least one service to generate offer catalogs.`)
  }

  // 5. Placeholder leak checks
  const criticalFields = [siteConfig.businessName, siteConfig.phone, siteConfig.city]
  criticalFields.forEach(field => {
    if (field.includes("[") || field.includes("]")) {
      errors.push(`SEO GUARD: Placeholder detected in critical field: "${field}". Remove brackets before publishing.`)
    }
  })

  if (errors.length > 0) {
    // Only crash during actual build, not in dev mode (unless strictly wanted, but build is safer so devs can still work)
    if (process.env.NODE_ENV === 'production') {
      console.error("\n=======================================")
      console.error("❌ BUILD FAILED: STRICT SEO GUARDS ❌")
      console.error("=======================================\n")
      errors.forEach(err => console.error(err))
      console.error("\nPlease fix these in siteConfig.ts before deploying.\n")
      throw new Error("Strict SEO Guards Failed.")
    } else {
      // In dev mode, just log aggressive warnings
      console.warn("\n⚠️ [SEO GUARD WARNING] ⚠️")
      errors.forEach(err => console.warn("- " + err))
    }
  }
}
