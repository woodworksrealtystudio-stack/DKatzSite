import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Practice Areas - The D.F. Katz Law Firm',
  description: 'Criminal defense and business law practice areas.',
};

export default function PracticeAreas() {
  return (
    <main className="bg-parchment">
      <Header />
      <section className="pt-32 pb-24 px-gutter">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-display text-navy mb-8">Practice Areas</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Criminal Defense */}
            <Link href="/practice-areas/criminal-defense" className="group">
              <div className="p-8 rounded-xl bg-white border border-stone hover:border-gold/30 hover:shadow-lg transition-all duration-300 h-full">
                <h2 className="font-serif text-2xl text-navy mb-4 group-hover:text-gold transition-colors">
                  Criminal Defense
                </h2>
                <p className="text-slate/75 leading-relaxed mb-6">
                  Aggressive representation for serious felony charges, including violent crimes, drug trafficking,
                  firearm offenses, and high-stakes white-collar matters throughout Georgia.
                </p>
                <span className="text-gold font-medium group-hover:translate-x-1 transition-transform inline-block">
                  Learn More →
                </span>
              </div>
            </Link>

            {/* Business & Privacy Law */}
            <Link href="/practice-areas/business-privacy" className="group">
              <div className="p-8 rounded-xl bg-white border border-stone hover:border-gold/30 hover:shadow-lg transition-all duration-300 h-full">
                <h2 className="font-serif text-2xl text-navy mb-4 group-hover:text-gold transition-colors">
                  Business & Privacy Law
                </h2>
                <p className="text-slate/75 leading-relaxed mb-6">
                  Strategic counsel for C-Suite executives on privacy, data security, regulatory compliance,
                  incident response, and corporate governance.
                </p>
                <span className="text-gold font-medium group-hover:translate-x-1 transition-transform inline-block">
                  Learn More →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
