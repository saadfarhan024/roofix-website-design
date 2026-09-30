'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, ChevronDown, Menu, Play, ShieldCheck, Star, X } from 'lucide-react'

const heroImage = 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1800&q=90'
const projectsImage = 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=90'

const benefits = [
  ['01', 'Certified Experts', 'Our trained roofing specialists deliver precise work and dependable results.'],
  ['02', 'Lifetime Guarantee', 'We stand behind our craftsmanship with confidence for years to come.'],
  ['03', 'Transparent Pricing', 'Clear, upfront estimates with no hidden surprises or confusing costs.'],
  ['04', 'Local & Reliable', 'A trusted local crew that shows up on time and treats your home with care.'],
]

const services = ['Roof Installation', 'Roof Repair', 'Roof Replacement', 'Inspection & Maintenance']
const locations = ['Dhaka', 'Chattogram', 'Gazipur', 'Narayanganj', 'Sylhet', 'Rajshahi', 'Khulna', 'Cumilla', 'Barisal', 'Rangpur']
const team = [
  ['Jafar Khan', 'Project Manager', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=85'],
  ['Rayhan Kabir', 'Roofing Specialist', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85'],
  ['Asif Molla', 'Site Supervisor', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=85'],
  ['Robin', 'Safety Coordinator', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=85'],
]

function Button({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <button className={`group inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-xs font-semibold transition-transform hover:-translate-y-0.5 ${dark ? 'bg-[#293247] text-white' : 'bg-white text-[#293247]'}`}>{children}<span className="flex size-7 items-center justify-center rounded-full bg-[#ff5b2a] text-white"><ArrowUpRight size={14} /></span></button>
}

export default function RoofixPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfcfd] text-[#293247]">
      <header className="absolute left-0 right-0 top-0 z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 text-white lg:px-10">
        <a href="#top" className="text-xl font-bold tracking-[-0.08em]">Roof<span className="text-[#ff5b2a]">ix</span></a>
        <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-5 right-5 top-16 flex-col gap-5 rounded-2xl bg-[#293247]/95 p-6 text-sm md:static md:flex md:flex-row md:items-center md:bg-transparent md:p-0`}>
          {['Why Roofix', 'Services', 'Projects', 'Reviews'].map((item) => <a key={item} href={`#${item.toLowerCase().split(' ')[0]}`} className="transition-colors hover:text-[#ff815c]">{item}</a>)}
        </nav>
        <div className="hidden md:block"><Button>Get a free quote</Button></div>
        <button aria-label="Toggle menu" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section id="top" className="relative mx-auto min-h-[620px] max-w-[1440px] overflow-hidden rounded-b-[28px] bg-[#507e93]">
        <img src={heroImage} alt="Roofing professional working on a tile roof" className="absolute inset-0 size-full object-cover object-center brightness-[.72]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#172331]/75 via-[#172331]/25 to-transparent" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-5 pb-16 pt-32 lg:px-10 lg:pb-24">
          <div className="max-w-xl text-white"><p className="eyebrow text-white/90">Trusted roofing company in Dhaka</p><h1 className="mt-5 text-5xl leading-[.95] tracking-[-.065em] sm:text-7xl">Reliable roofing<br /><span className="font-serif italic font-normal">solutions</span></h1><p className="mt-6 max-w-sm text-sm leading-6 text-white/75">Protecting what matters most with craftsmanship, care, and roofing that lasts for generations.</p><div className="mt-8 flex flex-wrap items-center gap-4"><Button>Start your project</Button><a href="#projects" className="flex items-center gap-2 text-sm font-semibold"><span className="flex size-9 items-center justify-center rounded-full border border-white/60"><Play size={13} fill="currentColor" /></span>See our work</a></div></div>
          <div className="absolute bottom-9 right-5 hidden w-72 rounded-2xl bg-white p-5 text-[#293247] shadow-2xl lg:block"><p className="text-center text-sm font-bold">Get your free roofing<br />quote today</p><div className="mt-4 grid grid-cols-2 gap-2">{['Name', 'Phone number', 'Roof type', 'Project type'].map(x => <div key={x} className="rounded-lg border border-[#dfe6ed] px-3 py-2 text-[10px] text-slate-400">{x}</div>)}</div><button className="mt-4 w-full rounded-full bg-[#ff5b2a] py-3 text-xs font-bold text-white">Get free quote</button></div>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32"><div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div><p className="eyebrow">Why choose us</p><h2 className="section-title mt-5">Why we&apos;re the <span>right choice</span></h2><p className="mt-6 max-w-md text-sm leading-7 text-[#687386]">We deliver dependable roofing solutions backed by years of experience, honest communication, and a commitment to homeowners like you.</p><div className="mt-7"><Button dark>Get a free quote</Button></div></div><div className="grid gap-3 sm:grid-cols-2">{benefits.map(([num, title, copy]) => <div key={num} className="rounded-2xl border border-[#e6ebf0] bg-white p-5 shadow-sm"><div className="mb-5 flex items-center justify-between"><span className="flex size-10 items-center justify-center rounded-full bg-[#fff0eb] text-[#ff5b2a]"><ShieldCheck size={19} /></span><span className="text-xs font-bold text-[#ff5b2a]">{num}</span></div><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 text-xs leading-5 text-[#7b8491]">{copy}</p></div>)}</div></div></section>

      <section className="bg-[#293247] px-5 py-24 text-white lg:rounded-[28px] lg:px-10"><div className="mx-auto max-w-7xl text-center"><p className="eyebrow text-white/70">Our team</p><h2 className="section-title mx-auto mt-5 max-w-xl text-white">Meet our <span>experts</span></h2><p className="mx-auto mt-5 max-w-md text-sm leading-6 text-white/60">A dedicated team of skilled professionals committed to quality, reliability, and care on every project.</p><div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">{team.map(([name, role, image]) => <div key={name} className="overflow-hidden rounded-2xl bg-white text-center text-[#293247]"><img src={image} alt={`${name}, ${role}`} className="aspect-[.88] w-full object-cover" /><div className="p-3"><h3 className="text-sm font-bold">{name}</h3><p className="mt-1 text-[10px] text-[#87909d]">{role}</p></div></div>)}</div><div className="mt-10"><Button>View everyone</Button></div></div></section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-24 lg:px-10"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">Featured work</p><h2 className="section-title mt-5">Built to <span>protect</span></h2></div><p className="max-w-sm text-sm leading-6 text-[#687386]">From residential repairs to complete commercial upgrades, our work is made to stand up to the elements.</p></div><div className="mt-12 grid gap-4 md:grid-cols-2"><div className="group relative min-h-[430px] overflow-hidden rounded-3xl"><img src={projectsImage} alt="Roofing team completing a residential roof installation" className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" /><div className="absolute bottom-7 left-7 text-white"><p className="text-xs font-bold uppercase tracking-widest text-[#ff815c]">Residential</p><h3 className="mt-2 text-2xl font-bold">Roof installation</h3><p className="mt-2 max-w-xs text-xs text-white/70">A complete roof system designed for comfort and confidence.</p></div></div><div className="grid gap-4 sm:grid-cols-2"><ProjectCard title="Storm damage repair" image="https://images.unsplash.com/photo-1635424710928-2c3a96f34e56?auto=format&fit=crop&w=700&q=85" /><ProjectCard title="Roof replacement" image="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=700&q=85" /><ProjectCard title="Gutter & drainage" image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=85" /><ProjectCard title="Commercial upgrade" image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=85" /></div></div></section>

      <section id="services" className="bg-[#eaf3f8] px-5 py-24 lg:px-10"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="eyebrow">What we do</p><h2 className="section-title mt-5">Your roofing needs <span>fully covered</span></h2></div><div className="mx-auto mt-12 max-w-4xl divide-y divide-[#d2e0e8]">{services.map((service, index) => <div key={service} className="flex items-center gap-4 py-5"><span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#ff5b2a]">0{index + 1}</span><h3 className="flex-1 text-lg font-bold">{service}</h3><p className="hidden max-w-xs text-xs leading-5 text-[#778493] md:block">Quality materials, skilled installation, and a finish you can trust.</p><span className="flex size-9 items-center justify-center rounded-full bg-[#ff5b2a] text-white"><ArrowUpRight size={15} /></span></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="eyebrow">Testimonials</p><h2 className="section-title mt-5">What <span>clients</span><br />are saying</h2></div><div className="grid gap-4 md:grid-cols-3">{['“Roofix made the entire process feel easy and professional. The team was punctual, clean, and the result is beautiful.”', '“They gave us a fair price, explained every step, and finished ahead of schedule. Highly recommended.”', '“From the first call to the final inspection, every detail was handled with care.”'].map((quote, i) => <article key={quote} className="rounded-2xl bg-[#eaf3f8] p-5"><div className="flex items-center justify-between text-[#ffb400]"><span className="font-bold">G</span><span className="flex gap-0.5">{[1,2,3,4,5].map(x => <Star key={x} size={11} fill="currentColor" />)}</span></div><p className="mt-5 text-xs leading-5 text-[#536174]">{quote}</p><div className="mt-6 flex items-center gap-3"><div className="size-7 rounded-full bg-[#ff5b2a]" /><div><p className="text-[11px] font-bold">{['Mark R.', 'Sarah', 'Rayhan K.'][i]}</p><p className="text-[9px] text-[#8993a0]">Verified customer</p></div></div></article>)}</div></div></section>

      <section className="bg-[#293247] px-5 py-20 text-white lg:px-10"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><h2 className="text-4xl font-bold tracking-[-.05em] sm:text-5xl">Let&apos;s build your<br /><span className="text-[#ff5b2a]">perfect</span> roof</h2></div><div><p className="max-w-xs text-sm leading-6 text-white/60">Ready to protect your home? Tell us what you need and we&apos;ll take it from there.</p><div className="mt-5"><Button>Contact us</Button></div></div></div><div className="mt-20 border-t border-white/15 pt-8"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-center"><span className="text-5xl font-black tracking-[-.12em] text-white/90 sm:text-8xl">Roof<span className="text-[#ff5b2a]">ix</span></span><div className="grid grid-cols-2 gap-x-12 gap-y-3 text-xs text-white/55 sm:grid-cols-3"><a href="#why">Why Roofix</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#reviews">Reviews</a><a href="#top">Back to top</a><a href="#top">Contact</a></div></div><p className="mt-12 text-xs text-white/40">© 2026 Roofix. Built with care for better homes.</p></div></div></section>
    </main>
  )
}

function ProjectCard({ title, image }: { title: string; image: string }) { return <div className="group relative min-h-[205px] overflow-hidden rounded-2xl"><img src={image} alt={title} className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" /><h3 className="absolute bottom-5 left-5 text-sm font-bold text-white">{title}</h3></div> }

export function RoofixCheck() { return <span className="sr-only"><Check /></span> }
