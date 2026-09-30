'use client'

import { useState } from 'react'
import { Star, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ActionButton } from './action-button'
import { heroImage } from './data'

export function HeroSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="top" className="relative mx-auto min-h-155 max-w-360 overflow-hidden rounded-[24px] bg-[#507e93] max-md:overflow-visible sm:rounded-[28px]">
      <img src={heroImage} alt="Roofing professional working on a tile roof" className="absolute inset-0 size-full object-cover object-[62%_center] brightness-[.72]" />
      <div className="absolute inset-0 bg-linear-to-r from-[#172331]/75 via-[#172331]/25 to-transparent" />
      <div className="relative mx-auto flex min-h-155 max-w-7xl flex-col items-center justify-end px-5 pb-6 pt-28 sm:px-8 sm:pb-10 md:flex-row md:items-center md:justify-between md:px-8 md:py-16 lg:min-h-155 lg:items-end lg:px-10 lg:pb-24 lg:pt-28">
        <div className="max-w-xl text-white md:max-w-[52%] flex flex-col max-md:items-center max-md:justify-center">
          <h1 className="mt-5 text-[clamp(2.8rem,10vw,5rem)] leading-[.94] tracking-[-.065em] sm:text-7xl lg:text-8xl font-petrona max-md:text-center">
            Reliable Roofing Solutions
          </h1>
          <div className="mt-6 flex flex-col items-start gap-4 sm:mt-8 lg:flex-row lg:items-center max-md:justify-center max-md:items-center">
            <ActionButton animated className="order-2 lg:order-1">Contact Us</ActionButton>
            <div role="group" aria-label="Rated 5 out of 5 by over 2,000 users" className="order-1 inline-flex max-w-full items-center gap-3 rounded-full border border-white/20 bg-[#101a22]/75 px-3 py-2 shadow-lg backdrop-blur-sm lg:order-2">
              <div aria-hidden="true" className="flex shrink-0 items-center -space-x-2.5">
                <img src="https://roofix-phi.vercel.app/_astro/trustpilot.AGkwSabt.avif" alt="" className="size-10 rounded-full border-2 border-white object-cover" />
                <img src="https://roofix-phi.vercel.app/_astro/facebook.Dz7CUScg.avif" alt="" className="size-10 rounded-full border-2 border-white object-cover" />
                <img src="https://roofix-phi.vercel.app/_astro/googel.B8B-XQ10.avif" alt="" className="size-10 rounded-full border-2 border-white object-cover" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span aria-hidden="true" className="flex gap-0.5 text-[#ffbf00]">
                    {Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill="currentColor" strokeWidth={1.5} />)}
                  </span>
                  <span className="text-lg font-bold leading-none text-white">5.0</span>
                </div>
                <p className="mt-1 whitespace-nowrap text-xs text-white/75">2K+ User Review</p>
              </div>
            </div>
          </div>
        </div>
        <Card id="quote" className="relative z-10 mt-7 w-full gap-3 rounded-2xl border-0 bg-white py-4 text-[#293247] shadow-2xl max-md:mb-[-2rem] sm:mt-8 sm:max-w-md sm:py-5 md:mt-0 md:w-72 md:max-w-none lg:absolute lg:bottom-9 lg:right-10 lg:w-80">
          <CardHeader className="text-center"><CardTitle className="text-sm">Get Your Free Roofing <br /> Quote Today !</CardTitle></CardHeader>
          <CardContent>
            {submitted ? <div className="flex min-h-64 flex-col items-center justify-center text-center"><CheckCircle2 className="size-12 text-[#ff5b2a]" /><h3 className="mt-4 text-lg font-bold">Request received</h3><p className="mt-2 max-w-xs text-xs leading-5 text-[#687386]">Thanks — a Roofix expert will contact you shortly to discuss your project.</p><button type="button" onClick={() => setSubmitted(false)} className="mt-5 text-xs font-bold text-[#ff5b2a] underline underline-offset-4">Send another request</button></div> : <form className="flex flex-col gap-2" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
              <Input aria-label="Name" placeholder="Full name" className="h-9 border-0 bg-[#f4f6f7] text-xs" />
              <div className="grid grid-cols-2 gap-2 max-sm:grid-cols-1">
                <Input aria-label="Email" placeholder="Email address" type="email" className="h-9 border-0 bg-[#f4f6f7] text-xs" />
                <Input aria-label="Phone number" placeholder="Phone number" type="tel" className="h-9 border-0 bg-[#f4f6f7] text-xs" />
                <select aria-label="Service type" defaultValue="" className="h-9 min-w-0 rounded-md border-0 bg-[#f4f6f7] px-2 text-xs text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring/40"><option value="" disabled>Type of service</option><option>Roof repair</option><option>Roof replacement</option><option>Roof inspection</option></select>
                <Input aria-label="Zip code" placeholder="Zip code" type="text" className="h-9 border-0 bg-[#f4f6f7] text-xs" />
              </div>
              <Input aria-label="Address" placeholder="Address" type="text" className="h-9 border-0 bg-[#f4f6f7] text-xs" />
              <textarea aria-label="Message" placeholder="Tell us about your project" className="h-20 resize-none rounded-md border-0 bg-[#f4f6f7] p-2 text-xs text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring/40" />
              <Button type="submit" className="col-span-2 h-10 rounded-full bg-[#ff5b2a] text-xs font-bold text-white hover:bg-[#e94c22]">Get free quote</Button>
            </form>}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
