import { createFileRoute, Link } from "@tanstack/react-router";
import { Code2, Smartphone, ShoppingCart, Server, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/shared/section-wrapper";
import SectionHeader from "@/components/shared/section-header";

export const Route = createFileRoute("/services/development")({ component: DevelopmentPage });

const capabilities = [
  { icon: Code2, title: "Web Applications", desc: "Custom dashboards, SaaS platforms, and internal tools built with React, Node.js, and modern web technologies." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform mobile applications that work on iOS and Android from a single codebase." },
  { icon: ShoppingCart, title: "E-commerce", desc: "Online stores with product management, payments, inventory, and customer accounts — custom-built for your workflow." },
  { icon: Server, title: "API Development", desc: "REST and GraphQL APIs that connect your systems, automate workflows, and power your front-end experiences." },
  { icon: Wrench, title: "Legacy Modernization", desc: "Migrating older systems to modern stacks without disrupting your business operations." },
];

const steps = [
  { step: "01", label: "Discovery", desc: "We learn about your business, your users, and what success looks like." },
  { step: "02", label: "Design", desc: "Wireframes, prototypes, and architecture — aligned before a single line of code." },
  { step: "03", label: "Development", desc: "Iterative builds with regular check-ins. You see progress from week one." },
  { step: "04", label: "Launch", desc: "Deployment, testing, and go-live. We handle the infrastructure so you don't have to." },
  { step: "05", label: "Support", desc: "Post-launch monitoring, bug fixes, and continuous improvements." },
];

function DevelopmentPage() {
  return (
    <>
      <SectionWrapper background="muted">
        <SectionHeader
          heading="Custom Software, Built Right"
          subtext="Web applications, mobile apps, and backend systems — designed for your business, not a template."
        />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <c.icon className="size-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader
          heading="How we build software"
          subtext="A proven process that keeps your project on track and on budget."
        />
        <div className="mx-auto max-w-4xl">
          {steps.map((s) => (
            <div key={s.step} className="flex gap-6 border-b border-border py-6 last:border-0">
              <span className="shrink-0 font-mono text-sm font-medium text-accent">{s.step}</span>
              <div>
                <h4 className="font-heading text-lg font-semibold text-foreground">{s.label}</h4>
                <p className="mt-1 text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground">Technology we work with</h2>
          <p className="mt-2 text-muted-foreground">Modern, reliable, and widely supported. We pick the right tool for the job.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {["TypeScript", "React", "Node.js", "Python", "PostgreSQL", "Tailwind CSS", "React Native", "Next.js"].map((tech) => (
              <span key={tech} className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground/70">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="primary">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">Tell us about your project</h2>
          <p className="mt-4 text-lg text-primary-foreground/70">No obligation — just a conversation about what you need.</p>
          <Button variant="secondary" size="lg" className="mt-8" asChild>
            <Link to="/contact">Start the Conversation</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
