import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/print")({
  component: ServicesPrintPage,
});

function ServicesPrintPage() {
  return (
    <div className="container mx-auto max-w-7xl px-6 py-24">
      <h1 className="text-display-md font-heading text-foreground">
        Commercial Printing
      </h1>
      <p className="mt-4 text-muted-foreground">Coming soon.</p>
    </div>
  );
}
