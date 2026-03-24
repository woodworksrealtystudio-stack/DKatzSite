import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Criminal Defense - The D.F. Katz Law Firm',
  description: 'Serious felony defense for violent crimes, drug trafficking, firearm offenses, and white-collar matters.',
};

export default function CriminalDefense() {
  const services = [
    'Violent Crimes Defense',
    'Drug Trafficking',
    'Firearm Offenses',
    'White-Collar Criminal Defense',
    'Jury Trial Representation',
    'Federal Charges',
  ];

  return (
    <main className="bg-parchment">
      <Header />
      <section className="pt-32 pb-24 px-gutter">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h1 className="font-serif text-display text-navy mb-4">Criminal Defense</h1>
            <p className="text-xl text-slate/75 font-light">
              Aggressive representation for serious felony charges throughout Georgia
            </p>
          </div>

          <div className="prose prose-invert max-w-none text-slate/75 space-y-8">
            <p className="text-lg leading-relaxed">
              Mr. Katz maintains an active criminal defense practice focused on representing individuals facing serious
              felony charges throughout Georgia, including violent crimes, drug trafficking, firearm offenses, and
              high-stakes white-collar matters.
            </p>

            <h2 className="font-serif text-2xl text-navy mt-12">Why David</h2>
            <p>
              His ability to manage both high-level corporate matters and critical criminal cases reflects deep legal
              experience, discipline, and strategic versatility. More importantly, his background as a former felony
              prosecutor gives him insight into how the government builds its case—and how to counter it.
            </p>

            <p className="text-lg italic border-l-4 border-gold pl-6 py-3">
              He knows how the government builds its case, because he built them.
            </p>

            <h2 className="font-serif text-2xl text-navy mt-12">Prosecutor Background</h2>
            <p>
              As a felony prosecutor, Mr. Katz tried dozens of jury cases. He gained firsthand insight into prosecutorial
              strategy, evidentiary challenges, and the dynamics of the courtroom. That experience now strengthens his
              advocacy for clients facing prosecution, enabling him to anticipate how the government will build its case
              and how best to counter it.
            </p>

            <h2 className="font-serif text-2xl text-navy mt-12">Areas of Focus</h2>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-gold flex-shrink-0">→</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-serif text-2xl text-navy mt-12">Our Approach</h2>
            <p>
              At The D.F. Katz Law Firm, we don't just defend cases. We defend people—their freedom, their futures, and
              their dignity. We believe that every person deserves a defense built on strategy, passion, and relentless
              advocacy.
            </p>

            <p>
              We prepare, we challenge, and we fight. There are no shortcuts, no pressure to take weak plea deals, and no
              compromises on your defense.
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-stone">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gold text-navy rounded-lg font-medium hover:bg-gold-light transition-all duration-300 hover:shadow-lg"
            >
              Schedule a Consultation →
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
