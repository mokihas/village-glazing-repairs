import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/Button"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export const metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.businessName} for all your glass and glazing needs in ${siteConfig.city}.`,
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              We're here to help with your glass and glazing requirements. Reach out to our team today.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-muted-foreground mb-1">For urgent enquiries or fast quotes.</p>
                    <a href={`tel:${siteConfig.phone}`} className="text-lg font-bold hover:text-primary transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                {siteConfig.whatsapp && siteConfig.whatsapp !== "WHATSAPP_PLACEHOLDER" && (
                  <div className="flex items-start gap-4">
                    <div className="bg-[#25D366]/10 p-3 rounded-full text-[#25D366]">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">WhatsApp</h3>
                      <p className="text-muted-foreground mb-1">Send us photos of your project.</p>
                      <a href={`https://wa.me/${siteConfig.whatsapp}`} className="text-lg font-bold hover:text-[#25D366] transition-colors" target="_blank" rel="noopener noreferrer">
                        {siteConfig.whatsapp}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground mb-1">Drop us a line anytime.</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-lg font-bold hover:text-primary transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Business Details</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-muted-foreground shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Address / Service Area</h3>
                    <p className="text-muted-foreground">{siteConfig.streetAddress}</p>
                    <p className="text-muted-foreground">{siteConfig.city}, {siteConfig.state} {siteConfig.postalCode}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-muted-foreground shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Opening Hours</h3>
                    <ul className="text-muted-foreground text-sm space-y-1 mt-2">
                      {siteConfig.openingHours.map((h) => (
                        <li key={h.day} className="flex justify-between w-48">
                          <span>{h.day}</span>
                          <span>{h.open === "Closed" ? "Closed" : `${h.open} - ${h.close}`}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form placeholder (Visual only) */}
          <div className="bg-muted p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
            <p className="text-muted-foreground mb-6">Fill out the form below and we'll get back to you shortly.</p>
            
            {siteConfig.ghl?.contactFormEmbedCode && siteConfig.ghl.contactFormEmbedCode.includes('<') && !siteConfig.ghl.contactFormEmbedCode.includes('Paste your GHL') ? (
              <div 
                className="w-full bg-white rounded-lg p-4"
                dangerouslySetInnerHTML={{ __html: siteConfig.ghl.contactFormEmbedCode }}
              />
            ) : (
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input id="name" type="text" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                    <input id="phone" type="tel" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input id="email" type="email" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" placeholder="Email Address" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium">Service Required</label>
                  <select id="service" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
                    <option>Select a service...</option>
                    {siteConfig.services.map(s => <option key={s.id}>{s.name}</option>)}
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea id="message" rows={4} className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" placeholder="How can we help?"></textarea>
                </div>
                <Button type="button" size="lg" className="w-full">Send Message</Button>
                <div className="p-3 bg-secondary/10 border border-secondary text-secondary rounded text-xs text-center mt-4 font-semibold">
                  You can replace this demo form with your GHL Form Embed by adding it to siteConfig.ghl.contactFormEmbedCode
                </div>
              </form>
            )}
          </div>
          
        </div>
      </section>
    </>
  )
}
