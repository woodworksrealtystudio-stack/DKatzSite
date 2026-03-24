import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About David Katz - The D.F. Katz Law Firm',
  description: 'Learn about David F. Katz, a lawyer with dual expertise in criminal defense and corporate law.',
};

export default function About() {
  return (
    <main className="bg-parchment">
      <Header />
      <section className="pt-32 pb-24 px-gutter">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div>
              <h1 className="font-serif text-display text-navy mb-4">David F. Katz</h1>
              <p className="text-xl text-slate/75 font-light">Managing Partner, The D.F. Katz Law Firm, LLC</p>
            </div>

            <div className="space-y-8 text-slate/75 leading-relaxed">
              <p>
                David Katz uniquely balances a dual practice in both business law and criminal defense — a rare combination
                that reflects deep legal experience, discipline, and strategic versatility.
              </p>

              <h2 className="font-serif text-2xl text-navy mt-12">Criminal Defense Practice</h2>
              <p>
                Mr. Katz maintains an active criminal defense practice focused on the representation of individuals facing
                serious felony charges throughout Georgia, including violent crimes, drug trafficking, firearm offenses, and
                high-stakes white-collar matters. His ability to manage both high-level corporate matters and critical criminal
                cases reflects his deep legal experience and strategic versatility.
              </p>

              <h2 className="font-serif text-2xl text-navy mt-12">Business & Corporate Law Practice</h2>
              <p>
                As outside counsel and trusted advisor to the C-Suite and General Counsel, Mr. Katz advises clients on privacy
                and data security, information governance, vendor management, corporate governance, regulatory compliance, crisis
                management, and ethics. He serves companies navigating complex regulatory environments and organizational risk.
              </p>

              <h2 className="font-serif text-2xl text-navy mt-12">Background & Experience</h2>
              <div className="space-y-4">
                <p>
                  <span className="text-gold font-medium">Former Prosecutor:</span> Mr. Katz's perspective is informed by his
                  prior service as a felony prosecutor, where he tried dozens of jury cases and gained firsthand insight into
                  prosecutorial strategy, evidentiary challenges, and the dynamics of the courtroom. That experience now strengthens
                  his advocacy for clients facing prosecution, enabling him to anticipate how the government will build its case and
                  how best to counter it.
                </p>
                <p>
                  <span className="text-gold font-medium">Fortune 1000 Counsel:</span> Before joining private practice, Mr. Katz
                  served as senior legal counsel at a Fortune 1000 publicly traded company, where he advised on corporate legal risk,
                  compliance, and governance.
                </p>
                <p>
                  <span className="text-gold font-medium">Military Service:</span> Judge Advocate in the United States Army Reserve.
                </p>
                <p>
                  <span className="text-gold font-medium">Thought Leadership:</span> He frequently speaks and publishes on topics at
                  the intersection of technology, law, privacy, and justice. Follow him on Twitter at @KatzFDavid.
                </p>
              </div>

              <h2 className="font-serif text-2xl text-navy mt-12">Education</h2>
              <ul className="space-y-2">
                <li className="flex gap-3">
                  <span className="text-gold">•</span>
                  <span>J.D., University of Baltimore School of Law (1999)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">•</span>
                  <span>B.A., University of Georgia (1996)</span>
                </li>
              </ul>

              <h2 className="font-serif text-2xl text-navy mt-12">Philosophy</h2>
              <p>
                The D.F. Katz Law Firm is designed to deliver clear guidance, decisive action, and tailored solutions—without
                unnecessary noise or inefficiency. Drawing on his background as a former prosecutor and his experience advising
                companies, executives, and boards, David provides practical judgment and rigorous advocacy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
