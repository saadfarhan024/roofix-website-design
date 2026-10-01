const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://roofix-phi.vercel.app'

export const siteUrl = new URL(configuredSiteUrl)
