import { Building2 } from "lucide-react";
import { CompanyCard } from "@/components/shared/company-card";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionWrapper } from "@/components/shared/section-wrapper";

const companies = [
  {
    id: "gemprint",
    name: "Gemprint",
    description:
      "Commercial printing for Canadian businesses. Operating since 2017.",
    href: "https://gemprint.ca",
    status: "live" as const,
  },
  {
    id: "venture-1",
    name: "Coming Soon",
    description: "A new venture in development.",
    status: "coming-soon" as const,
  },
  {
    id: "venture-2",
    name: "Coming Soon",
    description: "A new venture in development.",
    status: "coming-soon" as const,
  },
];

export function CompaniesSection() {
  return (
    <SectionWrapper background="muted">
      <SectionHeader
        icon={Building2}
        heading="Our Companies"
        subtext="Gabeyre Global Inc is the parent company of a growing family of brands."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {companies.map((company) => (
          <CompanyCard
            key={company.id}
            name={company.name}
            description={company.description}
            href={company.href}
            status={company.status}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
