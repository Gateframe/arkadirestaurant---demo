# Premium Sushi Restaurant Landing Page

A dark, editorial, cinematic single-page site for "Kitchen" — a luxury sushi/fine-dining restaurant. Desktop-first, fully responsive, with serif headings, ivory text, and muted gold accents on a black stone-textured background.

## Design system (src/styles.css)

Replace tokens with the luxury dark palette:
- `--background` #050505, `--card` #111111, `--muted` #1a1a1a
- `--foreground` ivory #f3efe2
- `--accent` muted gold #b7a46a
- `--border` subtle warm grey
- Radius: large (xl/2xl) for image cards
- Add custom tokens: `--gradient-overlay`, `--shadow-soft`, `--shadow-card`, `--texture-stone` (background image)
- Fonts via Google Fonts in `__root.tsx` head: **Cormorant Garamond** (serif headings) + **Inter** (sans body). Define `--font-serif` and `--font-sans`.
- Custom keyframes: `fade-up`, `fade-in`, `subtle-zoom` (already-available `hover-scale` for cards).

## Page structure (single route: src/routes/index.tsx)

All sections live as components in `src/components/landing/` for clarity:

1. **Navbar** (`Navbar.tsx`)
   - Floating, top-left, rounded-full pill, semi-transparent black with backdrop-blur
   - Logo "KITCHEN" (serif), links: Menu, About, gold-bordered "Book a Table" button

2. **Hero** (`Hero.tsx`) — split-screen
   - Left (75% on desktop): full-height stone-tabletop background image, large centered plated dish, gradient overlay bottom, huge uppercase serif "SUSHI / SENSATION" bottom-left in ivory with wide tracking; small social icons (Instagram, Facebook, X) bottom-right
   - Right (25%): vertical stack of 3 rounded image cards (Menu, Reservation, Our Restaurant) — dark overlay, label bottom-left, circular gold arrow button bottom-right, hover zoom

3. **Intro** (`Intro.tsx`) — centered serif statement: "A refined dining experience built around precision, atmosphere, and unforgettable taste." with gold divider

4. **Signature Dishes** (`SignatureDishes.tsx`) — 3-column grid (stack on mobile) of dish cards: image, serif name, short description, price in gold

5. **Reservation CTA** (`ReservationCTA.tsx`) — full-width section with atmospheric background image, serif headline, subcopy, gold "Reserve Your Table" button

6. **Atmosphere Gallery** (`Gallery.tsx`) — asymmetric editorial grid (4-5 images of interior) with subtle hover zoom and fade-up on scroll

7. **Footer** (`Footer.tsx`) — three columns: address, opening hours, phone + Instagram link; tiny copyright row

## Imagery

Generate with imagegen (premium for hero plate, fast for rest), saved to `src/assets/`:
- `hero-stone-bg.jpg` — dark stone tabletop texture
- `hero-plate.jpg` — single dramatic sushi plate, top-down, moody lighting
- `card-menu.jpg`, `card-reservation.jpg`, `card-restaurant.jpg`
- `dish-1/2/3.jpg` — three signature sushi dishes
- `reservation-bg.jpg` — atmospheric dining room
- `gallery-1..4.jpg` — interior shots

## Responsive behavior

- Desktop: split 75/25 hero
- Tablet (≤1024px): hero stacks — left becomes full width, right cards become 3-column row below
- Mobile (≤640px): everything stacks vertically; right cards become full-width horizontal cards; nav collapses to logo + hamburger-style minimal menu (sheet)

## Animation

- Fade-up on scroll (Intersection Observer hook `useReveal`) for sections
- Hover scale on image cards (existing `hover-scale` utility)
- Subtle parallax on hero plate via `transform: translateY` tied to scroll
- Smooth color/opacity transitions on nav and buttons

## SEO (head() in route)

- Title: "Kitchen — Sushi Sensation | Fine Dining"
- Meta description, og:title/description/image (hero plate), single H1 in hero, Restaurant JSON-LD with address, hours, phone

## Technical details

- Stack: TanStack Start, React 19, Tailwind v4, shadcn/ui (Button, Sheet for mobile nav)
- Lucide icons: Instagram, Facebook, Twitter, ArrowUpRight, Plus, Phone, MapPin, Clock
- All colors via semantic tokens — no raw hex in JSX
- Image imports as ES6 from `src/assets/`
- New files only; replace placeholder index. No backend needed.

## Out of scope

- Real booking flow / form submission (button is visual CTA only)
- CMS / dynamic menu data
- Multi-page routing (single landing page per request)
