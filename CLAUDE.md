# Cropper & Co. — Project Context

Rebuild of cropperandcobarber.com (Squarespace) as a custom Next.js site. The client wants to keep the same basic elements as the current site — hero, barber services, women's stylist services, work gallery, booking — but with a better overall feel. No design direction was specified beyond that, so the visual direction here was led by the old site's real assets rather than a generic template.

## Where the design came from

The old Squarespace site is dark and minimal but visually thin — no real brand system beyond a dark background and white text. Two things recovered from photos on that site became the actual basis for this design:

1. **The real logo** — a pendant-lamp icon + bold condensed "CROPPER & CO. BARBERSHOP · EST. 2019" wordmark, visible on a business card in `public/images/placeholder/shop-1.jpg`. No vector file exists for it. The site's display typeface (Big Shoulders, in `layout.tsx`) was chosen to echo that wordmark's condensed bold caps until a real logo file is available.
2. **A navy + copper/terracotta backdrop** the shop already uses in its own styling photos (`shop-3.jpg`). That pairing became the palette for the Women's Stylist Services section specifically (`--navy` / `--copper` in `globals.css`), while the rest of the site uses a warm charcoal/brass palette (`--ink` / `--brass`). The split isn't arbitrary — it mirrors the fact that this is a barbershop *and* a salon under one roof, and gives the stylist section room to feel more editorial (Fraunces italic serif headings there vs. the bold grotesk used everywhere else).

## Content sourced from the old site

Everything in `BarberServices.tsx` and `StylistServices.tsx` (service names, stylist names/bios, Square booking URLs, Instagram/Facebook links) was pulled directly from the live Squarespace site as of 2026-07-17. The old site never listed pricing, address, phone, or full hours anywhere — that's not an oversight in this rebuild, it genuinely isn't published anywhere yet. See `TODO.md` for what still needs to come from the client directly.

## Placeholder photography

Only 4 photos were recoverable from the old site (`public/images/placeholder/`), so they're currently doing double duty — e.g. `shop-2.jpg` is both the hero background and appears in the work gallery. This is a scaffold to react to, not a final asset set.
