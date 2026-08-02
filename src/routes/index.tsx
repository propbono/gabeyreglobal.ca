import { createFileRoute } from '@tanstack/react-router'

import { HeroSection } from '@/components/sections/hero'
import { SocialProofBar } from '@/components/sections/social-proof-bar'
import { ServicesGrid } from '@/components/sections/services-grid'
import { PortfolioGrid } from '@/components/sections/portfolio-grid'
import { CompaniesSection } from '@/components/sections/companies-section'
import { AboutCondensed } from '@/components/sections/about-condensed'
import { FinalCTA } from '@/components/sections/final-cta'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <ServicesGrid />
      <PortfolioGrid />
      <CompaniesSection />
      <AboutCondensed />
      <FinalCTA />
    </>
  )
}
