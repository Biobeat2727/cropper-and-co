import Image from "next/image";

const services = [
  { name: "Men's Haircut" },
  { name: "Boy's Haircut" },
  { name: "Beard Grooming" },
  { name: "Hot Towel Shave" },
];

export default function BarberServices() {
  return (
    <section id="barbers" className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-12">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
          <Image
            src="/images/placeholder/shop-1.jpg"
            alt="Cropper & Co. Barbershop card"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 font-body text-xs uppercase tracking-[0.3em] text-brass-bright">
            For the Fellas
          </p>
          <h2 className="font-display text-5xl font-extrabold uppercase leading-none text-cream sm:text-6xl">
            Barber
            <br />
            Services
          </h2>

          <ul className="mt-10 divide-y divide-cream/15 border-t border-b border-cream/15">
            {services.map((service) => (
              <li
                key={service.name}
                className="flex items-center justify-between py-4 font-body text-lg text-cream"
              >
                {service.name}
              </li>
            ))}
          </ul>

          <p className="mt-6 font-body text-sm text-cream-dim">
            Available Monday&ndash;Friday.
          </p>

          <a
            href="https://squareup.com/appointments/book/f524d6b5-8f74-441d-8883-ee85a1b89c95/KVRJ99ZP5HY18/services"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block w-fit rounded-sm bg-brass px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-brass-bright"
          >
            Book with a Barber
          </a>
        </div>
      </div>
    </section>
  );
}
