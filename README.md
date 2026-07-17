# Cropper & Co. Barbershop

Marketing site for Cropper & Co. Barbershop (Sandpoint, ID) — a rebuild off Squarespace onto Next.js.

## Stack

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/` — root layout, global styles, and the single page (`page.tsx`)
- `src/components/` — one component per site section (`Header`, `Hero`, `BarberServices`, `StylistServices`, `WorkGallery`, `ContactSection`, `Footer`), composed in that order on the homepage
- `public/images/placeholder/` — photos pulled from the old Squarespace site, standing in until real client photography is available (see `TODO.md`)

## Design

Color tokens and fonts are defined in `src/app/globals.css` (`--ink`, `--cream`, `--brass`, `--navy`, `--copper`) and `src/app/layout.tsx` (Big Shoulders / Inter / Fraunces via `next/font/google`). See `CLAUDE.md` for the rationale behind the palette and typography choices.

## Outstanding Work

See `TODO.md` for what's still needed from the client before this is launch-ready.
