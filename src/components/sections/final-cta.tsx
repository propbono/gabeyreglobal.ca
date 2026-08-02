import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <SectionWrapper background="primary">
      <div className="text-center text-primary-foreground">
        <h2 className="font-heading text-3xl font-bold md:text-4xl">
          Ready to start your project?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/70">
          Tell us what you need. We&apos;ll get back to you within 24 hours.
        </p>
        <div className="mt-8">
          <Button size="lg" variant="secondary" asChild>
            <a href="/contact">Start Your Project</a>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
