export default function ContactSection() {
  return (
    <section id="book" className="bg-brass py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <h2 className="font-display text-4xl font-extrabold uppercase leading-none text-ink sm:text-5xl">
              Pick a Chair.
            </h2>
            <p className="mt-4 max-w-md font-body text-ink/80">
              Walk-ins welcome when there&rsquo;s room, but booking ahead
              saves you the wait.
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-4 font-body text-sm text-ink sm:grid-cols-2 md:grid-cols-1">
            <div>
              <dt className="uppercase tracking-wide text-ink/60">Address</dt>
              <dd className="mt-1 font-medium">[Street address, Sandpoint, ID]</dd>
            </div>
            <div>
              <dt className="uppercase tracking-wide text-ink/60">Phone</dt>
              <dd className="mt-1 font-medium">[Phone number]</dd>
            </div>
            <div>
              <dt className="uppercase tracking-wide text-ink/60">Hours</dt>
              <dd className="mt-1 font-medium">[Shop hours]</dd>
            </div>
          </dl>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://squareup.com/appointments/book/f524d6b5-8f74-441d-8883-ee85a1b89c95/KVRJ99ZP5HY18/services"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-ink px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-ink-soft"
          >
            Book with a Barber
          </a>
          <a
            href="https://square.site/book/32QKTY6ZYKYZ4/meg-turner-sandpoint-id"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-ink px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            Book with a Stylist
          </a>
        </div>
      </div>
    </section>
  );
}
