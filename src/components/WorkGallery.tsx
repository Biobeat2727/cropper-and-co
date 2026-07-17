import Image from "next/image";

const photos = [
  { src: "/images/placeholder/shop-2.jpg", alt: "Cut in progress at Cropper & Co." },
  { src: "/images/placeholder/shop-3.jpg", alt: "Balayage color work" },
  { src: "/images/placeholder/stylist-ashley.jpg", alt: "Color work by Ashley Tauber" },
];

export default function WorkGallery() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-display text-4xl font-extrabold uppercase leading-none text-cream sm:text-5xl">
            Not Sure? Take a Look
            <br />
            at Our Work.
          </h2>
          <div className="flex gap-4 font-body text-sm uppercase tracking-wide text-cream-dim">
            <a
              href="https://www.instagram.com/cropperandcobarber/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brass-bright"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/Cropper-Co-Barber-Shop-587480838412414/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brass-bright"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-square overflow-hidden rounded-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
