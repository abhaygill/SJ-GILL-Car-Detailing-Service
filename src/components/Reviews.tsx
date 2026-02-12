import { Star } from "lucide-react";

const reviews = [
  { name: "James R.", suburb: "Cranbourne", text: "Absolutely spotless! SJ GILL did a full detail on my SUV and it looks brand new. Highly recommend their mobile service." },
  { name: "Priya S.", suburb: "Berwick", text: "Super convenient — they came to my workplace and my car was gleaming when I finished. Great value for the price." },
  { name: "Michael T.", suburb: "Narre Warren", text: "Best detailing I've ever had. The interior deep clean was incredible. Will be a regular customer for sure." },
  { name: "Sarah L.", suburb: "Pakenham", text: "Professional, friendly, and the results speak for themselves. My headlights look brand new after the restoration!" },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-2">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
    ))}
  </div>
);

const Reviews = () => (
  <section id="reviews" className="py-20 bg-[#0b1f3a] text-white">
    <div className="container">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-center uppercase tracking-tight mb-12">
        What Our <span className="text-accent">Customers Say</span>
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
        {reviews.map((r) => (
          <div key={r.name} className="bg-secondary/10 border border-border/20 rounded-lg p-5">
            <Stars />
            <p className="text-primary-foreground/80 text-sm mb-4 italic">"{r.text}"</p>
            <p className="font-heading text-sm uppercase">
              {r.name} <span className="text-muted-foreground font-body normal-case">– {r.suburb}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
