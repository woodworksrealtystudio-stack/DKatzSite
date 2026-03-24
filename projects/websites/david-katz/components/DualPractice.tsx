'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from '@/components/hooks/useScroll';
import { useRef } from 'react';

export default function DualPractice() {
  const { ref, inView } = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

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
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Criminal Defense */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl bg-white border border-stone hover:border-gold/20 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">⚖️</span>
            </div>
            <h3 className="font-serif text-2xl mb-3 text-navy">Criminal Defense</h3>
            <p className="text-slate/75 leading-relaxed mb-6">
              Aggressive representation for serious felony charges including violent crimes, drug trafficking,
              firearm offenses, and high-stakes white-collar matters throughout Georgia.
            </p>
            <Link
              href="/practice-areas/criminal-defense"
              className="text-gold font-medium hover:text-gold-light transition-colors inline-flex items-center gap-2"
            >
              Learn More →
            </Link>
          </motion.div>

          {/* Business & Privacy Law */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl bg-white border border-stone hover:border-gold/20 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="font-serif text-2xl mb-3 text-navy">Business & Privacy Law</h3>
            <p className="text-slate/75 leading-relaxed mb-6">
              Strategic counsel for C-suite executives on privacy, data security, regulatory compliance,
              incident response, and corporate governance.
            </p>
            <Link
              href="/practice-areas/business-privacy"
              className="text-gold font-medium hover:text-gold-light transition-colors inline-flex items-center gap-2"
            >
              Learn More →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
