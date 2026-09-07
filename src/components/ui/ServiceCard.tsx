import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  href: string
  image?: string
}

export function ServiceCard({ title, description, href, image }: ServiceCardProps) {
  return (
    <Link href={href} className="group flex flex-col block overflow-hidden">
      <div className="aspect-[3/4] bg-muted w-full overflow-hidden">
        <img 
          src={image || "/images/service-placeholder.svg"} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
        />
      </div>
      <div className="flex flex-col flex-1 pt-6 pb-2">
        <h3 className="text-xl font-bold mb-3 text-foreground transition-colors group-hover:text-secondary">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {description}
        </p>
        <div className="mt-auto flex items-center text-xs font-bold text-foreground tracking-[0.15em] uppercase transition-colors group-hover:text-secondary">
          <span className="relative overflow-hidden">
            Explore
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
          <ArrowRight className="ml-3 h-4 w-4 transform transition-transform duration-500 group-hover:translate-x-2" />
        </div>
      </div>
    </Link>
  )
}
