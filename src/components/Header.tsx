import { useMemo, useState } from "react";
import MobileMenu, { MobileMenuItem } from "@/components/MobileMenu";
import logo from "../assets/logo.png";

function LogoMark() {
  return (
    <div
      className={[
        "h-9 w-9 rounded-lg",
        "bg-white/5 border border-white/10",
        "flex items-center justify-center",
      ].join(" ")}
      aria-hidden="true"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <path
          d="M3.5 14.5H5l2-5.5c.2-.6.8-1 1.4-1h7.2c.6 0 1.2.4 1.4 1l2 5.5h1.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 14.5v2.2c0 .7.6 1.3 1.3 1.3h.7m8.2-3.5v2.2c0 .7-.6 1.3-1.3 1.3h-.7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 12h8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M7.2 14.6h.01M16.8 14.6h.01"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function ThreeDotsIcon({ open }: { open: boolean }) {
  return (
    <div
      className={[
        "h-10 w-10 rounded-lg",
        "bg-white/5 border border-white/10",
        "flex items-center justify-center",
        "transition-colors hover:bg-white/10",
      ].join(" ")}
      aria-hidden="true"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <circle cx="12" cy="5.5" r="1.7" fill="currentColor" opacity={open ? 1 : 0.9} />
        <circle cx="12" cy="12" r="1.7" fill="currentColor" opacity={open ? 1 : 0.9} />
        <circle cx="12" cy="18.5" r="1.7" fill="currentColor" opacity={open ? 1 : 0.9} />
      </svg>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  const items = useMemo<MobileMenuItem[]>(
    () => [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "Gallery", href: "#gallery" },
      { label: "Reviews", href: "#reviews" },
      { label: "Service Areas", href: "#areas" },
      { label: "Contact", href: "#contact" },
    ],
    [],
  );

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 w-full z-50",
          "h-16 sm:h-[68px]",
          "bg-[#0b1f3a] text-white",
          "border-b border-white/10 shadow-sm",
        ].join(" ")}
      >
        <div className="h-full container px-4 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3"
            aria-label="SJ GILL Home"
          >
            <img
  src={logo}
  alt="SJ Gill Logo"
  className="h-12 w-auto object-contain"
/>

            <span className="font-heading font-bold tracking-tight text-xl leading-none">
              SJ GILL
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <ThreeDotsIcon open={open} />
          </button>
        </div>
      </header>

      <MobileMenu open={open} items={items} onClose={() => setOpen(false)} />
    </>
  );
}

