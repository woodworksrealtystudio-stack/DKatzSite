'use client';

import { motion } from 'framer-motion';
import { useInView } from './hooks/useScroll';

const services = [
  {
    title: 'Systems Setup & Architecture',
    description:
      'We audit your current workflows, identify automation opportunities, and build custom AI systems designed specifically for your broker group.',
    points: ['Workflow analysis', 'Custom integrations', 'Team training'],
  },
  {
    title: 'AI Consulting',
    description:
      'Get guidance on where AI makes sense for your business. We help you prioritize, plan, and execute without the hype or empty promises.',
    points: ['Strategic planning', 'Tool evaluation', 'Implementation roadmap'],
  },
  {
    title: 'Automation & Integration',
    description:
      'From lead distribution to document processing, we build automations that save your team hours every week and keep systems in sync.',
    points: ['Lead management', 'Document processing', 'CRM integration'],
  },
  {
    title: 'Ongoing Support',
    description:
      'We don\'t disappear after launch. You get ongoing optimization, monitoring, and support as your business grows.',
    points: ['Performance monitoring', 'Continuous improvement', 'Dedicated support'],
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
          <p className="text-sm tracking-widest text-taupe uppercase">What We Do</p>
          <h2 className="font-serif text-section">Services Designed for Brokers</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
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
              <div className="relative p-8 lg:p-10 bg-white rounded-xl border border-stone/20 hover:border-clay/30 transition-all duration-500 hover:shadow-lg">
                {/* Accent background */}
                <div className="absolute inset-0 bg-gradient-to-br from-clay/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 mb-6 rounded-lg bg-clay/10 flex items-center justify-center group-hover:bg-clay/20 transition-colors duration-300">
                    <div className="w-6 h-6 bg-clay rounded-sm" />
                  </div>

                  <h3 className="font-serif text-xl mb-4 text-charcoal group-hover:text-clay transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-charcoal/70 text-sm leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-charcoal/60">
                        <div className="w-1 h-1 rounded-full bg-clay" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
