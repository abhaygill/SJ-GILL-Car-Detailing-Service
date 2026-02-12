import { Phone, MessageCircle } from "lucide-react";

const PHONE = "tel:+61XXXXXXXXX";
const WHATSAPP = "https://wa.me/61XXXXXXXXX?text=Hi%20SJ%20Gill%2C%20I%20would%20like%20to%20book%20a%20car%20detailing%20service%20in%20Cranbourne.%20Please%20let%20me%20know%20availability.";

const CallToAction = () => (
  <section className="section-padding bg-accent text-accent-foreground text-center">
    <div className="container">
      <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
        Ready to Give Your Car a Fresh New Look?
      </h2>
      <p className="text-accent-foreground/80 mb-8 max-w-lg mx-auto">
        Book your mobile car detailing session today. We'll come to you in Cranbourne and surrounding suburbs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={PHONE}
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading text-lg uppercase tracking-wide px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-heading text-lg uppercase tracking-wide px-8 py-4 rounded-md hover:bg-primary/10 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp Booking
        </a>
      </div>
    </div>
  </section>
);

export default CallToAction;
