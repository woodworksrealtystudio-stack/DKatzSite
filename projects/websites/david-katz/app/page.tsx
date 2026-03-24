import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DualPractice from '@/components/DualPractice';
import WhyDavid from '@/components/WhyDavid';
import About from '@/components/About';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-parchment">
      <Header />
      <Hero />
      <DualPractice />
      <WhyDavid />
      <About />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
