'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Phone, ShieldCheck } from 'lucide-react'
import { ActionButton } from './action-button'

const faqs = [
  ['How quickly can you inspect my roof?', 'We can usually schedule an inspection within 24–48 hours. Emergency repairs are prioritized for active leaks and storm damage.'],
  ['Do you offer a workmanship warranty?', 'Yes. Every project includes a clear workmanship warranty, plus manufacturer coverage on eligible materials.'],
  ['Can you help with insurance claims?', 'Absolutely. We document the damage, explain the process, and give you the information your adjuster needs.'],
  ['What areas do you cover?', 'Our crews serve Dhaka and nearby communities, with local teams available for residential and commercial projects.'],
]

export function CompletionSections() {
  const [open, setOpen] = useState(0)
  return <>
    <section className="surface-navy px-5 py-14 sm:px-10 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div><p className="eyebrow text-white/60">Ready when you are</p><h2 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[.98] tracking-[-.06em] sm:text-6xl">A stronger roof starts with <span className="text-[#ff815c]">one conversation.</span></h2><p className="mt-5 max-w-lg text-sm leading-6 text-white/60">Tell us what you are seeing and our team will help you find the right next step — without pressure or guesswork.</p></div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row"><ActionButton>Get a free quote</ActionButton><a href="tel:+8801700000000" className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-xs font-bold text-white transition hover:bg-white/10"><Phone data-icon="inline-start" /> Call an expert</a></div>
      </div>
    </section>
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-10 lg:grid-cols-[.8fr_1.2fr] lg:py-28">
      <div><p className="eyebrow">Good to know</p><h2 className="section-title mt-5">Questions, <span>answered.</span></h2><p className="section-copy mt-6">Everything you need to feel confident before work begins.</p><div className="mt-8 flex items-center gap-3 text-xs text-[#687386]"><ShieldCheck className="text-[#ff5b2a]" /> No-obligation consultations</div></div>
      <div className="divide-y divide-[#e4e8ed] border-y border-[#e4e8ed]">{faqs.map(([question, answer], index) => <div key={question}><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-bold"><span>{question}</span><ChevronDown className={`shrink-0 transition-transform ${open === index ? 'rotate-180 text-[#ff5b2a]' : ''}`} /></button>{open === index && <p className="max-w-xl pb-5 pr-8 text-sm leading-6 text-[#687386]">{answer}</p>}</div>)}</div>
    </section>
  </>
}

export function FloatingQuote() { return <a href="#quote" className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#ff5b2a] px-4 py-3 text-xs font-bold text-white shadow-xl shadow-[#ff5b2a]/25 transition hover:-translate-y-1"><span>Get a quote</span><ArrowUpRight data-icon="inline-end" /></a> }

export function TrustMarquee() { return <div className="overflow-hidden border-y border-[#e8edf1] bg-white py-3"><div className="flex min-w-max animate-[marquee_22s_linear_infinite] gap-10 px-5 text-[10px] font-bold uppercase tracking-[.22em] text-[#8c96a1]"><span>Built for Bangladesh weather</span><span>•</span><span>20+ years of experience</span><span>•</span><span>Licensed roofing specialists</span><span>•</span><span>Built for Bangladesh weather</span><span>•</span><span>20+ years of experience</span></div></div> }

export const completionStyles = `@keyframes marquee { to { transform: translateX(-50%); } }`
