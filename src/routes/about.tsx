import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({ component: About })

function About() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm sm:p-8">
        <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          About Gabeyre Global Inc
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
          Gabeyre Global Inc is a Canadian corporation operating businesses in
          print, software, and consulting. Founded in 2017 and based in Ontario,
          Canada, we bring professional software engineering and print services
          under one roof.
        </p>
      </section>
    </main>
  )
}
