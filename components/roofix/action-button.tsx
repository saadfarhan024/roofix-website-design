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
  href?: string
}

function trackPointer(event: ReactPointerEvent<HTMLButtonElement>) {
  const bounds = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`)
  event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`)
}

export function ActionButton({ children, dark = false, animated = false, className, href }: ActionButtonProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      onClick={href ? () => { window.location.hash = href.replace('#', '') } : undefined}
      className={cn(
        'group relative isolate inline-flex h-16 min-w-48 items-center justify-between gap-4 overflow-hidden rounded-full border border-[#ff5b2a] px-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#ff5b2a]/60',
        dark ? 'bg-[#293247] text-white hover:bg-[#1f283a] hover:text-white' : 'bg-white text-[#293247] hover:bg-[#f2f5f8] hover:text-[#293247]',
        animated && 'relative overflow-hidden hover:bg-white hover:text-[#293247]',
        className,
      )}
      onPointerEnter={animated ? trackPointer : undefined}
      onPointerMove={animated ? trackPointer : undefined}
    >
      {animated ? (
        <>
          <span className="absolute left-[var(--pointer-x,50%)] top-[var(--pointer-y,50%)] z-0 size-8 scale-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#293247] transition-transform duration-500 ease-out group-hover:scale-[20] group-focus-visible:scale-[20]" />
          <span className="relative z-10 pl-4 pr-14 transition-colors group-hover:text-white group-focus-visible:text-white">{children}</span>
          <span className="absolute right-2 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff5b2a] text-white transition-transform duration-300 group-hover:rotate-45 group-focus-visible:rotate-45">
            <ArrowUpRight size={16} />
          </span>
        </>
      ) : (
        <>
          <span className="pl-4">{children}</span>
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#ff5b2a] text-white transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight size={16} />
          </span>
        </>
      )}
    </Button>
  )
}
