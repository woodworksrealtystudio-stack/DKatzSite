'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone/20 bg-navy text-parchment">
      <div className="max-w-7xl mx-auto px-gutter py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="w-10 h-10 relative">
              <Image
                src="/logo-white.png"
                alt="D.F. Katz Law Firm"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-parchment/70 font-light">
              Criminal defense and corporate law in Atlanta, Georgia.
            </p>
          </div>

          {/* Practice Areas */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-gold font-medium">Practice Areas</p>
            <ul className="space-y-2">
              <li>
                <Link href="/practice-areas/criminal-defense" className="text-sm text-parchment/70 hover:text-gold transition-colors">
                  Criminal Defense
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/business-privacy" className="text-sm text-parchment/70 hover:text-gold transition-colors">
                  Business & Privacy
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="text-sm text-parchment/70 hover:text-gold transition-colors">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-gold font-medium">About</p>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-parchment/70 hover:text-gold transition-colors">
                  David Katz
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-parchment/70 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-gold font-medium">Contact</p>
            <ul className="space-y-2 text-sm">
              <li className="text-parchment/70">
                Atlanta, Georgia
              </li>
              <li>
                <a
                  href="tel:+1-404-555-0123"
                  className="text-parchment/70 hover:text-gold transition-colors"
                >
                  (404) 555-0123
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-parchment/50">
          <p>&copy; {year} The D.F. Katz Law Firm, LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
