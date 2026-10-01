import { SiteHeader } from './roofix/site-header'
import { HeroSection } from './roofix/hero-section'
import { TrustStats, WhyChooseUs, TeamSection } from './roofix/company-sections'
import { ProjectsSection, ProcessSection, ServicesSection, JournalSection } from './roofix/service-sections'
import { ReviewsSection, LocationsSection } from './roofix/community-sections'
import { SiteFooter } from './roofix/site-footer'
import { SectionReveals } from './roofix/section-reveals'

export default function RoofixPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-ink">
      <SiteHeader />
      <SectionReveals />
      <HeroSection />
      <TrustStats />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <WhyChooseUs />
      <TeamSection />
      <ReviewsSection />
      <JournalSection />
      <LocationsSection />
      <SiteFooter />
    </main>
  )
}