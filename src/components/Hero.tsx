import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-ink">
      <Image
        src="/images/placeholder/shop-2.jpg"
        alt="Barber at work inside Cropper & Co. Barbershop"
        fill
        priority
        className="object-cover object-[30%_20%] grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
      <div className="absolute inset-0 bg-ink/20" />

      <div className="relative z-10 w-full px-6 pb-20 md:px-12 md:pb-28">
        <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-brass-bright">
          Sandpoint, Idaho
        </p>
        <h1 className="max-w-3xl font-display text-6xl font-extrabold uppercase leading-[0.9] text-cream sm:text-7xl md:text-8xl">
          Come have
          <br />
          a seat.
        </h1>
        <p className="mt-6 max-w-md font-accent text-lg italic text-cream-dim">
          A barbershop and salon under one roof.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#barbers"
            className="rounded-sm bg-brass px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-brass-bright"
          >
            Book with a Barber
          </a>
          <a
            href="#stylists"
            className="rounded-sm border border-cream/40 px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:border-cream hover:bg-cream/10"
          >
            Book with a Stylist
          </a>
        </div>
      </div>
    </section>
  );
}
