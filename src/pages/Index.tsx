import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceArea from "@/components/ServiceArea";
import Reviews from "@/components/Reviews";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";

const Index = () => (
  <main>
    <Hero />
    <Services />
    <BeforeAfter />
    <WhyChooseUs />
    <ServiceArea />
    <Reviews />
    <CallToAction />
    <Footer />
    <StickyBar />
    {/* Bottom padding for sticky bar on mobile */}
    <div className="h-16 md:hidden" />
  </main>
);

export default Index;
