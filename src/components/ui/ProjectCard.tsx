import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  type: string
  location: string
  description: string
  image?: string
}

export function ProjectCard({ title, type, location, description, image }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden bg-background">
      <div className="relative aspect-[4/5] bg-muted w-full overflow-hidden">
        <img 
          src={image || "/images/project-placeholder.svg"} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
        />
        {/* Subtle dark overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Overlay Button */}
        <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100 shadow-xl">
           <ArrowUpRight className="w-5 h-5 text-primary" />
        </div>
      </div>
      
      <div className="pt-6 pb-2">
        <div className="flex items-center gap-4 mb-3">
          <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">
            {type}
          </span>
          <span className="w-8 h-[1px] bg-border" />
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
            {location}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
          {description}
        </p>
      </div>
    </div>
  )
}
