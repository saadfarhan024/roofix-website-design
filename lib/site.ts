const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://roo-fix.vercel.app'
const absoluteSiteUrl = /^https?:\/\//i.test(configuredSiteUrl)
	? configuredSiteUrl
	: `https://${configuredSiteUrl}`

export const siteUrl = new URL(absoluteSiteUrl)
