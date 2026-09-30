import { ArrowUpRight } from 'lucide-react'
import { ActionButton } from './action-button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { guides, processImages, processSteps, projectCards, projectsImage, services } from './data'

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-10">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div><p className="eyebrow">Featured work</p><h2 className="section-title mt-5">Built to <span>protect</span></h2></div>
        <p className="max-w-sm text-sm leading-6 text-[#687386]">From residential repairs to complete commercial upgrades, our work is made to stand up to the elements.</p>
      </div>
      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        <article className="group relative min-h-80 overflow-hidden rounded-3xl sm:min-h-107.5">
          <img src={projectsImage} alt="Roofing team completing a residential roof installation" className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-7 left-7 text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-[#ff815c]">Residential</p>
            <h3 className="mt-2 text-2xl font-bold">Roof installation</h3>
            <p className="mt-2 max-w-xs text-xs text-white/70">A complete roof system designed for comfort and confidence.</p>
          </div>
        </article>
        <div className="grid gap-4 sm:grid-cols-2">
          {projectCards.map(([title, image]) => <ProjectCard key={title} title={title} image={image} />)}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, image }: { title: string; image: string }) {
  return (
    <article className="group relative min-h-51.25 overflow-hidden rounded-2xl">
      <img src={image} alt={title} className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
      <h3 className="absolute bottom-5 left-5 text-sm font-bold text-white">{title}</h3>
    </article>
  )
}

export function ProcessSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
        <div><p className="eyebrow">Our proven process</p><h2 className="section-title mt-5">A smoother roof project, <span>from start to finish</span></h2></div>
        <p className="max-w-sm text-sm leading-6 text-[#687386]">No guesswork, no surprises. Our four-step process keeps your project clear, comfortable, and on track.</p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
            <Card key={step} className="gap-0 overflow-hidden rounded-2xl border-0 bg-[#eaf3f8] py-0 shadow-none">
            <img src={processImages[index]} alt={step} className="aspect-[1.45] w-full object-cover" />
            <CardContent className="p-4">
              <Badge variant="accent">Step 0{index + 1}</Badge>
              <h3 className="mt-2 text-sm font-bold">{step}</h3>
              <p className="mt-2 text-xs leading-5 text-[#7b8491]">Simple guidance and skilled hands at every stage.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#eaf3f8] px-5 py-16 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center"><p className="eyebrow">What we do</p><h2 className="section-title mx-auto mt-5 max-w-2xl">Your roofing needs <span>fully covered</span></h2></div>
        <div className="mx-auto mt-9 grid max-w-7xl gap-4 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <article key={service} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#dce7ed] transition-shadow hover:shadow-lg">
              <div className="relative h-40 overflow-hidden sm:h-52">
                <img src={processImages[index]} alt={service} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#536174]">Roofing service 0{index + 1}</span>
              </div>
              <div className="flex items-center gap-3 p-4 sm:p-5">
                <div className="min-w-0 flex-1"><h3 className="text-base font-bold sm:text-lg">{service}</h3><p className="mt-1 text-xs leading-5 text-[#778493]">Quality materials and skilled work you can count on.</p></div>
                <a aria-label={`Learn about ${service}`} href="#top" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#ff5b2a] text-white transition-transform group-hover:rotate-45"><ArrowUpRight size={17} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function JournalSection() {
  return (
    <section className="bg-[#eaf3f8] px-5 py-16 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center"><p className="eyebrow">Roofing journal</p><h2 className="section-title mx-auto mt-5">Discover <span>roofing guides</span><br />and trends</h2></div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {guides.map(([title, image]) => (
            <Card key={title} className="gap-0 overflow-hidden rounded-2xl border-0 bg-white py-0 shadow-sm">
              <img src={image} alt="" className="aspect-[1.55] w-full object-cover" />
              <CardContent className="p-5">
                <Badge variant="accent">Tips & tricks</Badge>
                <h3 className="mt-2 text-sm font-bold leading-5">{title}</h3>
                <p className="mt-3 text-[10px] text-[#8b95a1]">March 12, 2026</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center"><ActionButton dark>View all posts</ActionButton></div>
      </div>
    </section>
  )
}
