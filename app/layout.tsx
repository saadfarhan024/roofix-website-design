import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Geist, Bricolage_Grotesque } from 'next/font/google'
import { cn } from '@/lib/utils'
import { siteUrl } from '@/lib/site'

const body = Geist({ subsets: ['latin'], variable: '--font-body' })
const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display', weight: ['500', '600', '700', '800'] })

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: 'Roofix | Roofing built for the monsoon',
    template: '%s | Roofix',
  },
  description: 'Roof installation, repair and replacement in Dhaka and across Bangladesh. Get a clear quote, reliable local service and a written workmanship guarantee.',
  applicationName: 'Roofix',
  category: 'Home services',
  keywords: [
    'roofing Dhaka',
    'roof repair Bangladesh',
    'roof installation',
    'roof replacement',
    'storm damage roof repair',
    'roof inspection',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_BD',
    url: '/',
    siteName: 'Roofix',
    title: 'Roofix | Roofing built for the monsoon',
    description: 'Roof installation, repair and replacement in Dhaka and across Bangladesh, with clear quotes and a written guarantee.',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Roofix — roofing built for the monsoon' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofix | Roofing built for the monsoon',
    description: 'Roof installation, repair and replacement in Dhaka and across Bangladesh, with clear quotes and a written guarantee.',
    images: ['/opengraph-image.png'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = { themeColor: '#14232b' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(body.variable, display.variable)}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RoofingContractor',
              name: 'Roofix',
              url: siteUrl.toString(),
              description: 'Roof installation, repair and replacement in Dhaka and across Bangladesh, with clear quotes and a written guarantee.',
              areaServed: ['Dhaka', 'Chattogram', 'Gazipur', 'Narayanganj', 'Sylhet', 'Rajshahi', 'Khulna', 'Cumilla', 'Barisal', 'Rangpur'].map((name) => ({ '@type': 'City', name })),
            }),
          }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
