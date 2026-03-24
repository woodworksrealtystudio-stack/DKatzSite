'use client';

import { motion } from 'framer-motion';
import { useInView } from './hooks/useScroll';

const services = [
  {
    title: 'Privacy & Data Security',
    description: 'Comprehensive privacy program design, compliance evaluation, and data protection strategies.',
  },
  {
    title: 'Criminal Defense',
    description: 'Aggressive representation for serious felony charges and high-stakes criminal matters.',
  },
  {
    title: 'Corporate Counsel',
    description: 'Strategic advisory for C-Suite and General Counsel on legal risk and compliance.',
  },
  {
    title: 'Incident Response',
    description: 'Breach response, incident investigations, and regulatory compliance management.',
  },
  {
    title: 'M&A Due Diligence',
    description: 'Privacy and security assessment for mergers, acquisitions, and corporate transactions.',
  },
  {
    title: 'White Collar Defense',
    description: 'Defense against federal and white collar criminal charges and investigations.',
  },
];

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="services" className="py-24 px-gutter bg-ivory" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-widest text-muted uppercase">Practice Areas</p>
          <h2 className="font-serif text-section text-navy">Our Services</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative p-8 bg-white rounded-xl border border-stone/20 hover:border-gold/30 transition-all duration-500 hover:shadow-lg h-full">
                {/* Accent background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-serif text-lg mb-3 text-navy group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-slate/70 text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
