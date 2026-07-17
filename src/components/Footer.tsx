export default function Footer() {
  return (
    <footer className="bg-ink py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:px-12 md:text-left">
        <span className="font-display text-lg font-extrabold uppercase tracking-tight text-cream">
          Cropper<span className="text-brass-bright">&amp;</span>Co.
        </span>
        <p className="font-body text-xs text-cream-dim">
          &copy; {new Date().getFullYear()} Cropper &amp; Co. Barbershop &middot; Sandpoint, ID
        </p>
      </div>
    </footer>
  );
}
