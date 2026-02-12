import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceArea from "@/components/ServiceArea";
import Reviews from "@/components/Reviews";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import Header from "@/components/Header";

const Index = () => (
  <main id="home">
    <Header />
    <div className="pt-16 sm:pt-[68px]">
      <Hero />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <ServiceArea />
      <Reviews />
      <CallToAction />
      <Footer />
      <StickyBar />
      {/* Bottom padding for sticky bar on mobile */}
      <div className="h-16 md:hidden" />
    </div>
  </main>
);

export default Index;
