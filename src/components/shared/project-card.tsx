import { cn } from '@/lib/utils'

interface ProjectCardProps {
  title: string
  category: string
  description: string
  href: string
  image?: string
  className?: string
}

export function ProjectCard({
  title,
  category,
  description,
  href,
  image,
  className,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group block rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md',
        className,
      )}
    >
      <div className="aspect-video overflow-hidden rounded-t-xl bg-muted">
        {image ? (
          <img
            src={image}
            alt={title}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center text-muted-foreground text-sm">
            {title} — preview
          </div>
        )}
      </div>
      <div className="p-6">
        <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
          {category}
        </span>
        <h3 className="mt-3 font-heading text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-accent transition-colors">
          View Project →
        </span>
      </div>
    </a>
  )
}
