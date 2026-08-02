import { Building2 } from 'lucide-react'

import { SectionWrapper } from '@/components/shared/section-wrapper'
import { SectionHeader } from '@/components/shared/section-header'
import { CompanyCard } from '@/components/shared/company-card'

const companies = [
  {
    name: 'Gemprint',
    description:
      'Commercial printing for Canadian businesses. Operating since 2017.',
    href: 'https://gemprint.ca',
    status: 'live' as const,
  },
  {
    name: 'Coming Soon',
    description: 'A new venture in development.',
    status: 'coming-soon' as const,
  },
  {
    name: 'Coming Soon',
    description: 'A new venture in development.',
    status: 'coming-soon' as const,
  },
]

export function CompaniesSection() {
  return (
    <SectionWrapper background="muted">
      <SectionHeader
        icon={Building2}
        heading="Our Companies"
        subtext="Gabeyre Global Inc is the parent company of a growing family of brands."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {companies.map((company, i) => (
          <CompanyCard
            key={`${company.name}-${i}`}
            name={company.name}
            description={company.description}
            href={company.href}
            status={company.status}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
