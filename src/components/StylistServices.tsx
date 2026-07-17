import Image from "next/image";

const stylists = [
  {
    name: "Meg Turner",
    bio: "Specializes in women's cuts and color for ages 18 and over.",
    image: "/images/placeholder/shop-3.jpg",
    book: "https://square.site/book/32QKTY6ZYKYZ4/meg-turner-sandpoint-id",
  },
  {
    name: "Ashley Tauber",
    bio: "Specializes in women's cuts and color for all ages.",
    image: "/images/placeholder/stylist-ashley.jpg",
    book: "https://squareup.com/appointments/book/f524d6b5-8f74-441d-8883-ee85a1b89c95/KVRJ99ZP5HY18/services",
  },
];

export default function StylistServices() {
  return (
    <section id="stylists" className="relative bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="mb-14 max-w-xl">
          <p className="mb-3 font-body text-xs uppercase tracking-[0.3em] text-copper">
            For the Ladies
          </p>
          <h2 className="font-accent text-5xl italic leading-tight text-cream sm:text-6xl">
            Women&rsquo;s Stylist Services
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {stylists.map((stylist) => (
            <div key={stylist.name} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src={stylist.image}
                  alt={`Hair work by ${stylist.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-tight text-cream">
                {stylist.name}
              </h3>
              <p className="mt-2 font-body text-sm text-cream-dim">
                {stylist.bio}
              </p>
              <a
                href={stylist.book}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-sm border border-copper px-5 py-2.5 font-body text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-copper hover:text-ink"
              >
                Book with {stylist.name.split(" ")[0]}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
