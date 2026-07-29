import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import WaveDivider, { LeafDivider } from '../components/WaveDivider';

export default function Home() {
  return (
    <main id="main-content">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Services / Categories */}
      <Services />

      {/* Wave */}
      <LeafDivider topColor="#ffffff" fillColor="#f0faf3" />

      {/* 3. Why Choose Us */}
      <WhyChooseUs />

      {/* Wave */}
      <WaveDivider topColor="#f0faf3" bottomColor="#ffffff" />

      {/* 4. How It Works */}
      <HowItWorks />

      {/* Wave */}
      <LeafDivider topColor="#ffffff" fillColor="#f0faf3" />

      {/* 5. Gallery */}
      <Gallery />

      {/* Wave */}
      <WaveDivider topColor="#f0faf3" bottomColor="#ffffff" />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* Wave */}
      <LeafDivider topColor="#ffffff" fillColor="#f0faf3" />

      {/* 7. Contact / Order */}
      <Contact />
    </main>
  );
}
