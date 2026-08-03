import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";

export const Route = createFileRoute("/about")({ component: About });

const timeline = [
  {
    year: "2017",
    title: "Founded in Ontario",
    body: "Gabeyre Global Inc was incorporated to bring professional print services to businesses across the Greater Toronto Area. What started as a small print operation quickly grew into a trusted partner for companies throughout Canada.",
  },
  {
    year: "2020",
    title: "Expanded into Software",
    body: "As clients asked for more — websites, automation, custom tools — we expanded into software development. We brought the same precision and reliability that defined our print business to building web applications.",
  },
  {
    year: "2026",
    title: "Growing the Portfolio",
    body: "Today Gabeyre Global operates multiple businesses under one umbrella. We build and operate the software and services our clients depend on to run theirs — from commercial printing to custom applications.",
  },
];

const values = [
  {
    icon: Shield,
    label: "Quality over shortcuts",
    description: "We ship work we stand behind. Every project — print or code — goes through the same rigorous standards.",
  },
  {
    icon: Globe,
    label: "Communication over assumptions",
    description: "We treat client relationships as partnerships. Clear communication, realistic timelines, and honest answers.",
  },
  {
    icon: Building2,
    label: "Results over promises",
    description: "We run our own companies too. We understand what it means to bet on a service provider — and we deliver accordingly.",
  },
];

function About() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper background="muted">
        <SectionHeader
          heading="About Gabeyre Global"
          subtext="We're a Canadian technology company that builds and operates businesses. Incorporated in Ontario, we bring professional software engineering and commercial print services under one roof."
        />
      </SectionWrapper>

      {/* Story timeline */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl space-y-16">
          {timeline.map((item, i) => (
            <div key={item.year} className="relative pl-10 before:absolute before:left-[11px] before:top-1.5 before:h-3 before:w-3 before:rounded-full before:bg-accent">
              {i < timeline.length - 1 && (
                <span className="absolute left-[16px] top-5 h-full w-px bg-border" />
              )}
              <span className="text-sm font-semibold tracking-widest text-accent uppercase">
                {item.year}
              </span>
              <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* A note from the team */}
      <SectionWrapper background="muted">
        <div className="mx-auto max-w-3xl">
          <blockquote className="border-l-4 border-accent/30 pl-6 text-lg leading-relaxed text-foreground/80 italic">
            We don&apos;t just write code or run prints — we think about your business. Every project we take on gets the same care we&apos;d give our own companies, because we run our own companies too.
          </blockquote>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper>
        <SectionHeader
          heading="How we work"
          subtext="Three principles that guide every engagement."
        />
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.label} className="text-center">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <v.icon className="size-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {v.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper background="primary">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
            Work with us
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/70">
            Tell us about your project. We&apos;ll get back to you within 24 hours.
          </p>
          <Button variant="secondary" size="lg" className="mt-8" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
