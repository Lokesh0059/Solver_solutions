'use client';

import { motion } from 'framer-motion';
import { whyChooseFeatures } from '@/lib/data';
import { cn } from '@/lib/utils';

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-success/10 text-success text-sm font-semibold mb-4"
          >
            Why Choose Us
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Built for Your Success
          </h2>
          <p className="mt-4 text-muted-foreground text-lg text-balance">
            Everything you need to run your business efficiently, securely, and affordably.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {whyChooseFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group glass-card p-5 text-center hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <feature.icon className={cn('w-6 h-6', feature.color)} />
              </div>
              <h3 className="font-heading text-sm font-bold mb-1 text-foreground">{feature.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}