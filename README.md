# CAMI VAN — PMU & Beauty Studio

> Phun xăm thẩm mĩ Rustic Atelier — Studio chị Cẩm Vân (Đà Nẵng)
> Next.js 14 + Warm Liquid Glass design system + 8 ngôn ngữ + dark mode adaptive

Production-ready Next.js website cho tiệm phun săm thẩm mĩ với UI đậm chất iOS 26 Liquid Glass nhưng giữ DNA brand "Rustic Atelier" (warm browns, cream, rose gold).

---

## ✨ Highlights

- **Warm Liquid Glass** design system — backdrop blur, specular highlights, edge sheen với tone ấm rustic
- **Dark mode adaptive** — auto theo `prefers-color-scheme`, persist localStorage, toggle trên Nav
- **8 ngôn ngữ** (VI, EN, RU, ZH, JA, KO, FR, ES) với placeholder name địa phương hoá
- **WCAG AA+ contrast** trong cả light & dark mode
- **Direct-to-channel booking** — form đặt lịch tự build message và mở WhatsApp/Zalo/Instagram
- **Motion-rich** — Framer Motion với 3D flip cards, scroll reveals, floating petals, marquee
- **A11y first** — `prefers-reduced-motion`, semantic HTML, focus rings, ARIA labels
- **No external UI library** — fully custom Tailwind + Framer Motion, zero shadcn/Radix lock-in

---

## 🛠 Tech Stack

| Layer | Tool | Version |
|-------|------|---------|
| Framework | Next.js (App Router) | `14.2.x` |
| UI | React | `18.3.x` |
| Language | TypeScript | `5.5.x` |
| Styling | Tailwind CSS | `3.4.x` |
| Motion | Framer Motion | `11.3.x` |
| Icons | Lucide React + custom inline SVG | `0.453.x` |
| Fonts | Fraunces (serif) + Inter (sans) via `next/font/google` | — |

Zero other runtime dependencies. Bundle size minimal.

---

## 🚀 Quick start

```bash
# Install
npm install        # hoặc pnpm install / yarn

# Dev (http://localhost:3000)
npm run dev

# Production build
npm run build
npm run start

# Type-check & lint
npm run type-check
npm run lint
```

---

## 📁 Project structure

```
nextjs/
├── app/
│   ├── layout.tsx                 # Root layout + fonts + bg-canvas + ThemeProvider FOUC script
│   ├── page.tsx                   # Home — composes 13 sections
│   ├── globals.css                # Tailwind + CSS vars + Liquid Glass primitives
│   │
│   ├── components/
│   │   ├── Nav.tsx                # Glass pill nav + theme toggle + lang switcher
│   │   ├── Hero.tsx               # Glass badge + stat chips + video
│   │   ├── BrandsMarquee.tsx      # Glass tint band marquee
│   │   ├── Services.tsx           # 6 glass tile cards (link to detail)
│   │   ├── ServiceCard.tsx        # Motion E — 3D flip glass card
│   │   ├── Gallery.tsx            # Filter pills + masonry
│   │   ├── About.tsx              # Founder + 4 glass feature tiles
│   │   ├── Reviews.tsx            # 6 reviews with avatar/initials fallback
│   │   ├── Blog.tsx               # 3 glass blog preview cards
│   │   ├── FAQ.tsx                # Glass accordion
│   │   ├── BookingForm.tsx        # Glass-strong form panel
│   │   ├── BookingFormBody.tsx    # Form fields + 3 channel buttons (WA/Zalo/IG SVG icons)
│   │   ├── BookingModal.tsx       # Glass dialog (used on detail pages)
│   │   ├── CTA.tsx                # Glass overlay panel on rich gradient
│   │   ├── Footer.tsx             # 4-col typographic identity + brand SVG socials
│   │   ├── WaFloat.tsx            # Glass orb FAB + glass channel pills
│   │   ├── FloatingPetals.tsx     # 16 SVG petals drifting up
│   │   ├── ScrollReveal.tsx       # Fade-up wrapper + stagger variants
│   │   ├── ScrollReveal.tsx       # Fade-up wrapper + stagger variants
│   │   ├── LangProvider.tsx       # 8-language context with localStorage
│   │   └── ThemeProvider.tsx      # Light/dark with localStorage + prefers-color-scheme
│   │
│   ├── blog/[slug]/
│   │   ├── page.tsx
│   │   └── BlogPostClient.tsx     # Glass article + CTA
│   │
│   ├── services/[slug]/
│   │   ├── page.tsx
│   │   └── ServiceDetailClient.tsx # Glass benefits/process/aftercare/FAQ
│   │
│   └── lib/
│       ├── i18n.ts                # 8-lang dictionary (UI strings)
│       ├── servicesContent.ts     # Service detail content (8 langs)
│       └── blogPosts.ts           # Blog posts (8 langs)
│
├── public/                        # Logo, client photos, avatars, videos
├── tailwind.config.ts             # Brand + glass tokens, dark mode 'class'
├── next.config.js
├── tsconfig.json
├── postcss.config.js
└── package.json
```

---

## 🎨 Design System: Warm Liquid Glass

Triết lý: kết hợp **liquid glass** (iOS 26 — backdrop blur, specular edges, depth tiers) với **Rustic Atelier** (warm browns, cream, rose gold) để có "warm liquid glass" — sang trọng nhưng không lạnh, không tech.

### Color tokens

| Token | Light hex | Dark hex | Tailwind |
|-------|-----------|----------|----------|
| `--cream` (bg) | `#FDF5E6` | `#1A1410` | `bg-cream` |
| `--nude` | `#F5EBDC` | `#2A1F18` | `bg-nude` |
| `--rose` | `#CD853F` | `#E5A974` | `bg-rose` `text-rose` |
| `--rose-deep` | `#A0522D` | `#C68959` | `bg-rose-deep` |
| `--brown` (brand) | `#8B4513` | `#E5A974` | `bg-brand` `text-brand` |
| `--brown-deep` (heading) | `#3E2723` | `#FAEED8` | `text-brand-deep` |
| `--text` | `#2C1810` | `#FAF1DD` | `text-text` |
| `--muted` | `#6D4C41` | `#D6C0A2` | `text-muted` |

Dark palette tune cho **WCAG AA+ contrast** (text ≥7:1 trên dark glass).

### Glass primitives

3 utility classes trong `@layer components`:

```css
.liquid-surface       /* default — blur 28px, glass-shadow-md */
.liquid-surface-soft  /* lighter — blur 16px, less prominent */
.liquid-surface-strong /* deeper — blur 40px, glass-shadow-lg */
```

Mỗi class có:
- `::before` — specular sheen (linear gradient + `mix-blend-mode: overlay`)
- `::after` — bright edge highlight ở top
- `isolation: isolate` để pseudo-elements không leak
- Children tự động `z-index: 2` để nổi trên sheen

```tsx
<div className="liquid-surface rounded-3xl p-6">
  <div className="relative z-[3]">Content here</div>
</div>
```

### CTA buttons & helpers

```css
.cta-glow      /* large CTA — gradient brand→rose-deep, depth shadow */
.cta-glow-sm   /* compact CTA */
.glow-icon     /* icon orb với inset highlight */
.glass-input   /* frosted form input + focus ring rose */
```

### Background mesh

`<div className="bg-canvas">` ở `<body>` — radial gradient mesh fixed full viewport. Đây là layer để liquid glass có gì để refract; thiếu nó glass sẽ trông "phẳng".

---

## 🌐 i18n (8 ngôn ngữ)

| Code | Ngôn ngữ | Placeholder name |
|------|---------|------------------|
| VI | Tiếng Việt | Nguyễn Thị Lan |
| EN | English | Sarah Johnson |
| RU | Русский | Anna Ivanova |
| ZH | 中文 | Li Mei |
| JA | 日本語 | Sakura Tanaka |
| KO | 한국어 | Kim Min-ji |
| FR | Français | Marie Dubois |
| ES | Español | María García |

### Architecture

- `app/lib/i18n.ts` — UI strings (nav, hero, services, booking, faq, footer)
- `app/lib/servicesContent.ts` — 6 service detail pages content
- `app/lib/blogPosts.ts` — Blog posts content
- `app/components/LangProvider.tsx` — React context, persist `localStorage['camivan-lang']`
- Initial: detect `navigator.language` → fallback EN
- Switch: dropdown trên Nav (🌐), updates `<html lang>` attribute

---

## 🌓 Dark mode

1. **FOUC-prevention inline script** (`layout.tsx`) chạy trước React hydrate:
   - Đọc `localStorage['camivan-theme']` → áp dụng nếu có
   - Không có → check `prefers-color-scheme: dark`
   - Apply `.dark` class lên `<html>` ngay → không nháy theme

2. **`ThemeProvider.tsx`** — đồng bộ React state với DOM, expose `useTheme()` hook

3. **Toggle button** ☀/☾ trên Nav → save localStorage + apply class

4. **Lần sau mở lại** → FOUC script đọc lại localStorage → giữ nguyên theme

Customize dark palette: edit `globals.css` block `.dark { ... }`.

---

## 🎯 Customization guide

### Đổi brand colors

Edit `tailwind.config.ts` + CSS vars `:root` trong `globals.css`.

### Đổi nội dung

| File | Nội dung |
|------|----------|
| `app/lib/i18n.ts` | Tất cả UI text (8 ngôn ngữ) |
| `app/lib/servicesContent.ts` | 6 trang chi tiết dịch vụ |
| `app/lib/blogPosts.ts` | Bài blog |
| `app/components/Reviews.tsx` | Array `REVIEWS` + avatar paths |
| `app/components/Footer.tsx` | Constants ở đầu file (PHONE_E164, MAPS_URL, IG_URL, FB_URL) |

### Đổi ảnh

Drop file mới vào `/public/`, update path trong components/lib tương ứng.

---

## 🏗 Architecture decisions

- **No CSS-in-JS** — pure Tailwind + CSS for performance + small bundle
- **Liquid glass in `@layer components`** — Tailwind utilities (`.fixed`, `.sticky`) override correctly
- **Theme via CSS vars** — single source of truth, no duplicate dark variants in components
- **Tailwind `.dark .text-*` overrides** — make Tailwind static colors theme-aware
- **No image-domain config** — all assets local in `/public`
- **Server components default** — `'use client'` only where needed (interactivity, hooks)
- **i18n via context** — không dùng next-intl vì project nhỏ, custom context đủ + bundle nhẹ

---

## 📦 Deploy

### Vercel (recommended)

```bash
npx vercel
# hoặc connect GitHub repo qua Vercel dashboard
```

Zero config required.

### Self-host

```bash
npm run build && npm run start  # port 3000
```

Compatible với Netlify, Cloudflare Pages, AWS Amplify, Docker.

---

## 🐛 Browser support

- **Modern evergreen** (Chrome, Edge, Firefox, Safari latest) — full liquid glass với `backdrop-filter`
- **Older browsers** — `@supports not (backdrop-filter: blur(1px))` fallback → solid surfaces
- **iOS Safari** — works (test cẩn thận với heavy blur trên iPhone đời cũ)
- **Reduced motion** — `prefers-reduced-motion: reduce` tự động disable animations

---

## 📄 Credits

- **Design & Dev:** [Danaexperts.com](https://danaexperts.com)
- **Brand:** CAMI VAN PMU & SKIN — chị Cẩm Vân, Đà Nẵng
- **Fonts:** Fraunces (Stephen Nixon, OFL) + Inter (Rasmus Andersson, OFL)
- **Design inspiration:** iOS 26 Liquid Glass + Rustic Atelier identity

---

## 🤝 Liên hệ studio

- 📍 23 An Thượng 18, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng
- ☎ [0847 892 052](tel:+84847892052)
- 📷 [Instagram @cami_van.pmu.dn](https://www.instagram.com/cami_van.pmu.dn/)
- 💬 [WhatsApp](https://wa.me/84847892052) · [Zalo](https://zalo.me/84847892052)
