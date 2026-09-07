import { siteConfig } from "@/config/siteConfig"

export const metadata = {
  title: "Terms and Conditions",
  robots: "noindex",
}

export default function TermsPage() {
  return (
    <div className="container py-20 max-w-3xl prose prose-lg dark:prose-invert">
      <h1>Terms & Conditions</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2>1. General</h2>
      <p>These terms and conditions govern the provision of glass and glazing services by {siteConfig.businessName}.</p>
      
      <h2>2. Quotes and Estimates</h2>
      <p>All quotes are provided in good faith based on the information available. Final pricing is subject to a formal site survey and measurement.</p>
      
      <p><em>[Note: This is a placeholder terms and conditions document. The business owner must replace this with legally binding terms suitable for their jurisdiction.]</em></p>
    </div>
  )
}
