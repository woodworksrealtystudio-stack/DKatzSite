import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Business & Privacy Law - The D.F. Katz Law Firm',
  description: 'Privacy law, data security, compliance, and corporate counsel for executives and boards.',
};

export default function BusinessPrivacy() {
  const services = [
    { title: 'Privacy & Data Security', desc: 'Comprehensive privacy program design and compliance evaluation.' },
    { title: 'Information Governance', desc: 'Data retention, deletion policies, and governance models.' },
    { title: 'Regulatory Compliance', desc: 'Federal and state privacy law compliance (GDPR, CCPA, HIPAA, etc.).' },
    { title: 'Incident Response', desc: 'Breach containment, investigation, and regulatory response.' },
    { title: 'M&A Due Diligence', desc: 'Privacy and security assessment for corporate transactions.' },
    { title: 'Corporate Counsel', desc: 'Strategic advisory to C-Suite and General Counsel on legal risk.' },
  ];

  return (
    <main className="bg-parchment">
      <Header />
      <section className="pt-32 pb-24 px-gutter">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h1 className="font-serif text-display text-navy mb-4">Business & Privacy Law</h1>
            <p className="text-xl text-slate/75 font-light">
              Strategic counsel for C-Suite executives navigating privacy, compliance, and corporate risk
            </p>
          </div>

          <div className="prose prose-invert max-w-none text-slate/75 space-y-8">
            <p className="text-lg leading-relaxed">
              Mr. Katz serves as outside counsel and trusted advisor to the C-Suite and General Counsel of companies
              navigating complex regulatory environments and organizational risk. He advises on privacy and data security,
              information governance, vendor management, corporate governance, regulatory compliance, crisis management,
              and ethics.
            </p>

            <h2 className="font-serif text-2xl text-navy mt-12">Experience</h2>
            <p>
              Before joining private practice, Mr. Katz served as senior legal counsel at a Fortune 1000 publicly traded
              company, where he advised on corporate legal risk, compliance, and governance. He has represented clients
              through cyber incidents, breach investigations, regulatory investigations, and mergers and acquisitions.
            </p>

            <h2 className="font-serif text-2xl text-navy mt-12">Services & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              {services.map((service, idx) => (
                <div key={idx} className="p-6 bg-white rounded-lg border border-stone/20">
                  <h3 className="font-serif text-lg text-navy mb-2">{service.title}</h3>
                  <p className="text-sm text-slate/70">{service.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl text-navy mt-12">Regulatory & Compliance Expertise</h2>
            <p>
              We evaluate compliance with all U.S. federal and state privacy and information management requirements,
              including:
            </p>
            <ul className="space-y-2 list-none">
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0">•</span>
                <span>Gramm-Leach-Bliley Act (GLBA)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0">•</span>
                <span>Health Insurance Portability and Accountability Act (HIPAA)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0">•</span>
                <span>California Consumer Privacy Act (CCPA)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0">•</span>
                <span>General Data Protection Regulation (GDPR)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0">•</span>
                <span>And all other federal and state privacy requirements</span>
              </li>
            </ul>

            <h2 className="font-serif text-2xl text-navy mt-12">Our Approach</h2>
            <p>
              We provide practical advice on all aspects of privacy, data management, cyber risk and liability, incident
              response, and data management. We work closely with your team to design privacy programs, evaluate
              compliance, and manage risk.
            </p>

            <p>
              Our goal is to help you navigate complex legal requirements, mitigate organizational risk, and focus on
              your business.
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
