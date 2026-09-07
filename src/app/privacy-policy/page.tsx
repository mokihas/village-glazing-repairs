import { siteConfig } from "@/config/siteConfig"

export const metadata = {
  title: "Privacy Policy",
  robots: "noindex",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-20 max-w-3xl prose prose-lg dark:prose-invert">
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2>1. Introduction</h2>
      <p>Welcome to {siteConfig.businessName}. This privacy policy explains how we collect, use, and protect your personal information.</p>
      
      <h2>2. Information We Collect</h2>
      <p>We may collect information such as your name, phone number, email address, and property address when you request a quote or contact us for services.</p>
      
      <h2>3. How We Use Your Information</h2>
      <p>We use your information exclusively to:</p>
      <ul>
        <li>Provide estimates and quotes</li>
        <li>Communicate with you regarding your glazing project</li>
        <li>Fulfill our service obligations</li>
      </ul>
      
      <p><em>[Note: This is a placeholder privacy policy. The business owner must replace this with a legally compliant privacy policy suitable for their jurisdiction.]</em></p>
    </div>
  )
}
