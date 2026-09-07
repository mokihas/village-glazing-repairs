import { siteConfig } from "@/config/siteConfig"
import { ProjectCard } from "@/components/ui/ProjectCard"

export const metadata = {
  title: "Our Projects",
  description: `View recent glass and glazing projects completed by ${siteConfig.businessName} in ${siteConfig.city} and surrounding areas.`,
}

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Our Projects
            </h1>
            <p className="text-xl text-muted-foreground">
              Take a look at some of our recent residential and commercial glazing work across the region.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
