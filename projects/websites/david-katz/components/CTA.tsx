'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from './hooks/useScroll';

export default function CTA() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="contact" className="py-24 px-gutter bg-navy" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="space-y-4">
            <h2 className="font-serif text-section leading-tight text-white">
              Ready to Talk?
            </h2>
            <p className="text-lg text-parchment/80 font-light leading-relaxed">
              Let's discuss your legal needs and how we can help. Free consultation.
            </p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-gold text-navy rounded-lg font-medium hover:bg-gold-light transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center"
            >
              Schedule Consultation
            </Link>
            <a
              href="tel:+1-404-555-0123"
              className="px-8 py-4 border border-gold text-gold hover:bg-gold/10 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center"
            >
              Call Now
            </a>
          </motion.div>

          <motion.div
            className="pt-12 border-t border-gold/20"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-sm text-parchment/50">
              Based in Atlanta, Georgia. Serving clients throughout the state and beyond.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
