import { MapPin, Wrench, Eye, DollarSign, ThumbsUp } from "lucide-react";

const reasons = [
  { icon: MapPin, title: "Mobile Service – We Come to You", desc: "No need to drive anywhere. We bring our equipment to your doorstep." },
  { icon: Wrench, title: "Professional Equipment & Products", desc: "We use industry-leading tools and premium detailing products." },
  { icon: Eye, title: "Attention to Detail", desc: "Every corner, crevice and surface is treated with precision care." },
  { icon: DollarSign, title: "Affordable Packages", desc: "Premium quality detailing that won't break the bank." },
  { icon: ThumbsUp, title: "100% Customer Satisfaction", desc: "We're not done until you're completely happy with the result." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="section-padding section-muted">
    <div className="container">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-center uppercase tracking-tight mb-12">
        Why Choose <span className="text-accent">SJ GILL?</span>
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        {reasons.map((r) => (
          <div key={r.title} className="flex gap-4 items-start">
            <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <r.icon className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-heading text-base font-semibold uppercase mb-1">{r.title}</h3>
              <p className="text-muted-foreground text-sm">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
