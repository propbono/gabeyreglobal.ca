import { createFileRoute, Link } from "@tanstack/react-router";
import { Printer, Code2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/shared/section-wrapper";
import SectionHeader from "@/components/shared/section-header";
import ServiceCard from "@/components/shared/service-card";

export const Route = createFileRoute("/services/")({ component: ServicesPage });

const services = [
  {
    icon: Printer,
    title: "Commercial Printing",
    description: "Full-service print shop for businesses. Business cards, flyers, banners, signage, and more — backed by our Gemprint subsidiary.",
    href: "/services/print",
  },
  {
    icon: Code2,
    title: "Web & App Development",
    description: "Custom web applications, mobile apps, SaaS platforms, and e-commerce solutions. Modern stack, proven process.",
    href: "/services/development",
  },
  {
    icon: Lightbulb,
    title: "Consulting",
    description: "Technical strategy, architecture review, and project planning. We help you make the right technology decisions.",
    href: "/contact",
  },
];

const process = [
  { step: "01", label: "Discover", desc: "We learn about your business, goals, and constraints." },
  { step: "02", label: "Design", desc: "We create wireframes, prototypes, and a clear plan." },
  { step: "03", label: "Build", desc: "We develop your solution with regular updates and feedback." },
  { step: "04", label: "Ship", desc: "We deploy, test, and hand over — ready for the real world." },
];

function ServicesPage() {
  return (
    <>
      <SectionWrapper background="muted">
        <SectionHeader
          heading="What we do"
          subtext="End-to-end services from commercial print to production code."
        />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader
          heading="How we work"
          subtext="A simple process that keeps every project on track."
        />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <div key={p.step} className="text-center">
              <span className="font-mono text-2xl font-bold text-accent/30">{p.step}</span>
              <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">{p.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="primary">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">Not sure what you need?</h2>
          <p className="mt-4 text-lg text-primary-foreground/70">Tell us about your project and we'll point you in the right direction.</p>
          <Button variant="secondary" size="lg" className="mt-8" asChild>
            <Link to="/contact">Talk to Us</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
