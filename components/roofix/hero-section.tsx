import { ActionButton } from './action-button'
import { QuoteForm } from './quote-form'
import { heroImage } from './data'

export function HeroSection() {
  return (
    <section id="top" className="relative mx-auto max-w-[120rem] overflow-hidden rounded-3xl bg-ink">
      <img src={heroImage} alt="Roofer fitting tiles on a pitched roof" className="absolute inset-0 size-full object-cover object-[62%_center] opacity-70" />
      <div className="absolute inset-0 bg-linear-to-r from-ink/90 via-ink/50 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-10 pt-28 sm:px-8 lg:min-h-176 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:px-10 lg:pb-16">
        <div className="text-white">
          <p className="rise mb-5 text-sm font-medium text-white/80">Roofing across Dhaka and Bangladesh</p>
          <h1 className="rise font-heading text-5xl font-bold leading-[.98] tracking-[-.04em] [animation-delay:.1s] sm:text-6xl lg:text-7xl xl:text-8xl">
            A roof that outlasts the monsoon.
          </h1>
          <p className="rise mt-6 max-w-lg text-base leading-7 text-white/80 [animation-delay:.2s]">
            Installation, repair and replacement by a local crew. You get a written quote, a fixed schedule and a guarantee in writing.
          </p>
          <div className="rise mt-8 flex flex-wrap items-center gap-4 [animation-delay:.3s]">
            <ActionButton animated>Book a free inspection</ActionButton>
            <p className="text-sm text-white/80"><strong className="text-white">5.0</strong> from 2,000+ reviews</p>
          </div>
        </div>

        <QuoteForm submissionsEnabled={process.env.NODE_ENV !== 'production'} />
      </div>
    </section>
  )
}