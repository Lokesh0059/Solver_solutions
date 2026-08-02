'use client';

import { motion } from 'framer-motion';
import { industries } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Industries() {
  return (
    <section id="industries" className="section-padding relative">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4"
          >
            Industries Served
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Solutions for 126+ Industries
          </h2>
          <p className="mt-4 text-muted-foreground text-lg text-balance">
            From local shops to global enterprises — our ERP adapts to your industry.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={cn(
                'group relative p-6 rounded-2xl border border-border hover:border-transparent transition-all duration-300 hover:-translate-y-1 cursor-default overflow-hidden',
                industry.bgColor
              )}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className={cn(
                  'inline-flex w-12 h-12 rounded-xl items-center justify-center mb-3 bg-white dark:bg-slate-800 shadow-md group-hover:scale-110 transition-transform'
                )}>
                  <industry.icon className={cn('w-6 h-6', industry.color)} />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{industry.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
