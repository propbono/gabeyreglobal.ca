import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  icon?: LucideIcon
  heading: string
  subtext?: string
  className?: string
}

export function SectionHeader({
  icon: Icon,
  heading,
  subtext,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto mb-12 max-w-2xl text-center md:mb-16",
        className,
      )}
    >
      {Icon && (
        <div className="mb-5 flex justify-center text-accent">
          <Icon size={32} />
        </div>
      )}
      <h2 className="font-['DM_Sans'] text-3xl font-bold text-foreground md:text-4xl">
        {heading}
      </h2>
      {subtext && (
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground md:text-lg">
          {subtext}
        </p>
      )}
    </div>
  )
}
