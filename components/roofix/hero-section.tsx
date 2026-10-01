import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ActionButton } from './action-button'
import { heroImage } from './data'

const field = 'h-11 rounded-lg border-input bg-white text-sm'

export function HeroSection() {
  return (
    <section id="top" className="relative mx-auto max-w-[120rem] overflow-hidden rounded-3xl bg-ink">
      <img src={heroImage} alt="Roofer fitting tiles on a pitched roof" className="absolute inset-0 size-full object-cover object-[62%_center] opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-10 pt-28 sm:px-8 lg:min-h-[44rem] lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:px-10 lg:pb-16">
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

        <form action="#top" className="rise rounded-2xl bg-white p-5 text-ink shadow-2xl [animation-delay:.35s] sm:p-6">
          <h2 className="font-heading text-xl font-bold leading-tight">Get your free roofing quote</h2>
          <p className="mt-1 text-sm text-muted-foreground">We reply within one working day.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Input aria-label="Full name" name="name" placeholder="Full name" autoComplete="name" className={`${field} sm:col-span-2`} />
            <Input aria-label="Email" name="email" type="email" placeholder="Email" autoComplete="email" className={field} />
            <Input aria-label="Phone" name="phone" type="tel" placeholder="Phone" autoComplete="tel" className={field} />
            <select aria-label="Service" name="service" defaultValue="" className={`${field} border px-3 text-muted-foreground sm:col-span-2`}>
              <option value="" disabled>What do you need?</option>
              <option>Roof repair</option>
              <option>Roof replacement</option>
              <option>New roof installation</option>
              <option>Inspection</option>
            </select>
            <Input aria-label="Address" name="address" placeholder="Address or area" autoComplete="street-address" className={`${field} sm:col-span-2`} />
            <textarea aria-label="Message" name="message" placeholder="Tell us about the problem (optional)" className="h-24 resize-none rounded-lg border border-input bg-white p-3 text-sm sm:col-span-2" />
            <Button type="submit" className="h-12 rounded-full bg-signal text-sm font-bold text-white hover:bg-signal/90 sm:col-span-2">Send my quote request</Button>
          </div>
        </form>
      </div>
    </section>
  )
}