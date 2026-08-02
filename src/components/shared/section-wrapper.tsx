import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  background?: "default" | "muted" | "primary";
  id?: string;
  className?: string;
}

const bgVariants: Record<string, string> = {
  default: "bg-background",
  muted: "bg-muted",
  primary: "bg-primary text-primary-foreground",
};

export function SectionWrapper({
  children,
  background = "default",
  id,
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20 lg:py-24",
        bgVariants[background],
        className,
      )}
    >
      <div className="container mx-auto px-6">{children}</div>
    </section>
  );
}
