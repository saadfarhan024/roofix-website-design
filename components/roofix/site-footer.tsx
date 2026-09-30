import { ActionButton } from './action-button'

const footerLinks = [
  ['Why Roofix', '#why'],
  ['Services', '#services'],
  ['Projects', '#projects'],
  ['Reviews', '#reviews'],
  ['Back to top', '#top'],
  ['Contact', '#top'],
] as const

export function SiteFooter() {
  return (
    <footer className="bg-[#293247] px-5 py-20 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Let&apos;s Build Your<span className="text-[#ff5b2a]"> Perfect</span> Fence</h2>
          <div>
            <p className="text-sm leading-6 text-white/60">Booking your appointment is quick and easy — choose your preferred time, and we’ll take care of the rest.</p>
            <div className="mt-5"><ActionButton animated>Contact us</ActionButton></div>
          </div>
        </div>
        <div className="mt-20 border-t border-white/15 pt-8">
          <p aria-label="Roofix" className="footer-wordmark -mx-2 overflow-hidden text-center font-sans text-7xl font-semibold leading-[.72] tracking-[-0.04em] text-white/90 sm:text-9xl lg:text-[14rem] 2xl:text-[20rem]">
            Roofix
          </p>
          <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-3 text-xs text-white/55 sm:grid-cols-3">
              {footerLinks.map(([label, href]) => <a key={label} href={href} className="transition-colors hover:text-white">{label}</a>)}
            </nav>
          </div>
          <p className="mt-12 text-xs text-white/40">© 2026 Roofix. Built with care for better homes.</p>
        </div>
      </div>
    </footer>
  )
}
