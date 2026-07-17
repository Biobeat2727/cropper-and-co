export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12">
      <div className="flex items-baseline gap-2">
        <span className="font-display text-2xl font-extrabold uppercase tracking-tight text-cream md:text-3xl">
          Cropper<span className="text-brass-bright">&amp;</span>Co.
        </span>
        <span className="hidden font-body text-[11px] uppercase tracking-[0.2em] text-cream-dim sm:inline">
          Est. 2019
        </span>
      </div>
      <a
        href="#book"
        className="rounded-sm border border-brass/60 px-4 py-2 font-body text-sm font-medium text-cream transition-colors hover:border-brass-bright hover:bg-brass-bright hover:text-ink"
      >
        Book Now
      </a>
    </header>
  );
}
