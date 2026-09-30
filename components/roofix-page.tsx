import { SiteHeader } from './roofix/site-header'
import { HeroSection } from './roofix/hero-section'
import { TrustStats, WhyChooseUs, TeamSection } from './roofix/company-sections'
import { ProjectsSection, ProcessSection, ServicesSection, JournalSection } from './roofix/service-sections'
import { ReviewsSection, LocationsSection } from './roofix/community-sections'
import { SiteFooter } from './roofix/site-footer'

export default function RoofixPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfcfd] text-[#293247]">
      <SiteHeader />
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
