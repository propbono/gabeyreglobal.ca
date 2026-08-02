import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/work')({
  component: WorkPage,
})

function WorkPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl font-bold text-foreground">
          Our Work
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A full portfolio showcase is coming soon.
        </p>
      </div>
    </main>
  )
}
