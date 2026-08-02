import { ArrowRight, type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <a href={href} className="group block">
      <Card className="p-6 gap-0 transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-md">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 p-3 text-accent">
          <Icon size={24} />
        </div>
        <h3 className="mb-2 font-heading text-lg font-semibold">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:underline">
          Learn More
          <ArrowRight size={14} />
        </span>
      </Card>
    </a>
  );
}
