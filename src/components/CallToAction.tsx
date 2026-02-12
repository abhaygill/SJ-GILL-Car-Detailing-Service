import { Phone, MessageCircle } from "lucide-react";

const PHONE = "tel:+61430881919";
const WHATSAPP =
  "https://wa.me/61430881919?text=Hi%20SJ%20Gill%2C%20I%20would%20like%20to%20book%20a%20car%20detailing%20service.%20Please%20let%20me%20know%20availability.";

const CallToAction = () => (
  <section className="py-20 bg-gradient-to-br from-[#071426] via-[#0b1f3a] to-[#0f2747] text-white text-center">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
        Ready to Give Your Car a <span className="text-blue-500">Fresh New Look?</span>
      </h2>

      <p className="text-white/75 mb-10 max-w-xl mx-auto text-lg">
        Book your professional mobile car detailing service today.
        We come to your home or workplace across Cranbourne and surrounding suburbs.
      </p>

      <div className="flex flex-col sm:flex-row gap-5 justify-center">
        {/* Call Button */}
        <a
          href={PHONE}
          className="inline-flex items-center justify-center gap-2 bg-[#1E3A8A] hover:bg-[#1e40af] text-white font-heading text-lg uppercase tracking-wide px-8 py-4 rounded-md shadow-lg transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>

        {/* WhatsApp Button */}
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#0b3d2e] hover:bg-[#0e4a36] text-white font-heading text-lg uppercase tracking-wide px-8 py-4 rounded-md shadow-lg transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp Booking
        </a>
      </div>
    </div>
  </section>
);

export default CallToAction;
