'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from '@/components/hooks/useScroll';
import { useRef } from 'react';

export default function About() {
  const { ref, inView } = useInView();

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="py-24 px-gutter bg-parchment" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.div variants={itemVariants}>
            <p className="text-sm tracking-widest text-muted uppercase mb-4">About David</p>
            <h2 className="font-serif text-section text-navy mb-4">Managing Partner</h2>
            <p className="text-lg text-slate/80 leading-relaxed max-w-3xl">
              David Katz uniquely balances a dual practice in both business law and criminal defense.
              He serves as outside counsel and trusted advisor to C-Suite executives and General Counsel,
              advising on privacy, data security, compliance, and corporate governance. Simultaneously,
              he maintains an active criminal defense practice focused on serious felony charges throughout Georgia.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-serif text-lg text-navy">Experience</h3>
              <ul className="space-y-2 text-sm text-slate/75">
                <li className="flex gap-3">
                  <span className="text-gold">→</span>
                  <span>Former felony prosecutor; tried dozens of jury cases</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">→</span>
                  <span>Senior legal counsel at Fortune 1000 company</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">→</span>
                  <span>Judge Advocate in U.S. Army Reserve</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-lg text-navy">Education</h3>
              <ul className="space-y-2 text-sm text-slate/75">
                <li className="flex gap-3">
                  <span className="text-gold">→</span>
                  <span>J.D., University of Baltimore School of Law (1999)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">→</span>
                  <span>B.A., University of Georgia (1996)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">→</span>
                  <span>Speaks and publishes on law, technology, privacy, and justice</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              href="/about"
              className="inline-block px-8 py-4 bg-gold text-navy rounded-lg font-medium hover:bg-gold-light transition-all duration-300 hover:shadow-lg"
            >
              Full Biography →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
