import { cn } from '@/lib/utils'

interface CompanyCardProps {
  name: string
  description: string
  href?: string
  status: 'live' | 'coming-soon'
  className?: string
}

export function CompanyCard({
  name,
  description,
  href,
  status,
  className,
}: CompanyCardProps) {
  const isLive = status === 'live'

  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-all duration-200',
        isLive && 'hover:-translate-y-1 hover:shadow-md',
        className,
      )}
    >
      <div className="mb-4 flex items-center gap-3">
        <div
          className={cn(
            'flex size-12 items-center justify-center rounded-full text-sm font-bold font-heading',
            isLive
              ? 'bg-accent/10 text-accent'
              : 'bg-muted text-muted-foreground',
          )}
        >
          {isLive ? name.charAt(0) : '?'}
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground">
            {name}
          </h3>
          <span
            className={cn(
              'text-xs font-medium',
              isLive ? 'text-accent' : 'text-muted-foreground',
            )}
          >
            {isLive ? 'Live' : 'Coming Soon'}
          </span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      {isLive && href ? (
        <a
          href={href}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors"
        >
          Visit {name} →
        </a>
      ) : (
        <span className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground">
          Stay tuned
        </span>
      )}
    </div>
  )
}
