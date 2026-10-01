'use client'

import { useEffect } from 'react'

export function SectionReveals() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return

    const sections = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (!sections.length) return

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

    document.documentElement.classList.add('motion-ready')
    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

  return null
}