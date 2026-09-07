import Link from "next/link"
import { Button } from "@/components/ui/Button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-bold tracking-tight">Looks like this page has been replaced.</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/services">Services</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">Contact</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/request-a-quote">Request a Quote</Link>
        </Button>
      </div>
    </div>
  )
}
