# Roofix

Roofix is a responsive marketing site for a roofing contractor serving Dhaka and nearby cities. It brings services, recent work, team credentials, customer reviews, and a quote request into one landing page.

## Stack

- Next.js 16 with the App Router, React 19, and TypeScript
- Tailwind CSS 4 with shared semantic color tokens
- Base UI for the mobile navigation dialog and Lucide icons
- `next/font` for Geist and Bricolage Grotesque

## Design Decisions

1. **Lead with the service and the next step.** The hero combines a clear roofing promise with the quote form, so visitors can act without hunting through the page.
2. **Use a compact visual system.** `signal`, `ink`, `rain`, and `teal` tokens keep buttons, surfaces, and supporting details consistent. When the zoom circle disappeared, I traced it to a fill color matching its background, then grouped base, fill, and hover colors in light/dark scheme objects so each mode keeps clear contrast.
3. **Keep motion purposeful and optional.** The hero introduces the page; sections reveal as they enter view, and the count-up gives the trust figures one small moment of emphasis. Scroll and entrance motion are disabled or simplified for reduced-motion preferences.
4. **Make interactions work beyond hover.** The expanding action button tracks a pointer on desktop, responds while pressed on touch, and also supports keyboard focus. Visible focus rings make keyboard navigation easier to follow.

## Run Locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Quality checks:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Lighthouse

| Audit | Score |
| --- | ---: |
| Performance | Not measured in this workspace |
| Accessibility | Not measured in this workspace |
| Best Practices | Not measured in this workspace |
| SEO | Not measured in this workspace |

No Lighthouse scores are claimed until the production build is audited in a browser with Lighthouse. To collect them, run `pnpm build`, start the production server with `pnpm start`, then audit `http://localhost:3000` using Lighthouse in Chrome DevTools or the Lighthouse CLI. Record the device preset and scores here so the results are reproducible.

## Next Improvements

- Connect the quote form to a validated submission endpoint and add success/error feedback.
- Serve project photography locally in responsive formats and recheck Core Web Vitals.
- Run mobile and desktop Lighthouse audits, then address the measured bottlenecks before publishing scores.
