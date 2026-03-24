'use client';

import Image from 'next/image';
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
    <section className="min-h-[100dvh] pt-24 pb-16 px-gutter overflow-hidden">
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
              <p className="text-sm tracking-widest text-taupe uppercase mb-4">
                AI Systems for Real Estate
              </p>
              <h1 className="font-serif text-hero leading-none mb-6">
                Set Up Systems That Work.
              </h1>
              <p className="text-lg text-charcoal/75 leading-relaxed max-w-[50ch] font-light">
                Help your broker group automate the repetitive work and focus on what matters:
                closing deals and building relationships.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-sm text-charcoal/60">
                From lead management to document processing, we build AI systems tailored to your
                business.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-clay text-white rounded-lg font-medium hover:bg-clay/90 transition-all duration-300 hover:shadow-lg">
                Schedule a Consultation
              </button>
              <button className="px-8 py-4 border border-taupe text-taupe hover:bg-taupe/5 rounded-lg font-medium transition-all duration-300">
                See Our Work
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-stone/30 space-y-3"
            >
              <p className="text-xs uppercase tracking-widest text-taupe/70">Trusted by</p>
              <div className="flex gap-8 text-sm text-charcoal/60">
                <span>Independent Brokers</span>
                <span>Broker Groups</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Asymmetric Image */}
          <motion.div variants={imageVariants} className="relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/headshot.png"
                alt="Eli Bock, Founder"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/10" />
            </div>

            {/* Floating accent element */}
            <motion.div
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-sage/10 rounded-full blur-3xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -top-16 -left-16 w-40 h-40 bg-clay/5 rounded-full blur-3xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
