'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Dialog } from '@base-ui/react/dialog'
import { cn } from '@/lib/utils'

const nav = [['About', 'about'], ['Services', 'services'], ['Projects', 'projects'], ['Why Roofix', 'why'], ['Reviews', 'reviews']] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const els = nav.map(([, id]) => document.getElementById(id)).filter((el): el is HTMLElement => !!el)
    const io = new IntersectionObserver((entries) => {
      const hit = entries.find((e) => e.isIntersecting)
      if (hit) setActive(hit.target.id)
    }, { rootMargin: '-20% 0px -65% 0px' })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const quote = 'inline-flex h-10 items-center rounded-full bg-signal px-5 text-sm font-semibold text-white transition-colors hover:bg-signal/90'

  return (
    <header className="absolute inset-x-0 top-0 z-20 px-5 py-4 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full bg-white/90 px-4 py-2 shadow-sm backdrop-blur md:px-6">
        <a href="#top" className="font-heading text-2xl font-bold tracking-tight">Roofix</a>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map(([label, id]) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}
              className={cn('rounded-full px-3 py-1.5 text-sm transition-colors hover:text-ink', active === id ? 'bg-rain font-semibold text-ink' : 'text-muted-foreground')}>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#top" className={quote}>Get a free quote</a>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger aria-label="Open menu" className="inline-flex size-10 items-center justify-center rounded-full hover:bg-rain md:hidden">
              <Menu />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Backdrop className="fixed inset-0 z-40 bg-ink/50 transition-opacity data-ending-style:opacity-0 data-starting-style:opacity-0" />
              <Dialog.Popup className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white p-6 shadow-2xl transition-transform duration-300 data-ending-style:translate-x-full data-starting-style:translate-x-full">
                <Dialog.Title className="sr-only">Menu</Dialog.Title>
                <Dialog.Close aria-label="Close menu" className="inline-flex size-11 items-center justify-center self-end rounded-full hover:bg-rain"><X /></Dialog.Close>
                <nav aria-label="Mobile" className="mt-8 flex flex-col gap-2">
                  {nav.map(([label, id]) => (
                    <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 font-heading text-2xl font-semibold hover:bg-rain">{label}</a>
                  ))}
                </nav>
              </Dialog.Popup>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  )
}