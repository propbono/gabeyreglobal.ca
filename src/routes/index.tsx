import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Gabeyre Global Inc
        </p>
        <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          We build the software that runs your business
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          From enterprise print operations to custom web applications, we
          design, build, and ship products your customers trust.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a href="/contact">Start Your Project</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/about">Learn More</a>
          </Button>
        </div>
        <p className="mt-12 text-sm text-muted-foreground">
          Trusted by 50+ businesses since 2017
        </p>
      </section>

      {/* Test Button */}
      <section className="mt-12 border-t pt-12 text-center">
        <p className="text-sm text-muted-foreground">Scaffold verification:</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <Button>Test Button (Primary)</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>
    </main>
  )
}
