import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Geist, Bricolage_Grotesque } from 'next/font/google'
import { cn } from '@/lib/utils'

const body = Geist({ subsets: ['latin'], variable: '--font-body' })
const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display', weight: ['500', '600', '700', '800'] })

export const metadata: Metadata = {
  title: 'Roofix | Roofing built for the monsoon',
  description: 'Roof installation, repair and replacement in Dhaka and across Bangladesh, with clear quotes and a written guarantee.',
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = { themeColor: '#14232b' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(body.variable, display.variable)}>
      <body>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}