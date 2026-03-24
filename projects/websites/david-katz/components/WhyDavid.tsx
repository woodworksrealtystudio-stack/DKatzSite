'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/components/hooks/useScroll';
import { useRef } from 'react';

export default function WhyDavid() {
  const { ref, inView } = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const credentials = [
    {
      title: 'Former Prosecutor',
      description: 'Tried dozens of jury cases. Knows how the government builds its case.',
    },
    {
      title: 'Fortune 1000 Counsel',
      description: 'Senior legal counsel advising on corporate risk, compliance, and governance.',
    },
    {
      title: 'Army Reserve JAG',
      description: 'Judge Advocate with experience in military justice system and legal strategy.',
    },
    {
      title: 'Georgia-Wide Practice',
      description: 'Serves clients throughout Georgia with deep local knowledge and relationships.',
    },
  ];

  return (
    <section className="py-24 px-gutter bg-navy-light" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="font-serif text-section text-white mb-4">
            Why David
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-parchment/75 max-w-3xl mx-auto">
            A rare combination of skills and experience that informs both criminal defense and corporate counsel.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {credentials.map((cred, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 bg-white/5 border border-gold/20 rounded-lg backdrop-blur"
            >
              <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-gold font-serif text-lg">{idx + 1}</span>
              </div>
              <h3 className="font-serif text-lg text-gold mb-2">{cred.title}</h3>
              <p className="text-sm text-parchment/70 leading-relaxed">{cred.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
