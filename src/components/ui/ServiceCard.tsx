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
    <Link href={href} className="group flex flex-col block overflow-hidden bg-white rounded-3xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl mb-6">
        <img 
          src={image || "/images/service-placeholder.svg"} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
        />
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3 text-foreground transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {description}
        </p>
        <div className="mt-auto flex items-center text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
          Explore Service
          <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
