# Velocity Wear — Premium Custom Apparel Landing

A futuristic, conversion-focused one-page site for **Velocity Wear**, a custom apparel
printing company. Dark/glassmorphism aesthetic with electric-blue glow, 3D hero,
parallax, scroll-driven animations and animated counters.

> _Create It. Wear It. Own It._ — MOQ 20 pieces.

## Stack

- **Next.js 14** (App Router, JS)
- **Tailwind CSS 3** — custom dark + electric-blue design tokens
- **Framer Motion** — reveals, parallax, carousel, micro-interactions
- **GSAP + ScrollTrigger** — process-timeline progress line
- **Three.js + React Three Fiber + drei** — floating 3D hero scene
- **lucide-react** + custom SVG garment renders for icons/product imagery
- Fonts: **Anton** (display) + **Epilogue** (body) + **Space Grotesk** (mono)

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # production
```

## Sections

Hero (3D + parallax) · Brand marquee · 12 Services · Why Choose Us (counters) ·
Interactive Product Showcase · 5-step Process timeline · Trust stats ·
Masonry Gallery w/ lightbox · Testimonials carousel · Conversion CTA ·
Glass Contact form (validated) · Footer · Floating WhatsApp.

## Design / brand notes

- Brand name, tagline, services, product list and Instagram were taken from
  the live site (velocity-wear.com).
- The original raster logo (reads "City Wear", low-res) was replaced with a
  bespoke **SVG "Velocity Wear" wordmark** in `components/Logo.jsx` that keeps the
  original electric-blue motion-streak / speed identity. Swap it freely.
- Product & gallery imagery are **custom vector garment renders**
  (`components/GarmentMockup.jsx`) — fully on-brand, crisp at any size, no stock
  photos. Replace with photography by dropping images into `/public` if desired.
- The contact form is front-end only (simulated success). Wire `onSubmit` in
  `components/Contact.jsx` to your email/CRM/WhatsApp API.
- Phone / WhatsApp number in `lib/site.js` are placeholders — update before launch.

## Customizing

- Content lives in **`lib/site.js`** (services, products, process, stats,
  testimonials, gallery, contact details).
- Colors / effects in **`tailwind.config.js`** + **`app/globals.css`**.

## Accessibility & performance

- Respects `prefers-reduced-motion` (global `MotionConfig` + CSS guards).
- No-JS fallback keeps animated content visible.
- Semantic landmarks, labelled form fields, focus styles, keyboard-dismissable
  lightbox/modal, SEO metadata + Organization JSON-LD.
