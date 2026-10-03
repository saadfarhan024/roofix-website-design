'use server'

import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'

const optionalText = (maxLength: number) => z.preprocess(
  (value) => typeof value === 'string' && value.trim() === '' ? undefined : value,
  z.string().trim().max(maxLength).optional(),
)

const quoteSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.preprocess(
    (value) => typeof value === 'string' ? value.trim() : value,
    z.email().max(254),
  ),
  phone: z.preprocess(
    (value) => typeof value === 'string' && value.trim() === '' ? undefined : value,
    z.string().trim().min(7).max(30).regex(/^[+\d][\d\s().-]*$/).optional(),
  ),
  service: z.enum(['Roof repair', 'Roof replacement', 'New roof installation', 'Inspection']),
  address: optionalText(200),
  message: optionalText(2000),
})

type QuoteFormState = { status: 'idle' | 'success' | 'error'; message: string }

function getFormValue(formData: FormData, name: string) {
  const value = formData.get(name)
  return typeof value === 'string' ? value : ''
}

export async function submitQuote(_previousState: QuoteFormState, formData: FormData): Promise<QuoteFormState> {
  if (process.env.NODE_ENV === 'production') {
    return { status: 'error', message: 'Quote submissions are disabled on this showcase site.' }
  }

  if (getFormValue(formData, 'website')) {
    return { status: 'success', message: 'Quote saved. We will be in touch soon.' }
  }

  const quote = quoteSchema.safeParse({
    name: getFormValue(formData, 'name'),
    email: getFormValue(formData, 'email'),
    phone: getFormValue(formData, 'phone'),
    service: getFormValue(formData, 'service'),
    address: getFormValue(formData, 'address'),
    message: getFormValue(formData, 'message'),
  })

  if (!quote.success) {
    return { status: 'error', message: 'Check the details and try again. Name, a valid email, and service are required.' }
  }

  const supabaseUrl = process.env.SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!supabaseUrl || !serviceRoleKey) {
    console.error('Quote request storage is not configured.')
    return { status: 'error', message: 'Quote requests are temporarily unavailable. Please try again later.' }
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })

  try {
    const { error } = await supabase.from('quote_requests').insert({
      name: quote.data.name,
      email: quote.data.email ?? null,
      phone: quote.data.phone,
      service: quote.data.service,
      address: quote.data.address ?? null,
      message: quote.data.message ?? null,
    })

    if (error) {
      console.error('Unable to save quote request:', error.message)
      return { status: 'error', message: 'We could not save your request. Please try again.' }
    }
  } catch (error) {
    console.error('Unable to save quote request:', error)
    return { status: 'error', message: 'We could not save your request. Please try again.' }
  }

  const recipient = process.env.LOCAL_QUOTE_NOTIFY_EMAIL
  const apiKey = process.env.RESEND_API_KEY
  const sender = process.env.RESEND_FROM_EMAIL

  if (process.env.NODE_ENV === 'development' && recipient && apiKey && sender) {
    try {
      const resend = new Resend(apiKey)
      const { error } = await resend.emails.send({
        from: sender,
        to: recipient,
        subject: `Local quote request: ${quote.data.service}`,
        text: [
          `Name: ${quote.data.name}`,
          `Email: ${quote.data.email}`,
          `Phone: ${quote.data.phone ?? 'Not provided'}`,
          `Service: ${quote.data.service}`,
          `Address: ${quote.data.address ?? 'Not provided'}`,
          `Message: ${quote.data.message ?? 'Not provided'}`,
        ].join('\n'),
      })
      if (error) console.error('Quote notification email failed:', error.message)
    } catch (error) {
      console.error('Quote notification email failed:', error)
    }
  }

  return { status: 'success', message: 'Quote saved. We will be in touch soon.' }
}