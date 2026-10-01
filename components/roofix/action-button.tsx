'use client'

import type { PointerEvent as ReactPointerEvent, ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ActionButtonProps = {
  children: ReactNode
  dark?: boolean
  animated?: boolean
  className?: string
}

// Light and dark are exact opposites. Orange is not part of either.
const scheme = {
  light: {
    base: 'bg-white text-ink hover:text-ink',
    hoverBg: 'hover:bg-rain',
    lockBg: 'hover:bg-white',             // used when animated (circle does the fill)
    fill: 'bg-ink',
    labelHover: 'group-hover:text-white group-focus-visible:text-white group-active:text-white',
  },
  dark: {
    base: 'bg-ink text-white hover:text-white',
    hoverBg: 'hover:bg-ink/90',
    lockBg: 'hover:bg-ink',
    fill: 'bg-white',
    labelHover: 'group-hover:text-ink group-focus-visible:text-ink group-active:text-ink',
  },
} as const

function trackPointer(event: ReactPointerEvent<HTMLButtonElement>) {
  const bounds = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`)
  event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`)
}

export function ActionButton({ children, dark = false, animated = false, className }: ActionButtonProps) {
  const s = dark ? scheme.dark : scheme.light

  return (
    <Button
      type="button"
      variant="ghost"
      className={cn(
        'group relative isolate inline-flex h-16 min-w-48 items-center justify-between gap-4 overflow-hidden rounded-full border border-signal px-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-signal/60',
        s.base,
        animated ? s.lockBg : s.hoverBg,
        className,
      )}
      onPointerDown={animated ? trackPointer : undefined}
      onPointerEnter={animated ? trackPointer : undefined}
      onPointerMove={animated ? trackPointer : undefined}
    >
      {animated ? (
        <>
          <span className={cn('absolute left-(--pointer-x,50%) top-(--pointer-y,50%) z-0 size-8 scale-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-500 ease-out group-hover:scale-[20] group-focus-visible:scale-[20] group-active:scale-[20]', s.fill)} />
          <span className={cn('relative z-10 pl-4 pr-14 transition-colors duration-300', s.labelHover)}>{children}</span>
          <span className="absolute right-2 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-signal text-white transition-transform duration-300 group-hover:rotate-45 group-focus-visible:rotate-45">
            <ArrowUpRight size={16} />
          </span>
        </>
      ) : (
        <>
          <span className="pl-4">{children}</span>
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-signal text-white transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight size={16} />
          </span>
        </>
      )}
    </Button>
  )
}