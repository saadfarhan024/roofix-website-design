const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://roo-fix.vercel.app'

export const siteUrl = new URL(configuredSiteUrl)
