import { useMemo, useState } from "react";
import GalleryModal, { GalleryCar } from "@/components/GalleryModal";

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=78`;

export default function Gallery() {
  const cars = useMemo<GalleryCar[]>(
    () => [
      {
        title: "Interior Detail – Toyota Camry",
        location: "Cranbourne, VIC",
        service: "Interior Deep Clean",
        description:
          "Full interior restoration including seats, carpets, dashboard and pet hair removal for a fresh, like-new cabin.",
        images: [
          unsplash("photo-1503376780353-7e6692767b70"),
          unsplash("photo-1494976388531-d1058494cdd8"),
          unsplash("photo-1542362567-b07e54358753"),
          unsplash("photo-1607860108855-64acf2078ed9"),
        ],
      },
      {
        title: "Full Detail – Mazda CX-5",
        location: "Berwick, VIC",
        service: "Full Detail Package",
        description:
          "Inside & out refresh with deep vacuum, trim cleaning, streak-free glass, decontamination wash and gloss protection.",
        images: [
          unsplash("photo-1519641471654-76ce0107ad1b"),
          unsplash("photo-1619767886558-efdc259cde1a"),
          unsplash("photo-1503736334956-4c8f8e92946d"),
          unsplash("photo-1504215680853-026ed2a45def"),
        ],
      },
      {
        title: "Paint Correction – BMW 3 Series",
        location: "Narre Warren, VIC",
        service: "Paint Correction & Polish",
        description:
          "Swirl reduction and gloss restoration with careful polishing steps, finished with durable paint protection.",
        images: [
          unsplash("photo-1502877338535-766e1452684a"),
          unsplash("photo-1525609004556-c46c7d6cf023"),
          unsplash("photo-1511910849309-0dffb87849e8"),
          unsplash("photo-1523987355523-c7b5b0dd90a7"),
        ],
      },
      {
        title: "SUV Refresh – Toyota Prado",
        location: "Pakenham, VIC",
        service: "Exterior Wash & Shine",
        description:
          "Premium hand wash with wheels and arches cleaned, plus a slick finishing wax for a crisp, premium shine.",
        images: [
          unsplash("photo-1525609004556-c46c7d6cf023"),
          unsplash("photo-1541899481282-d53bffe3c35d"),
          unsplash("photo-1493238792000-8113da705763"),
          unsplash("photo-1552519507-da3b142c6e3d"),
        ],
      },
      {
        title: "Family Car Reset – Hyundai i30",
        location: "Officer, VIC",
        service: "Interior Reset",
        description:
          "Quick but thorough interior clean focusing on high-touch areas, crumbs/dust extraction and a clean matte finish.",
        images: [
          unsplash("photo-1525609004556-c46c7d6cf023"),
          unsplash("photo-1519641471654-76ce0107ad1b"),
          unsplash("photo-1494976388531-d1058494cdd8"),
          unsplash("photo-1503736334956-4c8f8e92946d"),
        ],
      },
    ],
    [],
  );

  const [open, setOpen] = useState(false);
  const [activeCarIdx, setActiveCarIdx] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  const activeCar = activeCarIdx == null ? null : cars[activeCarIdx] ?? null;

  return (
    <section id="gallery" className="py-20 bg-[#0b1f3a] text-white">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center uppercase tracking-tight mb-4">
          Gallery – <span className="text-accent">Recent Details</span>
        </h2>
        <p className="text-primary-foreground/70 text-center mb-10 max-w-2xl mx-auto">
          Tap any car to view the full set. Each job includes multiple photos, service details, and location.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car, idx) => {
            const cover = car.images[0];
            const count = car.images.length;
            return (
              <button
                key={car.title}
                type="button"
                onClick={() => {
                  setActiveCarIdx(idx);
                  setStartIndex(0);
                  setOpen(true);
                }}
                className={[
                  "text-left rounded-2xl overflow-hidden",
                  "border border-white/10 bg-white/5",
                  "shadow-lg hover:shadow-xl",
                  "transition-shadow",
                ].join(" ")}
              >
                <div className="relative">
                  <img
                    src={cover}
                    alt={car.title}
                    className="w-full h-44 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute left-3 bottom-3 right-3 flex items-end justify-between gap-3">
                    <span className="inline-flex items-center rounded-full bg-black/50 border border-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur-sm">
                      {car.service}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-black/50 border border-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur-sm">
                      {count} photos
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-heading text-base font-semibold uppercase text-white leading-snug">
                    {car.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/65">{car.location}</p>
                  <p className="mt-3 text-sm text-white/75 leading-relaxed line-clamp-3">
                    {car.description}
                  </p>
                  <div className="mt-4 text-xs text-white/50">
                    Tap to open • Swipe in modal
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <GalleryModal
        open={open}
        car={activeCar}
        startIndex={startIndex}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}

