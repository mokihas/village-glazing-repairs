import { siteConfig } from "@/config/siteConfig"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export const metadata = {
  title: "About Us",
  description: `Learn more about ${siteConfig.businessName}, your trusted local glass and glazing experts in ${siteConfig.city}.`,
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              About {siteConfig.businessName !== "[BUSINESS NAME]" ? siteConfig.businessName : "Us"}
            </h1>
            <p className="text-xl text-muted-foreground">
              Your trusted local glazing experts, delivering quality and reliability since {siteConfig.yearEstablished}.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <div className="prose prose-lg dark:prose-invert">
              <p>
                Founded in {siteConfig.yearEstablished} by {siteConfig.founder}, {siteConfig.businessName} has grown to become one of the most trusted names in glass and glazing across {siteConfig.city}.
              </p>
              <p>
                We believe in combining traditional craftsmanship with modern materials to deliver outstanding results for both residential and commercial clients. Whether it's a simple window replacement or a complex commercial shopfront, we approach every job with the same dedication to quality and safety.
              </p>
            </div>
            
            <h3 className="text-xl font-bold mt-8">Our Guarantees</h3>
            <ul className="space-y-3 mt-4">
              {[
                "Fully insured and qualified glaziers",
                "Compliance with all safety standards",
                "Clean, respectful working practices",
                "Transparent, upfront pricing",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
               <Button size="lg" asChild>
                 <Link href="/contact">Contact Our Team</Link>
               </Button>
            </div>
          </div>
          
          <div className="aspect-[4/3] bg-muted rounded-lg border border-border flex flex-col items-center justify-center text-muted-foreground font-medium overflow-hidden">
             <img src={siteConfig.aboutImage} alt="Our Glazing Team" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </>
  )
}
