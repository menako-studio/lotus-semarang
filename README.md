# 🌸 Lotus Semarang — Frontend Architecture

> *Suaka kolam renang privat dan hydrotherapy eksklusif di Semarang, Indonesia.*

---

## Monorepo Structure

```
lotus-semarang/
├── apps/
│   ├── web/                           # Public-facing website (Next.js 14)
│   │   ├── app/
│   │   │   ├── layout.tsx             # Root layout + next/font injection
│   │   │   ├── page.tsx               # Home page composition
│   │   │   └── globals.css            # Design tokens + base styles
│   │   ├── components/
│   │   │   ├── Navbar.tsx             # Sticky transparent→frosted navbar
│   │   │   ├── Hero.tsx               # Full-screen hero + parallax
│   │   │   ├── Sanctuary.tsx          # About section + editorial grid
│   │   │   └── BookingFlow.tsx        # 3-step reservation wizard
│   │   ├── next.config.js
│   │   ├── tailwind.config.js         # Extends @lotus/config
│   │   └── package.json
│   │
│   └── admin/                         # Admin dashboard (Next.js 14, stub)
│       ├── next.config.js
│       └── package.json
│
├── packages/
│   ├── ui/                            # Shared component library
│   │   ├── components/
│   │   │   ├── SectionWrapper.tsx     # Consistent section rhythm
│   │   │   ├── EyebrowLabel.tsx       # Uppercase caption labels
│   │   │   ├── GhostButton.tsx        # Ghost/outline CTA button
│   │   │   └── DividerRule.tsx        # Editorial horizontal rule
│   │   ├── lib/
│   │   │   └── utils.ts               # cn() — clsx + tailwind-merge
│   │   ├── index.ts                   # Barrel export
│   │   └── package.json
│   │
│   └── config/                        # Shared configs
│       ├── tailwind.config.js         # ← THE DESIGN SYSTEM
│       ├── tsconfig.json
│       └── package.json
│
├── turbo.json                         # Turborepo pipeline
├── pnpm-workspace.yaml
├── package.json
└── .gitignore
```

---

## Design System Tokens

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `ivory` | `#F9F6F0` | Primary background |
| `stone` | `#C8BCA8` | Borders, dividers, muted elements |
| `concrete` | `#D4CFC8` | Inset backgrounds |
| `terracotta` | `#C17B5A` | Accent (photography-derived) |
| `charcoal` | `#2C2B29` | Text primary, dark sections |
| `gold` | `#B5995A` | Micro-accents, focus rings |

### Typography
| Role | Font | Weight |
|------|------|--------|
| Heading / Display | Playfair Display | 400 (Regular), 500, 600, 700 |
| Body / Nav / Caption | Inter | 300 (Light), 400, 500, 600 |

### Motion Easings
- `--ease-luxury`: `cubic-bezier(0.25, 0.1, 0.25, 1)` — smooth, refined
- `--ease-reveal`: `cubic-bezier(0.76, 0, 0.24, 1)` — editorial slide
- `--ease-silk`: `cubic-bezier(0.45, 0.05, 0.55, 0.95)` — silky image zoom

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development (both apps via Turborepo)
pnpm dev

# Web app only (localhost:3000)
pnpm --filter @lotus/web dev

# Admin only (localhost:3001)
pnpm --filter @lotus/admin dev

# Build all apps
pnpm build
```

---

## Component Architecture

### `Navbar.tsx`
- **Behavior**: Transparent → frosted ivory (`backdrop-blur`) on scroll
- **Hide/Show**: Hides on scroll-down, reveals on scroll-up
- **Logo**: SVG wordmark with `filter: grayscale(1)` monochrome treatment
- **Mobile**: Fullscreen overlay menu with staggered Framer Motion reveal

### `Hero.tsx`
- **Background**: Full-screen image with CSS Ken Burns animation
- **Parallax**: `useScroll` + `useTransform` for image/content depth separation
- **Entrance**: Staggered `motion.div` with `variants` and `staggerChildren`
- **CTA**: Solid ivory button + ghost "Kerahasiaan terjamin" privacy note

### `Sanctuary.tsx`
- **Layout**: `grid-cols-[55%_45%]` asymmetric split
- **Images**: Staggered vertical offset (main + two inset offset by `mt-8`)
- **Text**: `lg:sticky lg:top-32` for reading-while-scrolling effect
- **Scroll-trigger**: `useInView` from Framer Motion, `once: true`

### `BookingFlow.tsx`
- **Pattern**: Multi-step wizard with `AnimatePresence` directional slide
- **Steps**: Tanggal → Detail Tamu → Konfirmasi (3 steps)
- **Progress**: Animated `motion.div` progress bar
- **Privacy UX**: Lock icon, privacy note, consent checkbox

---

## Photo Replacement Checklist

Replace Unsplash placeholders with actual Lotus Semarang photography:

- [ ] `Hero.tsx` — `HERO_IMAGE` const → actual hero pool photo
- [ ] `Sanctuary.tsx` → `images.main`, `images.inset`, `images.detail`
- [ ] `page.tsx` (Gallery) → 4 gallery images
- [ ] `/public/og-image.jpg` → Open Graph social card
- [ ] `/public/favicon.svg` → Brand favicon

---

## Next Steps (Phase 2)

- [ ] Fasilitas section — full component with image cards
- [ ] Gallery lightbox — click-to-expand with Framer Motion layout animation
- [ ] Testimonials / Ulasan section
- [ ] WhatsApp integration for booking confirmation
- [ ] Admin dashboard — reservation management table
- [ ] `next-sitemap` for SEO sitemap generation
- [ ] Vercel deployment configuration

---

*Dibuat dengan ❤ oleh Menako Studio untuk Lotus Semarang.*
