import { Phone, MessageCircle, Mail, Instagram } from "lucide-react";

const PHONE = "tel:0430881919";
const WHATSAPP = "https://wa.me/61430881919?text=Hi%20SJ%20Gill%2C%20I%20would%20like%20to%20book%20a%20car%20detailing%20service.%20Please%20let%20me%20know%20availability.";

const Footer = () => (
  <footer id="contact" className="section-dark px-4 py-12 md:px-8">
    <div className="container">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-xl font-bold uppercase mb-3">SJ GILL</h3>
          <p className="text-primary-foreground/60 text-sm">
            Professional mobile car detailing in Cranbourne &amp; South East Melbourne.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm uppercase tracking-wider mb-3 text-primary-foreground/80">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li>
              <a href={PHONE} className="inline-flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" /> 0 430 881 919
              </a>
            </li>
            <li>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:info@sjgilldetailing.com.au" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" /> sj-gill-car-detailing-service.vercel.app
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-sm uppercase tracking-wider mb-3 text-primary-foreground/80">Service Areas</h4>
          <p className="text-sm text-primary-foreground/60">
            Cranbourne · Clyde · Berwick · Narre Warren · Officer · Pakenham
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Instagram" className="text-primary-foreground/60 hover:text-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-primary-foreground/60 hover:text-accent transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} SJ GILL Mobile Car Detailing. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
