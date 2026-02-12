import { useEffect, useMemo, useRef } from "react";

export type MobileMenuItem = {
  label: string;
  href: string; // "#services", "#gallery", etc. or "#home"
};

type MobileMenuProps = {
  open: boolean;
  items: MobileMenuItem[];
  onClose: () => void;
};

function getTargetId(href: string): string | null {
  if (!href.startsWith("#")) return null;
  const id = href.slice(1).trim();
  return id.length ? id : null;
}

function scrollToHash(href: string) {
  const id = getTargetId(href);
  if (!id || id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash) window.history.replaceState(null, "", " ");
    return;
  }

  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  }
}

export default function MobileMenu({ open, items, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  const sortedItems = useMemo(() => items, [items]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const onPointerDown = (e: PointerEvent) => {
      const panel = panelRef.current;
      if (!panel) return;
      if (e.target instanceof Node && panel.contains(e.target)) return;
      onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div
      aria-hidden={!open}
      className={[
        "fixed inset-0 z-[60]",
        open ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
    >
      <div
        className={[
          "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          "absolute right-0 top-0 h-full w-[86%] max-w-xs",
          "bg-[#0f172a] text-white",
          "border-l border-white/10 shadow-2xl",
          "transition-transform duration-200 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="px-5 pt-5 pb-4 border-b border-white/10">
          <p className="font-heading uppercase tracking-wider text-xs text-white/70">
            Menu
          </p>
        </div>

        <nav className="p-3">
          <ul className="space-y-1">
            {sortedItems.map((item) => (
              <li key={item.href + item.label}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHash(item.href);
                    onClose();
                  }}
                  className={[
                    "block rounded-lg px-4 py-3",
                    "font-heading uppercase tracking-wide text-sm",
                    "text-white/90 hover:text-white hover:bg-white/5",
                    "transition-colors",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

