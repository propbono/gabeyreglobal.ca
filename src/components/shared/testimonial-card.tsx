import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export function TestimonialCard({
  quote,
  name,
  role,
  company,
}: TestimonialCardProps) {
  return (
    <Card className="gap-0 p-6 text-center md:p-8">
      <div className="mb-4 text-4xl leading-none text-accent font-serif">
        {"\u201C"}
      </div>
      <blockquote className="mb-6 text-base italic leading-relaxed text-foreground/80 md:text-lg">
        {quote}
      </blockquote>
      <div className="mx-auto mb-4 h-px w-8 bg-accent/30" />
      <p className="font-semibold text-foreground">{name}</p>
      <p className="text-sm text-muted-foreground">
        {role}, {company}
      </p>
    </Card>
  );
}
