'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-parchment/95 backdrop-blur border-b border-stone/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-gutter py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-12 h-12 relative">
            <Image
              src="/logo.png"
              alt="D.F. Katz Law Firm"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 text-sm">
            <li>
              <Link href="/practice-areas" className="text-slate hover:text-gold transition-colors font-medium">
                Practice Areas
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-slate hover:text-gold transition-colors font-medium">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate hover:text-gold transition-colors font-medium">
                Contact
              </Link>
            </li>
          </ul>

          <Link
            href="/contact"
            className="px-6 py-3 bg-gold text-white rounded-lg text-sm font-medium hover:bg-gold-light transition-all duration-300 hover:shadow-lg"
          >
            Free Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
}
