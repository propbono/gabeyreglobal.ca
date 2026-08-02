import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work/")({
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="container mx-auto max-w-7xl px-6 py-24">
      <h1 className="text-display-md font-heading text-foreground">Our Work</h1>
      <p className="mt-4 text-muted-foreground">Coming soon.</p>
    </div>
  );
}
