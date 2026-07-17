# Outstanding Work

Things needed from the client before this site is launch-ready. None of this is in the old Squarespace site's content, so it can't be recovered by scraping — it has to come from Cropper & Co. directly.

## Assets

- [ ] Vector/high-res logo file. The current wordmark (`Cropper&Co.` in `Header.tsx`/`Footer.tsx`) is typeset in Big Shoulders as a stand-in for the real pendant-lamp mark + wordmark visible on their business card (`public/images/placeholder/shop-1.jpg`).
- [ ] Real shop photography — for the hero, barber services section, and work gallery. Currently reusing 3 recovered Squarespace photos (`shop-1.jpg`, `shop-2.jpg`, `shop-3.jpg`) in multiple places.
- [ ] Headshot or work photo for **Meg Turner** — she currently shares a generic hair-color photo (`shop-3.jpg`) with no photo of her specifically. Ashley Tauber has a real photo (`stylist-ashley.jpg`).

## Content

- [ ] Street address (Contact section, `ContactSection.tsx`)
- [ ] Phone number (Contact section)
- [ ] Shop hours — currently only "Available Monday–Friday" is known, for barber services specifically. Full hours (and whether they differ for stylists) are unknown.
- [ ] Service pricing — not listed anywhere on the old site; the current barber services list (`BarberServices.tsx`) has no prices at all.
- [ ] Confirm the two Square booking links still work and route to the right calendars (one for barbers, one per stylist) — carried over as-is from the old site.

## Open Design Questions

- [ ] Is "Meg Turner" or "Ashley Tauber" the primary/senior stylist? Ordering and card treatment in `StylistServices.tsx` currently has no significance either way.
- [ ] Any other staff/barbers besides the two stylists shown? The old site only showed a generic "Barber Services" block with no individual barber names.
