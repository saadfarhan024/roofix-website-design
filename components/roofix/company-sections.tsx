import { BadgeCheck, MapPinned, ReceiptText, ShieldCheck } from 'lucide-react'
import { ActionButton } from './action-button'
import { benefits, crewImage, team } from './data'
import { CountUp } from './count-up'

const icons = [BadgeCheck, ShieldCheck, ReceiptText, MapPinned]

const stats = [
  { to: 20, suffix: '+', label: 'years on Dhaka roofs' },
  { to: 3000, suffix: '+', label: 'projects completed' },
  { to: 99, suffix: '%', label: 'customer satisfaction' },
  { text: '24/7', label: 'emergency call-outs' },
] as const
export function TrustStats() {
  return (
    <section id="about" data-reveal className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
        <div>
          <p className="eyebrow">About us</p>
          <h2 className="section-title mt-4">Dhaka&apos;s local roofing crew</h2>
        </div>
        <p className="max-w-md text-base leading-7 text-muted-foreground">We use durable materials, give honest advice, and build roofs that hold up through monsoon season and summer heat.</p>
      </div>
      <dl className="mt-10 grid grid-cols-2 border-y border-border lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="border-b border-border px-3 py-6 first:pl-0 lg:border-b-0 lg:border-r lg:py-8 lg:last:border-r-0">
            <dt className="text-sm text-muted-foreground">{stat.label}</dt>
            <dd className="mt-1 font-heading text-4xl font-bold tracking-tight tabular-nums">
              {'to' in stat ? <CountUp to={stat.to} suffix={stat.suffix} /> : stat.text}
            </dd>
          </div>
        ))}
      </dl>
      <img src={crewImage} alt="The Roofix crew on site" className="mt-8 h-64 w-full rounded-3xl object-cover sm:h-96" />
    </section>
  )
}

export function WhyChooseUs() {
  return (
    <section id="why" data-reveal className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow">Why Roofix</p>
          <h2 className="section-title mt-4">Clear quotes, careful work, a guarantee in writing</h2>
          <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">Most roofing complaints come from surprises. We remove them before the first tile is lifted.</p>
          <div className="mt-8"><ActionButton animated dark>Get a free quote</ActionButton></div>
        </div>
        <ul className="divide-y divide-border border-y border-border">
          {benefits.map(([, title, copy], i) => {
            const Icon = icons[i]
            return (
              <li key={title} className="flex gap-5 py-7">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground"><Icon size={22} /></span>
                <div><h3 className="font-heading text-xl font-bold">{title}</h3><p className="mt-1.5 max-w-md text-sm leading-6 text-muted-foreground">{copy}</p></div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export function TeamSection() {
  return (
    <section data-reveal className="mx-5 rounded-3xl bg-ink px-5 py-20 text-white lg:mx-auto lg:max-w-[112rem] lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title max-w-xl">The people on your roof</h2>
        <p className="mt-4 max-w-md text-base leading-7 text-white/70">Every project has a named manager, a site supervisor and a safety lead.</p>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {team.map(([name, role, image]) => (
            <figure key={name}>
              <img src={image} alt={`${name}, ${role}`} className="aspect-4/5 w-full rounded-2xl object-cover" />
              <figcaption className="mt-3"><p className="font-semibold">{name}</p><p className="text-sm text-white/70">{role}</p></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}