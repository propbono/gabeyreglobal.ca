import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  className?: string
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  className,
}: ServiceCardProps) {
  return (
    <a
      href={href}
      className={cn(
        'group block rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md',
        className,
      )}
    >
      <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-accent/10 text-accent">
        <Icon size={24} />
      </div>
      <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-accent transition-colors">
        Learn More →
      </span>
    </a>
  )
}
