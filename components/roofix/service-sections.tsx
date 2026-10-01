import { ArrowUpRight } from 'lucide-react'
import { ActionButton } from './action-button'
import { guides, processImages, processSteps, projectCards, projectsImage, services } from './data'

const wrap = 'mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28'

export function ServicesSection() {
  return (
    <section id="services" data-reveal className="bg-rain px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">Services</p>
        <h2 className="section-title mt-4">Everything from a leak to a whole new roof</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => (
            <a key={service} href="#top" className="group overflow-hidden rounded-2xl bg-white ring-1 ring-border transition-shadow hover:shadow-lg">
              <img src={projectCards[i][1]} alt="" className="h-48 w-full object-cover" />
              <div className="flex items-center justify-between gap-3 p-5">
                <div><h3 className="font-heading text-lg font-bold">{service}</h3><p className="mt-1 text-sm text-muted-foreground">Request a quote</p></div>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-signal text-white transition-transform group-hover:rotate-45"><ArrowUpRight size={17} /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProcessSection() {
  return (
    <section data-reveal className={wrap}>
      <p className="eyebrow">How it works</p>
      <h2 className="section-title mt-4">Four steps, no surprises</h2>
      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <li key={step}>
            <img src={processImages[i]} alt="" className="aspect-4/3 w-full rounded-2xl object-cover" />
            <p className="mt-4 font-heading text-3xl font-bold text-signal">{i + 1}</p>
            <h3 className="font-heading text-lg font-bold">{step}</h3>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">Skilled hands and clear updates at every stage.</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" data-reveal className={wrap}>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div><p className="eyebrow">Projects</p><h2 className="section-title mt-4">Recent work across the city</h2></div>
        <p className="max-w-sm text-base leading-7 text-muted-foreground">Residential repairs to full commercial upgrades, made to stand up to the weather.</p>
      </div>
      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        <article className="relative min-h-96 overflow-hidden rounded-3xl">
          <img src={projectsImage} alt="Crew installing a residential roof" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="text-sm font-medium text-white/80">Residential</p>
            <h3 className="font-heading text-3xl font-bold">Full roof installation</h3>
          </div>
        </article>
        <div className="grid gap-4 sm:grid-cols-2">
          {projectCards.map(([title, image]) => (
            <article key={title} className="relative min-h-52 overflow-hidden rounded-2xl">
              <img src={image} alt="" className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-transparent" />
              <h3 className="absolute bottom-4 left-4 font-heading text-lg font-bold text-white">{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function JournalSection() {
  return (
    <section data-reveal className={wrap}>
      <p className="eyebrow">Guides</p>
      <h2 className="section-title mt-4">Roofing advice for Dhaka homeowners</h2>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {guides.map(([title, image]) => (
          <article key={title}>
            <img src={image} alt="" className="aspect-3/2 w-full rounded-2xl object-cover" />
            <h3 className="mt-4 font-heading text-xl font-bold leading-snug">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">March 12, 2026</p>
          </article>
        ))}
      </div>
      <div className="mt-10"><ActionButton dark animated>View all guides</ActionButton></div>
    </section>
  )
}