'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone/20 bg-cream">
      <div className="max-w-7xl mx-auto px-gutter py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 relative">
                <Image
                  src="/assets/logo.png"
                  alt="Woodworks"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-sm font-medium">Woodworks</span>
            </div>
            <p className="text-xs text-charcoal/60 font-light">
              AI systems consulting for independent real estate brokers.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-taupe font-medium">Services</p>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-charcoal/70 hover:text-clay transition-colors">
                  Systems Setup
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-charcoal/70 hover:text-clay transition-colors">
                  AI Consulting
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-charcoal/70 hover:text-clay transition-colors">
                  Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Work */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-taupe font-medium">Work</p>
            <ul className="space-y-2">
              <li>
                <a href="#work" className="text-sm text-charcoal/70 hover:text-clay transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-charcoal/70 hover:text-clay transition-colors">
                  Get Started
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-taupe font-medium">Contact</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:eli@woodworksrealty.studio"
                  className="text-sm text-charcoal/70 hover:text-clay transition-colors break-all"
                >
                  eli@woodworksrealty.studio
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="text-sm text-charcoal/70 hover:text-clay transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-stone/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-charcoal/50">
          <p>&copy; {year} Woodworks Realty Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-clay transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-clay transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
