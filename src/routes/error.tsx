import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/error")({
  component: ErrorPage,
});

function ErrorPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="font-mono text-5xl font-bold tracking-tight text-destructive/30">
          Oops
        </p>
        <h1 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Something went wrong
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground">
          An unexpected error occurred. Please try refreshing the page or
          navigate back to home.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-secondary"
          >
            Refresh page
          </button>
          <Link
            to="/"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
