# CAMI VAN — Next.js 14 Codebase

Production-ready Next.js 14 (App Router) implementation of the **Modern Bloom** design direction. This is a developer handoff — open the folder, install, and run.

---

## Quick start

```bash
cd nextjs
npm install        # or pnpm install / yarn
npm run dev        # http://localhost:3000
```

Build & run production:

```bash
npm run build
npm run start
```

Type-check & lint:

```bash
npm run type-check
npm run lint
```

---

## What's in here

```
nextjs/
├── app/
│   ├── layout.tsx              # Root layout + Fraunces/Inter via next/font
│   ├── page.tsx                # Composes the 9 landing sections
│   ├── globals.css             # Tailwind directives + CSS vars + keyframes
│   └── components/
│       ├── Nav.tsx             # Pill nav + mobile drawer
│       ├── Hero.tsx            # Title + portrait + floating stat cards
│       ├── FloatingPetals.tsx  # Motion B — 16 SVG petals drifting up
│       ├── ScrollReveal.tsx    # Motion A — fade-up wrapper + stagger variants
│       ├── BrandsMarquee.tsx   # Infinite Fraunces-italic ribbon
│       ├── Services.tsx        # 6-card grid
│       ├── ServiceCard.tsx     # Motion E — 3D flip card
│       ├── Gallery.tsx         # CSS-columns masonry, 8 images
│       ├── About.tsx           # Founder section + 4 credentials
│       ├── Reviews.tsx         # 3 testimonial cards
│       ├── CTA.tsx             # Closer
│       ├── Footer.tsx
│       └── WaFloat.tsx         # Floating WhatsApp button
├── public/                     # Real client images + logo + process reel
├── tailwind.config.ts          # Brand tokens (nude/rose/brown/cream)
├── next.config.js
├── tsconfig.json
├── postcss.config.js
└── package.json
```

---

## Design tokens

Colors and shadows live in `tailwind.config.ts`. Use them via Tailwind utilities:

| Token | Hex | Tailwind class |
|---|---|---|
| Cream | `#FFF9F5` | `bg-cream` `text-cream` |
| Nude | `#F5E6E0` | `bg-nude` |
| Rose | `#E0BFB8` | `bg-rose` |
| Rose Deep | `#C99B92` | `bg-rose-deep` |
| Brown (brand) | `#8B3A3A` | `bg-brand` `text-brand` |
| Brown Deep | `#5C2424` | `bg-brand-deep` |
| Text | `#3D2828` | `text-text` |
| Muted | `#8E6F6F` | `text-muted` |

Type pairing: **Fraunces** for headings + italics, **Inter** for body. Both loaded via `next/font/google` in `app/layout.tsx` with Vietnamese subset.

---

## Motion stack

- **Framer Motion 11** for all reveals, the petal field, and the service-card flip
- All motion components honor `useReducedMotion()` — they degrade to opacity-only or static layouts
- A `prefers-reduced-motion` CSS media query in `globals.css` provides a final safety net for any plain CSS animation

---

## Image notes

`public/PMU-lip.jpg` is intentionally capitalized — Next.js on Linux is case-sensitive. If you re-export the asset, keep the casing or update the references in `Gallery.tsx` and `Services.tsx`.

For real production:
- Swap placeholder images for high-res shoots (1500px wide minimum)
- Add a real OG image at `/og-image.jpg` and update `metadataBase` + `openGraph.images` in `layout.tsx`
- Wire `WaFloat`, contact CTA, and nav button to your real WhatsApp / Zalo / Instagram URLs

---

## Tech

- Next.js **14.2** App Router
- React 18.3
- TypeScript 5.5
- Tailwind CSS 3.4
- Framer Motion 11

No other runtime dependencies.

---

## Deploy

Vercel works out of the box (`vercel deploy`). For Netlify/Cloudflare, no special config needed — this is a stock Next.js 14 project.
