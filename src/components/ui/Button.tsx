import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold uppercase tracking-[0.1em] transition-all duration-500 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground hover:bg-secondary hover:text-white": variant === "default",
            "bg-secondary text-secondary-foreground hover:bg-primary": variant === "secondary",
            "border border-border bg-transparent hover:border-primary hover:bg-primary hover:text-white": variant === "outline",
            "hover:text-secondary": variant === "ghost",
            "text-primary underline-offset-8 hover:underline hover:text-secondary": variant === "link",
            "h-12 px-8 py-3": size === "default",
            "h-10 px-6": size === "sm",
            "h-16 px-12 text-base": size === "lg",
            "h-12 w-12": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
