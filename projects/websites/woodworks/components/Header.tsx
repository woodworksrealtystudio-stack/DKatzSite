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
          ? 'bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/60 border-b border-stone/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-gutter py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 relative">
            <Image
              src="/assets/logo.png"
              alt="Woodworks Realty Studio"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-serif text-lg tracking-tight hidden sm:inline">
            Woodworks
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 text-sm">
            <li>
              <a href="#services" className="text-charcoal/70 hover:text-charcoal transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#work" className="text-charcoal/70 hover:text-charcoal transition-colors">
                Work
              </a>
            </li>
            <li>
              <a href="#contact" className="text-charcoal/70 hover:text-charcoal transition-colors">
                Contact
              </a>
            </li>
          </ul>

          <a
            href="#contact"
            className="px-6 py-3 bg-clay text-white rounded-lg text-sm font-medium hover:bg-clay/90 transition-all duration-300 hover:shadow-lg"
          >
            Book a Call
          </a>
        </div>
      </nav>
    </header>
  );
}
