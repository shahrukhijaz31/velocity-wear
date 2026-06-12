import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProductShowcase from '@/components/ProductShowcase';
import Process from '@/components/Process';
import TrustStats from '@/components/TrustStats';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <WhyChooseUs />
        <ProductShowcase />
        <Process />
        <TrustStats />
        <Gallery />
        <Testimonials />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
