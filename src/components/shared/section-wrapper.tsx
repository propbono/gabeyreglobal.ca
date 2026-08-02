import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionBackground = "white" | "muted" | "primary"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  background?: SectionBackground
}

const backgroundStyles: Record<SectionBackground, string> = {
  white: "bg-background",
  muted: "bg-muted",
  primary: "bg-primary text-primary-foreground",
}

export function SectionWrapper({
  children,
  className,
  id,
  background = "white",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20 lg:py-24",
        backgroundStyles[background],
        className,
      )}
    >
      <div className="container mx-auto max-w-7xl px-6">{children}</div>
    </section>
  )
}
