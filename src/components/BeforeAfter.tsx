const gallery = [
  { label: "Interior Deep Clean", before: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&q=75", after: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=75" },
  { label: "Full Detail", before: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&q=75", after: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=75" },
  { label: "SUV Restoration", before: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&q=75", after: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=75" },
];

const BeforeAfter = () => (
  <section id="gallery" className="section-padding section-dark">
    <div className="container">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-center uppercase tracking-tight mb-12">
        Real Results – <span className="text-accent">Before &amp; After</span>
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {gallery.map((item) => (
          <div key={item.label} className="space-y-3">
            <span className="inline-block bg-accent text-accent-foreground font-heading text-xs uppercase tracking-wider px-3 py-1 rounded-sm">
              {item.label}
            </span>
            <div className="grid grid-cols-2 gap-2 rounded-lg overflow-hidden">
              <div className="relative">
                <img src={item.before} alt={`Before ${item.label}`} className="w-full h-40 object-cover" loading="lazy" />
                <span className="absolute bottom-1 left-1 bg-primary/80 text-primary-foreground text-[10px] uppercase px-1.5 py-0.5 rounded font-heading">Before</span>
              </div>
              <div className="relative">
                <img src={item.after} alt={`After ${item.label}`} className="w-full h-40 object-cover" loading="lazy" />
                <span className="absolute bottom-1 left-1 bg-accent/90 text-accent-foreground text-[10px] uppercase px-1.5 py-0.5 rounded font-heading">After</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfter;
