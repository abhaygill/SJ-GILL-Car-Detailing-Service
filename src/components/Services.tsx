import { Droplets, Sparkles, Car, Paintbrush, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Exterior Wash & Shine",
    description:
      "Full hand wash, wheel cleaning, tire dressing and exterior spray wax for a showroom shine.",
    price: "$49",
    duration: "~45 min",
    image:
      "https://img.freepik.com/free-photo/beautiful-car-washing-service_23-2149212208.jpg",
  },
  {
    icon: Sparkles,
    title: "Interior Deep Cleaning",
    description:
      "Vacuum, dashboard wipe, seat shampoo, and odor elimination for a fresh, clean cabin.",
    price: "$69",
    duration: "~60 min",
    image:
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Car,
    title: "Full Detail Package",
    description:
      "Complete interior and exterior detailing for a total car transformation inside and out.",
    price: "$149",
    duration: "~2.5 hrs",
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Paintbrush,
    title: "Paint Correction & Polishing",
    description:
      "Machine polish to remove swirl marks, scratches and restore paint clarity and gloss.",
    price: "$199",
    duration: "~3 hrs",
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Lightbulb,
    title: "Headlight Restoration",
    description:
      "Restore cloudy, yellowed headlights to crystal-clear condition for improved visibility.",
    price: "$59",
    duration: "~30 min",
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80",
  },
];

const Services = () => (
  <section id="services" className="py-20 bg-[#0b1f3a] text-white">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-center uppercase tracking-tight mb-14">
        Our Car Detailing{" "}
        <span className="text-red-500">Services</span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="relative overflow-hidden rounded-2xl shadow-xl group min-h-[260px] border border-white/10"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url(${s.image})` }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/50" />

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold uppercase leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs text-white/60">{s.duration}</p>
                </div>
              </div>

              <p className="text-sm text-white/80 mb-6 flex-1">
                {s.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="font-heading text-lg font-bold text-green-700">
                  From {s.price}
                </span>
                <span className="text-xs uppercase tracking-wide text-white/60">
                  Mobile Service
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Single Professional CTA */}
      <div className="text-center mt-16">
        <a
          href="#contact"
          className="inline-block bg-[#1E3A8A] hover:bg-[#1e40af] text-white font-heading uppercase tracking-wide px-10 py-4 rounded-md shadow-lg transition-colors"
        >
          Get a Free Quote
        </a>
      </div>
    </div>
  </section>
);

export default Services;
