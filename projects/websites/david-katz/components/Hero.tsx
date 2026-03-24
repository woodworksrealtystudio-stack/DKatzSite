'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const imageVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="min-h-[100dvh] pt-24 pb-16 px-gutter overflow-hidden bg-navy">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <p className="text-sm tracking-widest text-gold uppercase mb-4">
                The D.F. Katz Law Firm
              </p>
              <h1 className="font-serif text-hero leading-none mb-6 text-white">
                Practical Judgment.<br />Decisive Advocacy.
              </h1>
              <p className="text-lg text-parchment/85 leading-relaxed max-w-[50ch] font-light">
                Criminal defense and corporate counsel for clients facing complex legal challenges.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link href="/practice-areas/criminal-defense" className="px-8 py-4 bg-gold text-navy rounded-lg font-medium hover:bg-gold-light transition-all duration-300 hover:shadow-lg inline-block text-center">
                Criminal Defense
              </Link>
              <Link href="/practice-areas/business-privacy" className="px-8 py-4 border border-gold text-gold hover:bg-gold/10 rounded-lg font-medium transition-all duration-300 inline-block text-center">
                Business Counsel
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Headshot */}
          <motion.div variants={imageVariants} className="relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/headshot-2021.jpg"
                alt="David F. Katz"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating accent */}
            <motion.div
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-gold/10 rounded-full blur-3xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
