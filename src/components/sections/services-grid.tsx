import { Briefcase, Code2, Lightbulb, Printer } from 'lucide-react'

import { SectionWrapper } from '@/components/shared/section-wrapper'
import { SectionHeader } from '@/components/shared/section-header'
import { ServiceCard } from '@/components/shared/service-card'

const services = [
  {
    icon: Printer,
    title: 'Commercial Printing',
    description:
      'Full-service print shop for businesses. Business cards, flyers, banners, signage, and more — backed by our Gemprint subsidiary.',
    href: '/services/print',
  },
  {
    icon: Code2,
    title: 'Web & App Development',
    description:
      'Custom web applications, mobile apps, SaaS platforms, and e-commerce solutions. Modern stack, proven process.',
    href: '/services/development',
  },
  {
    icon: Lightbulb,
    title: 'Consulting',
    description:
      'Technical strategy, architecture review, and project planning. We help you make the right technology decisions.',
    href: '/contact',
  },
]

export function ServicesGrid() {
  return (
    <SectionWrapper>
      <SectionHeader
        icon={Briefcase}
        heading="What We Do"
        subtext="End-to-end services from print to production code."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            href={service.href}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
