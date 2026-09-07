import { siteConfig } from "@/config/siteConfig"
import { FAQSchema } from "@/components/seo/FAQSchema"

export const metadata = {
  title: "Frequently Asked Questions",
  description: `Common questions about glass replacement, commercial glazing, and our services at ${siteConfig.businessName}.`,
}

export default function FAQPage() {
  return (
    <>
      <FAQSchema />
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Got a question about our glass and glazing services? Find the answers below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-3xl">
          <div className="space-y-8">
            {siteConfig.faqs.map((faq, index) => (
              <div key={index} className="pb-8 border-b border-border last:border-0">
                <h2 className="text-xl font-bold mb-3">{faq.question}</h2>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
