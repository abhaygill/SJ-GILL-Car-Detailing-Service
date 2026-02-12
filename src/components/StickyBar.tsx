import { Phone, MessageCircle } from "lucide-react";

const PHONE = "tel:0430881919";
const WHATSAPP = "https://wa.me/61430881919?text=Hi%20SJ%20Gill%2C%20I%20would%20like%20to%20book%20a%20car%20detailing%20service.%20Please%20let%20me%20know%20availability.";

const StickyBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary border-t border-border/20 p-3 md:hidden">
    <div className="flex gap-3">
      <a
        href={PHONE}
        className="flex-1 inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading text-sm uppercase tracking-wide py-3 rounded-md"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-heading text-sm uppercase tracking-wide py-3 rounded-md shadow-md shadow-black/40 hover:bg-[#1ebe5a] transition-colors"
      >
        <MessageCircle className="w-4 h-4" />
        Book Now
      </a>
    </div>
  </div>
);

export default StickyBar;
