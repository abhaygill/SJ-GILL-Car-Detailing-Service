import { Droplets, Sparkles, Car, Paintbrush, Lightbulb } from "lucide-react";

const WHATSAPP = "https://wa.me/61XXXXXXXXX?text=Hi%20SJ%20Gill%2C%20I%20would%20like%20to%20book%20a%20car%20detailing%20service%20in%20Cranbourne.%20Please%20let%20me%20know%20availability.";

const services = [
  {
    icon: Droplets,
    title: "Exterior Wash & Shine",
    description: "Full hand wash, wheel cleaning, tire dressing and exterior spray wax for a showroom shine.",
    price: "$49",
    duration: "~45 min",
  },
  {
    icon: Sparkles,
    title: "Interior Deep Cleaning",
    description: "Vacuum, dashboard wipe, seat shampoo, and odor elimination for a fresh, clean cabin.",
    price: "$69",
    duration: "~60 min",
  },
  {
    icon: Car,
    title: "Full Detail Package",
    description: "Complete interior and exterior detailing for a total car transformation inside and out.",
    price: "$149",
    duration: "~2.5 hrs",
  },
  {
    icon: Paintbrush,
    title: "Paint Correction & Polishing",
    description: "Machine polish to remove swirl marks, scratches and restore paint clarity and gloss.",
    price: "$199",
    duration: "~3 hrs",
  },
  {
    icon: Lightbulb,
    title: "Headlight Restoration",
    description: "Restore cloudy, yellowed headlights to crystal-clear condition for improved visibility.",
    price: "$59",
    duration: "~30 min",
  },
];

const Services = () => (
  <section id="services" className="section-padding section-light">
    <div className="container">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-center uppercase tracking-tight mb-12">
        Our Car Detailing <span className="text-accent">Services</span>
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-card border border-border rounded-lg p-6 flex flex-col hover:border-accent/40 transition-colors"
          >
            <s.icon className="w-8 h-8 text-accent mb-4" />
            <h3 className="font-heading text-xl font-semibold uppercase mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 flex-1">{s.description}</p>
            <div className="flex items-center justify-between mb-4">
              <span className="font-heading text-lg font-bold">From {s.price}</span>
              <span className="text-muted-foreground text-sm">{s.duration}</span>
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent text-accent-foreground font-heading text-sm uppercase tracking-wide px-4 py-2.5 rounded-md hover:bg-accent/90 transition-colors"
            >
              Book Now
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
