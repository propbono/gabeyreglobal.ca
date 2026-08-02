import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CompanyCardProps {
  name: string;
  description: string;
  href?: string;
  status: "live" | "coming-soon";
}

export function CompanyCard({
  name,
  description,
  href,
  status,
}: CompanyCardProps) {
  const isLive = status === "live";

  return (
    <Card
      className={`gap-0 p-6 text-center ${
        isLive
          ? "transition-all duration-200 hover:translate-y-[-2px] hover:shadow-md"
          : "cursor-default border-dashed opacity-60"
      }`}
    >
      <h3 className="mb-2 font-heading text-xl font-bold">{name}</h3>
      <div className="mb-2">
        {isLive ? (
          <Badge variant="outline" className="text-xs">
            <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-success" />
            Live
          </Badge>
        ) : (
          <Badge variant="secondary" className="text-xs">
            Coming Soon
          </Badge>
        )}
      </div>
      <p className="mb-4 text-sm text-muted-foreground">{description}</p>
      {isLive && href ? (
        <a
          href={href}
          className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
        >
          Visit
          <ArrowRight size={14} />
        </a>
      ) : null}
    </Card>
  );
}
