import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageSrc?: string;
  href: string;
}

export function ProjectCard({
  title,
  category,
  description,
  imageSrc,
  href,
}: ProjectCardProps) {
  return (
    <a href={href} className="group block">
      <Card className="gap-0 overflow-hidden p-0 transition-shadow duration-200 group-hover:shadow-md">
        <div className="aspect-video overflow-hidden bg-muted">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
              No image
            </div>
          )}
        </div>
        <div className="p-5">
          <Badge variant="secondary" className="mb-2 text-xs">
            {category}
          </Badge>
          <h3 className="mb-1 font-heading text-lg font-semibold">{title}</h3>
          <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:underline">
            View Project
            <ArrowRight size={14} />
          </span>
        </div>
      </Card>
    </a>
  );
}
