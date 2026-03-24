import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-cream">
      <Header />
      <Hero />
      <Services />
      <Work />
      <CTA />
      <Footer />
    </main>
  );
}
