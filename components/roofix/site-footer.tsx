import { ActionButton } from './action-button'

const links = [['About', '#about'], ['Services', '#services'], ['Projects', '#projects'], ['Why Roofix', '#why'], ['Reviews', '#reviews'], ['Back to top', '#top']] as const

export function SiteFooter() {
  return (
    <footer data-reveal className="bg-ink px-5 py-20 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-2xl font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Fix your roof before the next storm.</h2>
          <div className="max-w-sm">
            <p className="text-base leading-7 text-white/70">Pick a time that suits you and we&apos;ll confirm within one working day.</p>
            <div className="mt-5"><ActionButton href="#quote" animated>Book a free inspection</ActionButton></div>
          </div>
        </div>
        <div className="mt-20 border-t border-white/15 pt-8">
          <p aria-hidden="true" className="footer-wordmark overflow-hidden text-center font-heading text-8xl font-bold leading-[.75] tracking-[-0.05em] text-white/90 sm:text-[12rem] lg:text-[16rem]">Roofix</p>
          <nav aria-label="Footer" className="mt-8 grid grid-cols-2 gap-x-12 gap-y-3 text-sm text-white/70 sm:grid-cols-3 md:w-fit">
            {links.map(([label, href]) => <a key={label} href={href} className="transition-colors hover:text-white">{label}</a>)}
          </nav>
          <p className="mt-10 text-sm text-white/60">© 2026 Roofix. Built with care for better homes.</p>
        </div>
      </div>
    </footer>
  )
}