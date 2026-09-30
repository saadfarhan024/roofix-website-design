'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Dialog } from '@base-ui/react/dialog'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { navItems } from './data'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<(typeof navItems)[number]>('Why Roofix')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase().split(' ')[0]))
      .filter((section): section is HTMLElement => section !== null)
    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target.id
      const activeItem = navItems.find((item) => item.toLowerCase().split(' ')[0] === visibleSection)
      if (activeItem) setActiveSection(activeItem)
    }, { rootMargin: '-20% 0px -65% 0px' })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="relative z-20 px-5 py-3 text-[#293247] lg:px-8">
      <div className="relative mx-auto flex max-w-[1920px] items-center justify-between gap-4">
        <div className="flex h-16 w-full items-center justify-between rounded-full bg-[#E7EEF5] px-4 md:h-auto md:w-auto md:shrink-0 md:justify-start md:rounded-none md:bg-transparent md:px-0">
          <div className="flex items-center gap-3">
            <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
              <Dialog.Trigger
                aria-label="Open navigation menu"
                className="inline-flex size-10 items-center justify-center rounded-full text-[#293247] transition-colors hover:bg-white/70 md:hidden"
              >
                <Menu />
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Backdrop className="fixed inset-0 z-40 bg-[#142235]/55 backdrop-blur-sm transition-opacity duration-300 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
                <Dialog.Popup className="fixed inset-0 z-50 flex h-dvh w-full flex-col overflow-y-auto bg-white px-6 pb-8 pt-6 text-[#292f42] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] data-[ending-style]:translate-x-full data-[starting-style]:translate-x-full md:hidden">
                  <div className="flex justify-start">
                    <Dialog.Close
                      aria-label="Close navigation menu"
                      className="inline-flex size-12 items-center justify-center rounded-full text-[#292f42] transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#292f42]"
                    >
                      <X className="size-6" />
                    </Dialog.Close>
                    <Dialog.Title className="sr-only">Roofix navigation</Dialog.Title>
                  </div>
                  <nav aria-label="Main navigation" className="flex flex-1 flex-col items-center justify-center gap-8 py-12 text-center">
                    {navItems.map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase().split(' ')[0]}`}
                        aria-current={activeSection === item ? 'location' : undefined}
                        onClick={() => { setActiveSection(item); setMenuOpen(false) }}
                        className={cn(
                          'text-2xl font-semibold tracking-tight text-[#292f42] transition-opacity hover:opacity-60',
                          activeSection === item && 'underline decoration-2 underline-offset-8',
                        )}
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </Dialog.Popup>
              </Dialog.Portal>
            </Dialog.Root>
            <a href="#top" className="font-petrona text-2xl font-semibold tracking-[-0.04em]">Roofix</a>
          </div>
          <Button
            type="button"
            variant="ghost"
            className="h-auto rounded-full bg-[#ff5b2a] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#e94c22] hover:text-white md:hidden"
          >
            Get a Quote
          </Button>
        </div>
        <nav aria-label="Main navigation" className="hidden flex-col gap-2 rounded-2xl bg-[#293247] p-4 text-sm text-white shadow-xl md:static md:flex md:flex-none md:flex-row md:items-center md:justify-center md:gap-1 md:rounded-full md:bg-[#E7EEF5] md:px-6 md:py-3 md:shadow-none">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().split(' ')[0]}`}
              aria-current={activeSection === item ? 'location' : undefined}
              onClick={() => setActiveSection(item)}
              className={cn(
                'rounded-full px-2.5 py-1 transition-colors',
                activeSection === item
                  ? 'bg-white text-[#293247] shadow-sm md:hover:text-[#293247]'
                  : 'text-white md:text-[#536174]',
              )}
            >
              {item}
            </a>
          ))}
        </nav>
        <Button
          type="button"
          variant="ghost"
          className="group relative hidden h-auto shrink-0 overflow-hidden rounded-full bg-[#292f42] border-[#292f42] border px-5 py-3 text-xs font-semibold text-white transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 md:inline-flex md:items-center"
        >
          <span className="absolute right-2 top-1/2 z-0 size-7 -translate-y-1/2 rounded-full bg-white transition-transform duration-500 ease-out group-hover:scale-[6] group-focus-visible:scale-[6]" />
          <span className="relative z-10 pr-8 transition-colors group-hover:text-[#292f42] group-focus-visible:text-[#292f42]">Get a Free Quote</span>
          <span className="absolute right-2 top-1/2 z-10 flex size-7 -translate-y-1/2 items-center justify-center rounded-full bg-[#FF6525] text-white transition-transform duration-300 group-hover:rotate-45 group-focus-visible:rotate-45">
            <ArrowUpRight size={14} />
          </span>
        </Button>
      </div>
    </header>
  )
}
