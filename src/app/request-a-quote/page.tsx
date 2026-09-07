import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/Button"

export const metadata = {
  title: "Request a Free Quote",
  description: `Get a free, no-obligation quote from ${siteConfig.businessName} for your glass replacement or glazing project.`,
}

export default function QuotePage() {
  return (
    <>
      <section className="bg-muted py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Request a Quote
            </h1>
            <p className="text-xl text-muted-foreground">
              Provide us with some details about your project and we'll get back to you with a free, no-obligation estimate.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-3xl">
          <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
            <form className="space-y-6">
              
              <div className="space-y-4">
                <h2 className="text-xl font-bold border-b pb-2">Your Details</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
                    <input id="name" required type="text" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number *</label>
                    <input id="phone" required type="tel" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <input id="email" type="email" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" placeholder="you@example.com" />
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold border-b pb-2">Project Details</h2>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="propertyType" className="text-sm font-medium">Property Type</label>
                    <select id="propertyType" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Industrial</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">Service Required *</label>
                    <select id="service" required className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
                      <option value="">Select a service...</option>
                      {siteConfig.services.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium">Project Location (City/Postcode) *</label>
                  <input id="location" required type="text" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" placeholder="e.g. London SW1A" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">Description of Requirements</label>
                  <textarea id="description" rows={5} className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" placeholder="Please describe what you need help with, approximate sizes if known, etc."></textarea>
                </div>
                
                <div className="space-y-2">
                   <label htmlFor="photo" className="text-sm font-medium">Optional Photo Upload</label>
                   <input id="photo" type="file" accept="image/*" className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90" />
                   <p className="text-xs text-muted-foreground">Uploading a photo helps us provide a more accurate estimate.</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <input type="checkbox" id="consent" required className="rounded border-border text-primary focus:ring-primary h-4 w-4" />
                <label htmlFor="consent" className="text-sm text-muted-foreground font-medium">
                  I consent to {siteConfig.businessName} contacting me regarding this quote request.
                </label>
              </div>

              <Button type="button" size="lg" className="w-full text-base">Submit Quote Request</Button>
              
              <p className="text-xs text-muted-foreground text-center">
                We'll use your information only to respond to your enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
