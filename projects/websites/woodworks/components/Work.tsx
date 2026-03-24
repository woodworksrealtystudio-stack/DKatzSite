'use client';

import { motion } from 'framer-motion';
import { useInView } from './hooks/useScroll';

const projects = [
  {
    title: 'Instagram Content Automation',
    client: 'Real Estate Agent',
    description:
      'Built an AI-powered system that generates and schedules Instagram content automatically. Eliminated 5 hours/week of manual work.',
    results: ['+300% posting consistency', 'Automated content pipeline', '4x faster content creation'],
  },
  {
    title: 'Lead Distribution System',
    client: 'Broker Group (12 agents)',
    description:
      'Custom AI system that analyzes incoming leads and distributes them to the best agent based on specialty and availability.',
    results: ['50% faster lead assignment', 'Reduced manual coordination', 'Higher agent satisfaction'],
  },
  {
    title: 'Document Processing Pipeline',
    client: 'Independent Broker',
    description:
      'Automated extraction and organization of transaction documents. System categorizes, stores, and surfaces documents when needed.',
    results: ['8 hours/week saved', 'Zero filing errors', 'Searchable document system'],
  },
];

export default function Work() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="work" className="py-24 px-gutter" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-widest text-taupe uppercase">Case Studies</p>
          <h2 className="font-serif text-section">Systems We've Built</h2>
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start pb-12 border-b border-stone/20 last:border-b-0 last:pb-0">
                {/* Project Info */}
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-clay mb-2">
                      {project.client}
                    </p>
                    <h3 className="font-serif text-2xl text-charcoal mb-4 group-hover:text-clay transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-charcoal/70 leading-relaxed max-w-[60ch] font-light">
                    {project.description}
                  </p>
                </div>

                {/* Results */}
                <div className="bg-ivory rounded-xl p-6 lg:p-8 space-y-3">
                  <p className="text-xs uppercase tracking-widest text-taupe font-medium">
                    Results
                  </p>
                  {project.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-clay mt-2 flex-shrink-0" />
                      <p className="text-sm text-charcoal/80 font-medium">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
