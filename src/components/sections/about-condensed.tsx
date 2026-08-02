import { SectionHeader } from "@/components/shared/section-header";

import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";

export function AboutCondensed() {
  return (
    <SectionWrapper>
      <SectionHeader
        heading="About Gabeyre Global"
        subtext="We're a Canadian technology company that builds and operates businesses."
      />
      <div className="mx-auto max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
        <p>
          Gabeyre Global Inc was incorporated in Ontario to bring professional
          software engineering and print services under one roof. We started
          with Gemprint in 2017, serving businesses across the GTA, and have
          since expanded into web and application development.
        </p>
        <p>
          We don&apos;t just write code or run prints — we think about your
          business. Every project we take on gets the same care we&apos;d give
          our own companies, because we run our own companies, too.
        </p>
      </div>
      <div className="mt-8 text-center">
        <Button variant="outline" asChild>
          <a href="/about">Learn more about us</a>
        </Button>
      </div>
    </SectionWrapper>
  );
}
