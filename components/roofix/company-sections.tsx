import { ShieldCheck } from 'lucide-react'
import { ActionButton } from './action-button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { benefits, crewImage, team } from './data'

export function TrustStats() {
  return (
    <section className="mx-auto max-w-315 px-5 lg:py-space-fluid-2xl">
      <div className="grid gap-3 pt-7 sm:grid-cols-[1fr_.8fr] sm:items-end sm:pt-9">
        <div>
          <p className="eyebrow">ABOUT US</p>
        <h2 className="max-w-lg text-2xl font-extrabold leading-tight tracking-[-.055em] sm:text-4xl">Your trusted roofing company in <span className="text-[#ff5b2a]">Dhaka</span></h2>
        </div>
        <p className="max-w-md text-xs leading-5 text-[#687386] sm:justify-self-end sm:text-sm sm:leading-6">Local roofing specialists focused on durable materials, honest advice, and work that stands up to the weather.</p>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:grid-cols-4">
        <Stat value="20+" label="Years experience" />
        <Stat value="99%" label="Customer satisfaction" />
        <Stat value="3K+" label="Projects completed" />
        <Stat value="24/7" label="Emergency support" />
      </div>
      <img src={crewImage} alt="Roofix team working together" className="mt-4 h-48 w-full rounded-2xl object-cover object-center sm:mt-6 sm:h-80 xl:h-96" />
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <Card className="items-center justify-center gap-1 rounded-2xl border-0 bg-[#eaf3f8] py-6 text-center shadow-none">
      <CardContent className="px-3">
        <strong className="text-3xl tracking-[-.06em] font-petrona">{value}</strong>
        <p className="mt-1 text-[10px] uppercase tracking-wider text-[#7b8491]">{label}</p>
      </CardContent>
    </Card>
  )
}

export function WhyChooseUs() {
  return (
    <section id="why" className="mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-10 lg:py-32">
      <div className="grid gap-9 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-14">
        <div>
          <p className="eyebrow">Why choose us</p>
          <h2 className="section-title mt-5">Why we&apos;re the <span>right choice</span></h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#687386]">
            We deliver dependable roofing solutions backed by years of experience, honest communication, and a commitment to homeowners like you.
          </p>
          <div className="mt-7"><ActionButton dark>Get a free quote</ActionButton></div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {benefits.map(([number, title, copy]) => (
            <Card key={number} className="rounded-2xl border-[#e6ebf0] bg-white py-5 shadow-sm">
              <CardContent>
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-full bg-[#fff0eb] text-[#ff5b2a]"><ShieldCheck size={19} /></span>
                  <Badge variant="accent">{number}</Badge>
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#7b8491]">{copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TeamSection() {
  return (
    <section className="bg-[#293247] px-5 py-24 text-white lg:rounded-[28px] lg:px-10">
      <div className="mx-auto max-w-7xl text-center">
        <p className="eyebrow text-white/70">Our team</p>
        <h2 className="section-title mx-auto mt-5 max-w-xl text-white">Meet our <span>experts</span></h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-white/60">
          A dedicated team of skilled professionals committed to quality, reliability, and care on every project.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {team.map(([name, role, image]) => (
            <Card key={name} className="gap-0 overflow-hidden rounded-2xl border-0 bg-white py-0 text-center text-[#293247] shadow-none">
              <img src={image} alt={`${name}, ${role}`} className="aspect-[.88] w-full object-cover" />
              <CardContent className="p-3"><h3 className="text-sm font-bold">{name}</h3><p className="mt-1 text-[10px] text-[#87909d]">{role}</p></CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10"><ActionButton>View everyone</ActionButton></div>
      </div>
    </section>
  )
}
