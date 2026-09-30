import { ArrowUpRight, Star } from 'lucide-react'
import { ActionButton } from './action-button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { locations, testimonials } from './data'

export function ReviewsSection() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-10">
      <div className="grid gap-8 xl:grid-cols-[.8fr_1.2fr] xl:items-end xl:gap-10">
        <div><p className="eyebrow">Testimonials</p><h2 className="section-title mt-5">What <span>clients</span><br />are saying</h2></div>
        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map(([quote, name]) => (
            <Card key={quote} className="rounded-2xl border-0 bg-[#eaf3f8] py-5 shadow-none">
              <CardContent>
              <div className="flex items-center justify-between text-[#ffb400]">
                <span className="font-bold">G</span>
                <span className="flex gap-0.5">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={11} fill="currentColor" />)}</span>
              </div>
              <p className="mt-5 text-xs leading-5 text-[#536174]">{quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="size-7 rounded-full bg-[#ff5b2a]" />
                <div><p className="text-[11px] font-bold">{name}</p><Badge variant="outline" className="mt-1 px-1.5 py-0 text-[8px] text-[#8993a0]">Verified customer</Badge></div>
              </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function LocationsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Locations</p>
          <h2 className="section-title mt-5">Our service <span>locations</span></h2>
          <p className="mt-6 max-w-sm text-sm leading-7 text-[#687386]">We provide professional roofing services across multiple locations, bringing quality and care closer to home.</p>
          <ActionButton href="#quote" dark>Get a free quote</ActionButton>
        </div>
        <div className="grid grid-cols-2 gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {locations.map((location) => (
            <a key={location} href="#top" className="flex items-center justify-between border-b border-[#e3e8ee] py-4 text-sm font-semibold">
              <span className="flex items-center gap-3"><span className="flex size-7 items-center justify-center rounded-full bg-[#fff0eb] text-[#ff5b2a]">•</span>{location}</span>
              <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
