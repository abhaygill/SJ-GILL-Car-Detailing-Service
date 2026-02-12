import { MapPin } from "lucide-react";

const suburbs = ["Cranbourne", "Clyde", "Berwick", "Narre Warren", "Officer", "Pakenham"];

const ServiceArea = () => (
  <section id="areas" className="section-padding section-light">
    <div className="container">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-center uppercase tracking-tight mb-4">
        Proudly Servicing <span className="text-accent">South East Melbourne</span>
      </h2>
      <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
        We provide mobile car detailing across Cranbourne and surrounding suburbs. If your area isn't listed, get in touch — we may still come to you!
      </p>
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {suburbs.map((s) => (
          <span key={s} className="inline-flex items-center gap-1.5 bg-card border border-border rounded-full px-4 py-2 text-sm font-medium">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            {s}
          </span>
        ))}
      </div>
      <div className="rounded-lg overflow-hidden border border-border max-w-2xl mx-auto">
        <iframe
          title="SJ GILL Service Area - Cranbourne Melbourne"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50387.04691820423!2d145.2539!3d-38.0996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad615e1f4f3e1e7%3A0x5045675218ce840!2sCranbourne%20VIC!5e0!3m2!1sen!2sau!4v1700000000000"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);

export default ServiceArea;
