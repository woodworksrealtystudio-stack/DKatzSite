'use client';

import { motion } from 'framer-motion';
import { useInView } from './hooks/useScroll';

export default function CTA() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="contact" className="py-24 px-gutter bg-ivory" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="space-y-4">
            <h2 className="font-serif text-section leading-tight">
              Ready to Set Up Systems That Actually Work?
            </h2>
            <p className="text-lg text-charcoal/70 font-light leading-relaxed">
              Let's talk about your broker group's biggest pain points and how AI can solve them.
              No sales pitch, no fluff—just a real conversation about what's possible.
            </p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="https://cal.com"
              className="px-8 py-4 bg-clay text-white rounded-lg font-medium hover:bg-clay/90 transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center"
            >
              Schedule a Call
            </a>
            <a
              href="mailto:eli@woodworksrealty.studio"
              className="px-8 py-4 border border-taupe text-taupe hover:bg-taupe/5 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center"
            >
              Send an Email
            </a>
          </motion.div>

          <motion.div
            className="pt-12 border-t border-stone/20"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-sm text-charcoal/50">
              Based in Atlanta, working with brokers across the US.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
