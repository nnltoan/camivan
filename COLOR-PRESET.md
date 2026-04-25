# 🎨 Color Preset — Rustic Atelier (Nâu Rỉ Sét)

Phiên bản này **giống hệt Modern Bloom** về cấu trúc, components, animations, layouts. **Chỉ khác duy nhất ở color preset** — đổi từ tone hồng nude sang **nâu rỉ sét** (rustic brown).

## Color tokens

| Token | Modern Bloom (cũ) | Rustic Atelier (mới) | Mô tả |
|-------|-------------------|----------------------|-------|
| `nude` | `#F5E6E0` | **`#F5EBDC`** | Paper cream — nền section nhẹ |
| `rose` | `#E0BFB8` | **`#CD853F`** | Peru — gold accent |
| `rose-deep` | `#C99B92` | **`#A0522D`** | Sienna — accent đậm |
| `brand` | `#8B3A3A` | **`#8B4513`** | Saddle brown — primary CTA, headings |
| `brand-deep` | `#5C2424` | **`#3E2723`** | Dark brown — hover state |
| `cream` | `#FFF9F5` | **`#FDF5E6`** | Warm cream — page background |
| `text` | `#3D2828` | **`#2C1810`** | Body text |
| `muted` | `#8E6F6F` | **`#6D4C41`** | Sub text |

Shadow tint cũng đổi: `rgba(140, 58, 58, …)` → `rgba(139, 69, 19, …)` (saddle brown)

## File đã update

- ✅ `tailwind.config.ts` — color tokens + shadow rgba
- ✅ `app/globals.css` — CSS variables fallback
- ✅ `app/layout.tsx` — metadata title "Rustic Atelier"
- ✅ `app/components/About.tsx` — gradient hex
- ✅ `app/components/CTA.tsx` — gradient hex
- ✅ `app/components/FloatingPetals.tsx` — petal colors array
- ✅ `app/components/Gallery.tsx` — gradient hex
- ✅ `app/components/Hero.tsx` — radial blob backgrounds
- ✅ `app/components/Reviews.tsx` — avatar gradient
- ✅ `package.json` — name `camivan-rustic-atelier`

## Giữ nguyên không đổi

- ✅ Tất cả 13 components (Nav, Hero, FloatingPetals, Services, ServiceCard, Gallery, About, Reviews, CTA, Footer, WaFloat, ScrollReveal, BrandsMarquee)
- ✅ Animations: Fade scroll (A), Floating petals (B), Card flip (E)
- ✅ Fonts: Fraunces (serif) + Inter (sans)
- ✅ Layouts, spacing, border radius
- ✅ Public assets (ảnh thật + logo + video)
- ✅ Dependencies (Next.js, Framer Motion, Tailwind)

## Visual difference

**Bloom:** Nude pink soft / Rose / Burgundy → mood feminine, romantic, dịu dàng
**Rustic:** Cream paper / Peru gold / Saddle brown → mood ấm áp, thủ công, vintage atelier

## Chạy thử

Cách 1 — Double-click file `start-dev.bat`
Cách 2 — Manual:
```powershell
cd "C:\Users\PC\OneDrive\Documents\WORKSPACE\CamVan\concept1\Cami Van Design System\nextjs"
npm install   # lần đầu
npm run dev
```

Mở browser → http://localhost:3000

## So sánh A/B

Để dễ so sánh, chị có thể chạy 2 phiên bản cùng lúc trên 2 port khác nhau:

**Terminal 1 (Modern Bloom):**
```powershell
cd "C:\Users\PC\OneDrive\Documents\WORKSPACE\CamVan\concept3\Cami Van Design System\nextjs"
npm run dev   # default port 3000
```

**Terminal 2 (Rustic Atelier):**
```powershell
cd "C:\Users\PC\OneDrive\Documents\WORKSPACE\CamVan\concept1\Cami Van Design System\nextjs"
npm run dev -- -p 3001
```

Mở 2 tab browser:
- Bloom: http://localhost:3000
- Rustic: http://localhost:3001
