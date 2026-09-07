import Link from "next/link"
import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/Button"
import { ServiceCard } from "@/components/ui/ServiceCard"
import { ProjectCard } from "@/components/ui/ProjectCard"
import { ArrowRight, Phone, Play } from "lucide-react"
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema"

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      
      {/* SECTION 1 - HERO (Dribbble Layout) */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 bg-background">
        <div className="container max-w-[1400px] bg-foreground text-white rounded-[2.5rem] relative overflow-hidden min-h-[85vh] flex items-center p-8 lg:p-20 shadow-2xl">
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10 w-full items-center">
            
            {/* Left Content */}
            <div className="max-w-xl animate-fade-up">
              <div className="mb-6 inline-flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <span className="text-xs font-bold text-primary">Village Glazing</span>
                <span className="w-1 h-1 rounded-full bg-white"></span>
                <span className="text-xs font-medium text-white/90">{siteConfig.city}</span>
              </div>
              
              <h1 className="text-[3rem] md:text-[4.5rem] font-bold leading-[1.05] tracking-tight mb-6">
                Expert window & <br/>
                door repairs.
              </h1>
              
              <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-md">
                Save hundreds repairing the windows you have instead of replacing. Over 21 years of experience in Merseyside.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button size="lg" asChild className="w-full sm:w-auto bg-primary text-foreground hover:brightness-105">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
                <div className="flex items-center gap-3 text-sm font-medium text-white/80">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20">
                    <Play className="w-4 h-4 ml-1 text-primary" />
                  </span>
                  How we work
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex items-center gap-6 opacity-60">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center"><span className="text-[10px] text-foreground font-bold">✓</span></div>
                  <span className="text-sm">21+ Yrs Exp</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center"><span className="text-[10px] text-foreground font-bold">✓</span></div>
                  <span className="text-sm">5★ Rated</span>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="animate-fade-up delay-200">
              <div className="bg-white rounded-3xl p-8 text-foreground shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10" />
                
                <h3 className="text-2xl font-bold mb-2">Request an Inspection</h3>
                <p className="text-muted-foreground text-sm mb-6">Fill out the details below and we will get back to you shortly.</p>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">First Name</label>
                      <input type="text" className="w-full h-12 rounded-xl border border-border bg-muted/50 px-4 text-sm" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Last Name</label>
                      <input type="text" className="w-full h-12 rounded-xl border border-border bg-muted/50 px-4 text-sm" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Email Address</label>
                    <input type="email" className="w-full h-12 rounded-xl border border-border bg-muted/50 px-4 text-sm" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Service Needed</label>
                    <select className="w-full h-12 rounded-xl border border-border bg-muted/50 px-4 text-sm appearance-none">
                      <option>Double Glazing Repairs</option>
                      <option>Locks & Hinges</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <Button className="w-full h-14 bg-primary text-foreground mt-4 text-base">
                    Submit Request
                  </Button>
                </div>
              </div>
            </div>

          </div>
          
          {/* Decorative background shapes */}
          <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />
        </div>
      </section>

      {/* SECTION 2 - STATS / TRUST */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 md:divide-x md:divide-border">
            {[
              { value: "20+", label: "Years Experience" },
              { value: "500+", label: "Projects Completed" },
              { value: "100%", label: "Safety Record" },
              { value: "24/7", label: "Emergency Response" }
            ].map((stat, i) => (
              <div key={i} className={`flex flex-col ${i !== 0 ? 'md:pl-12' : ''}`}>
                <span className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</span>
                <span className="text-xs font-bold tracking-[0.1em] uppercase text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - SERVICES */}
      <section className="py-32 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-3">
                 <span className="w-8 h-[1px] bg-secondary" />
                 <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary">Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Architectural Glazing Services.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              From structural commercial glass to bespoke residential installations, we engineer transparency.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {siteConfig.services.map((service) => (
              <ServiceCard 
                key={service.id}
                title={service.name}
                description={service.shortDescription}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - THE APPROACH (Visual break) */}
      <section className="relative py-40 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img src={siteConfig.heroImage} alt="Architectural glass" className="w-full h-full object-cover object-center mix-blend-overlay opacity-30" />
        </div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
           <h2 className="text-[2.5rem] md:text-[4rem] font-bold leading-[1.1] tracking-tight mb-8">
             "Glass is not merely a material; it is the medium through which architecture breathes."
           </h2>
           <p className="text-muted-foreground uppercase tracking-[0.2em] text-xs font-bold">
             The {siteConfig.businessName !== "[BUSINESS NAME]" ? siteConfig.businessName : "GlazeCorp"} Philosophy
           </p>
        </div>
      </section>

      {/* SECTION 5 - PROJECTS */}
      <section className="py-32 bg-muted">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
             <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-3">
                 <span className="w-8 h-[1px] bg-secondary" />
                 <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary">Selected Works</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Featured Projects.
              </h2>
            </div>
            <Link href="/projects" className="group flex items-center text-xs font-bold tracking-[0.15em] uppercase text-foreground transition-colors hover:text-secondary">
              View All Projects <ArrowRight className="ml-3 h-4 w-4 transform transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {siteConfig.projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - GBP TESTIMONIALS (Conditional) */}
      {siteConfig.reviews?.googleBusinessProfileUrl && siteConfig.reviews.googleBusinessProfileUrl !== "" && (
        <section className="py-32 bg-background border-t border-border overflow-hidden">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="mb-6 inline-flex items-center gap-3">
                 <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary">Client Endorsements</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                Trusted by the Community.
              </h2>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-xl font-bold">{siteConfig.reviews.aggregateRating}</span>
                <div className="flex text-[#FBBC04]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                Based on {siteConfig.reviews.totalReviews} Google Reviews
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              {siteConfig.reviews.reviewWidgetEmbedCode && siteConfig.reviews.reviewWidgetEmbedCode.includes('<') && !siteConfig.reviews.reviewWidgetEmbedCode.includes('Paste your Google') ? (
                <div dangerouslySetInnerHTML={{ __html: siteConfig.reviews.reviewWidgetEmbedCode }} />
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  {siteConfig.testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="p-8 bg-muted rounded-xl border border-border flex flex-col justify-between">
                      <div>
                        <div className="flex text-[#FBBC04] mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-lg text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
                      </div>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                        <div>
                          <p className="font-bold text-sm text-foreground">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.service}</p>
                        </div>
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="mt-12 text-center">
                <Button variant="outline" asChild>
                  <a href={siteConfig.reviews.googleBusinessProfileUrl} target="_blank" rel="noopener noreferrer">
                    Read all reviews on Google
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 7 - FINAL CTA */}
      <section className="py-32 bg-background border-t border-border">
        <div className="container flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-10">
             <span className="w-8 h-[1px] bg-foreground"></span>
          </div>
          <h2 className="text-[3rem] md:text-[5rem] font-bold tracking-tight text-foreground leading-none mb-10">
            Let's build <br/>
            <span className="text-muted-foreground">something brilliant.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button size="lg" asChild>
              <Link href="/request-a-quote">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Our Office</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
