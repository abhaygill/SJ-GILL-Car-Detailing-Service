import heroBg from "@/assets/hero-bg.jpg";
import { Phone, MessageCircle } from "lucide-react";

const PHONE = "tel:+61XXXXXXXXX";
const WHATSAPP = "https://wa.me/61XXXXXXXXX?text=Hi%20SJ%20Gill%2C%20I%20would%20like%20to%20book%20a%20car%20detailing%20service%20in%20Cranbourne.%20Please%20let%20me%20know%20availability.";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt="Professional mobile car detailing service in Cranbourne Melbourne"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
    <div className="relative z-10 container text-center px-4 py-20">
      <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-accent-foreground uppercase tracking-tight leading-tight mb-4">
        Mobile Car Detailing<br />
        <span className="text-accent">in Cranbourne, Melbourne</span>
      </h1>
      <p className="text-accent-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-body">
        We come to your home or workplace for professional car washing, interior cleaning, polishing &amp; full detailing.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={PHONE}
          className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading text-lg uppercase tracking-wide px-8 py-4 rounded-md hover:bg-accent/90 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 border-2 border-accent-foreground text-accent-foreground font-heading text-lg uppercase tracking-wide px-8 py-4 rounded-md hover:bg-accent-foreground/10 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Book via WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
