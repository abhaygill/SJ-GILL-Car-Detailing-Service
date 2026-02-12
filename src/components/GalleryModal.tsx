import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type GalleryCar = {
  title: string;
  location: string;
  service: string;
  description: string;
  images: string[];
};

type GalleryModalProps = {
  open: boolean;
  car: GalleryCar | null;
  startIndex?: number;
  onClose: () => void;
};

function clampIndex(n: number, len: number) {
  if (len <= 0) return 0;
  return ((n % len) + len) % len;
}

export default function GalleryModal({
  open,
  car,
  startIndex = 0,
  onClose,
}: GalleryModalProps) {
  const images = car?.images ?? [];
  const [index, setIndex] = useState(0);
  const [slideDir, setSlideDir] = useState<"left" | "right" | null>(null);
  const touchRef = useRef<{ startX: number; lastX: number; active: boolean } | null>(null);

  const activeSrc = useMemo(() => images[index] ?? "", [images, index]);

  useEffect(() => {
    if (!open || !car) return;
    setIndex(clampIndex(startIndex, car.images.length));
  }, [open, car, startIndex]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, images.length, index]);

  useEffect(() => {
    if (!slideDir) return;
    const t = window.setTimeout(() => setSlideDir(null), 220);
    return () => window.clearTimeout(t);
  }, [slideDir]);

  const next = () => {
    if (images.length <= 1) return;
    setSlideDir("left");
    setIndex((i) => clampIndex(i + 1, images.length));
  };
  const prev = () => {
    if (images.length <= 1) return;
    setSlideDir("right");
    setIndex((i) => clampIndex(i - 1, images.length));
  };

  if (!open || !car) return null;

  const modal = (
    <div className="fixed inset-0 z-[70]">
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label="Close gallery modal"
      />

      <div className="relative z-[71] h-full w-full flex flex-col">
        <div className="flex-1 flex items-center justify-center px-4 pt-20 pb-6">
          <div className="w-full max-w-md sm:max-w-lg">
            <div
              className={[
                "relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-black/40",
                "touch-pan-y",
              ].join(" ")}
              onTouchStart={(e) => {
                if (images.length <= 1) return;
                const x = e.touches[0]?.clientX ?? 0;
                touchRef.current = { startX: x, lastX: x, active: true };
              }}
              onTouchMove={(e) => {
                if (!touchRef.current?.active) return;
                touchRef.current.lastX = e.touches[0]?.clientX ?? touchRef.current.lastX;
              }}
              onTouchEnd={() => {
                const t = touchRef.current;
                touchRef.current = null;
                if (!t) return;
                const delta = t.lastX - t.startX;
                const threshold = 48;
                if (Math.abs(delta) < threshold) return;
                if (delta < 0) next();
                else prev();
              }}
            >
              <img
                src={activeSrc}
                alt={car.title}
                className={[
                  "w-full h-[56vh] max-h-[520px] object-cover select-none",
                  "transition-transform duration-200 ease-out",
                  slideDir === "left"
                    ? "-translate-x-2"
                    : slideDir === "right"
                      ? "translate-x-2"
                      : "translate-x-0",
                ].join(" ")}
                draggable={false}
                decoding="async"
              />

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      prev();
                    }}
                    className={[
                      "absolute left-3 top-1/2 -translate-y-1/2",
                      "h-10 w-10 rounded-full",
                      "bg-black/55 border border-white/15 text-white",
                      "backdrop-blur-sm",
                      "flex items-center justify-center",
                      "hover:bg-black/65 transition-colors",
                    ].join(" ")}
                    aria-label="Previous image"
                  >
                    <span className="text-xl leading-none">‹</span>
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      next();
                    }}
                    className={[
                      "absolute right-3 top-1/2 -translate-y-1/2",
                      "h-10 w-10 rounded-full",
                      "bg-black/55 border border-white/15 text-white",
                      "backdrop-blur-sm",
                      "flex items-center justify-center",
                      "hover:bg-black/65 transition-colors",
                    ].join(" ")}
                    aria-label="Next image"
                  >
                    <span className="text-xl leading-none">›</span>
                  </button>
                </>
              )}

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className={[
                  "absolute right-3 top-3",
                  "h-9 w-9 rounded-full",
                  "bg-black/55 border border-white/15 text-white",
                  "backdrop-blur-sm",
                  "flex items-center justify-center",
                  "hover:bg-black/65 transition-colors",
                ].join(" ")}
                aria-label="Close"
              >
                <span className="text-lg leading-none">×</span>
              </button>
            </div>

            {images.length > 1 && (
              <div className="flex items-center justify-center gap-2 mt-4">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={[
                      "h-2.5 w-2.5 rounded-full transition-colors",
                      i === index ? "bg-white" : "bg-white/30 hover:bg-white/45",
                    ].join(" ")}
                    aria-label={`Go to image ${i + 1}`}
                    aria-current={i === index}
                  />
                ))}
              </div>
            )}

            <div className="mt-5 rounded-2xl border border-white/10 bg-[#0b1222]/70 backdrop-blur-md p-5 shadow-xl">
              <h3 className="font-heading text-lg font-semibold uppercase tracking-tight text-white">
                {car.title}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/85">
                  {car.service}
                </span>
                <span className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/85">
                  {car.location}
                </span>
              </div>
              <p className="mt-3 text-sm text-white/75 leading-relaxed">
                {car.description}
              </p>
              <p className="mt-3 text-xs text-white/45">
                Swipe left/right on the photo or use the arrows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

