import { ArrowUpRight, Star } from 'lucide-react'
import { ActionButton } from './action-button'
import { locations, testimonials } from './data'

export function ReviewsSection() {
  return (
    <section id="reviews" data-reveal className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
      <p className="eyebrow">Reviews</p>
      <h2 className="section-title mt-4">What customers say after the job</h2>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {testimonials.map(([quote, name]) => (
          <figure key={name} className="flex flex-col rounded-2xl bg-rain p-6">
            <div className="flex gap-0.5 text-amber-600" role="img" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <blockquote className="mt-4 flex-1 text-base leading-7">{quote}</blockquote>
            <figcaption className="mt-6 font-semibold">{name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export function LocationsSection() {
  return (
    <section data-reveal className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Where we work</p>
          <h2 className="section-title mt-4">Ten cities, one standard</h2>
          <p className="mt-5 max-w-sm text-base leading-7 text-muted-foreground">Crews based near you, so call-outs are quick and follow-up visits are easy.</p>
          <div className="mt-8"><ActionButton dark animated>Get a free quote</ActionButton></div>
        </div>
        <ul className="grid grid-cols-2 gap-x-8 xl:grid-cols-3">
          {locations.map((city) => (
            <li key={city}>
              <a href="#top" className="flex items-center justify-between border-b border-border py-4 font-semibold transition-colors hover:text-teal">
                {city}<ArrowUpRight size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}