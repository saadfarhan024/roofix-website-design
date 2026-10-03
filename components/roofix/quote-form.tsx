'use client'

import { useActionState, useEffect, useState } from 'react'
import { AlertCircle, CheckCircle2, LoaderCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { submitQuote } from '@/app/actions/submit-quote'

const initialState = { status: 'idle' as const, message: '' }
const field = 'h-11 rounded-lg border-input bg-white text-sm'

export function QuoteForm({ submissionsEnabled }: { submissionsEnabled: boolean }) {
  const [state, formAction, pending] = useActionState(submitQuote, initialState)
  const [dismissedState, setDismissedState] = useState<typeof state | null>(null)

  useEffect(() => {
    if (state.status === 'idle') return

    const timeoutId = window.setTimeout(() => setDismissedState(state), 4000)
    return () => window.clearTimeout(timeoutId)
  }, [state])
  const showToast = pending || (state.status !== 'idle' && dismissedState !== state)

  return (
    <div id="quote" className="rise rounded-2xl bg-white p-5 text-ink shadow-2xl [animation-delay:.35s] sm:p-6">
      <h2 className="font-heading text-xl font-bold leading-tight">Get your free roofing quote</h2>
      <p className="mt-1 text-sm text-muted-foreground">We reply within one working day.</p>
      {!submissionsEnabled ? (
        <p className="mt-5 rounded-lg bg-muted p-4 text-sm text-muted-foreground" role="status">
          Quote requests are disabled on this showcase site.
        </p>
      ) : (
        <form action={formAction}>
          {showToast && (
            <div
              className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink shadow-xl"
              role={state.status === 'error' && !pending ? 'alert' : 'status'}
              aria-live={state.status === 'error' && !pending ? 'assertive' : 'polite'}
              aria-atomic="true"
            >
              {pending ? <LoaderCircle aria-hidden="true" className="size-4 shrink-0 animate-spin" /> : null}
              {!pending && state.status === 'success' ? <CheckCircle2 aria-hidden="true" className="size-4 shrink-0 text-emerald-600" /> : null}
              {!pending && state.status === 'error' ? <AlertCircle aria-hidden="true" className="size-4 shrink-0 text-red-600" /> : null}
              <span>{pending ? 'Saving quote…' : state.message}</span>
            </div>
          )}
          <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
            <label htmlFor="quote-website">Leave this field empty</label>
            <input id="quote-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Input aria-label="Full name" name="name" placeholder="Full name" autoComplete="name" required maxLength={120} className={`${field} sm:col-span-2`} />
            <Input aria-label="Email address" name="email" type="email" placeholder="Email address" autoComplete="email" required maxLength={254} className={`${field} sm:col-span-2`} />
            <Input aria-label="Phone (optional)" name="phone" type="tel" placeholder="Phone (optional)" autoComplete="tel" maxLength={30} className={`${field} sm:col-span-2`} />
            <select aria-label="Service" name="service" defaultValue="" required className={`${field} border px-3 text-muted-foreground sm:col-span-2`}>
              <option value="" disabled>What do you need?</option>
              <option>Roof repair</option>
              <option>Roof replacement</option>
              <option>New roof installation</option>
              <option>Inspection</option>
            </select>
            <Input aria-label="Address" name="address" placeholder="Address or area" autoComplete="street-address" maxLength={200} className={`${field} sm:col-span-2`} />
            <textarea aria-label="Message" name="message" placeholder="Tell us about the problem (optional)" maxLength={2000} className="h-24 resize-none rounded-lg border border-input bg-white p-3 text-sm sm:col-span-2" />
            <Button type="submit" disabled={pending} className="h-12 rounded-full bg-signal text-sm font-bold text-white hover:bg-signal/90 sm:col-span-2">
              {pending ? 'Sending request…' : 'Send my quote request'}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}