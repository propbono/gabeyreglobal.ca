import { FolderOpen } from "lucide-react";
import { ProjectCard } from "@/components/shared/project-card";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Gemprint",
    category: "Commercial Print Website",
    description:
      "Full-stack e-commerce print platform. Custom Next.js build with product catalog, quoting system, and integrated contact workflow.",
    href: "https://gemprint.ca",
  },
  {
    title: "Greg Mozer",
    category: "Personal Brand & Portfolio",
    description:
      "Personal portfolio and brand site. Demonstrates range across web development, game dev, and creative coding.",
    href: "https://gmozer.ca",
  },
];

export function PortfolioGrid() {
  return (
    <SectionWrapper background="muted" id="work">
      <SectionHeader
        icon={FolderOpen}
        heading="Our Work"
        subtext="Selected projects from our portfolio."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            category={project.category}
            description={project.description}
            href={project.href}
          />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button variant="outline" asChild>
          <a href="/work">View All Work</a>
        </Button>
      </div>
    </SectionWrapper>
  );
}
