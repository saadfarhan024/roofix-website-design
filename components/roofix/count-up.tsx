'use client'

import { useEffect, useRef, useState } from 'react'

type CountUpProps = {
  to: number
  suffix?: string
  duration?: number
}

export function CountUp({ to, suffix = '', duration = 1600 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState<number | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      setValue(0)
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3) // ease-out cubic
        setValue(Math.round(to * eased))
        if (t < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, { threshold: 0.6 })

    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(frame) }
  }, [to, duration])

  return <span ref={ref}
    aria-label={`${(value ?? to).toLocaleString('en-US')}${suffix}`}
  >{(value ?? to).toLocaleString('en-US')}{suffix}</span>
}