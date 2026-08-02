import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="flex min-h-[calc(100vh-72px)] flex-col items-center justify-center bg-background px-4 pt-32 pb-20 text-center md:pt-40 md:pb-28">
      <p className="mb-6 text-sm font-semibold tracking-widest text-accent uppercase">
        Gabeyre Global Inc
      </p>
      <h1 className="max-w-4xl font-heading text-4xl leading-[1.1] font-bold tracking-[-0.02em] text-foreground md:text-6xl lg:text-7xl">
        We build the software that runs your business
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
        From enterprise print operations to custom web applications, we design,
        build, and ship products your customers trust.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button size="lg" variant="default" asChild>
          <a href="/contact">Start Your Project</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#work">See Our Work</a>
        </Button>
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        Trusted by 50+ businesses since 2017
      </p>
    </section>
  )
}
