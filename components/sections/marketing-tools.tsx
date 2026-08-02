'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { marketingTools } from '@/lib/data';
import { cn } from '@/lib/utils';

export function MarketingTools() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-10" />
      <div className="container-max px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4"
          >
            Marketing Tools
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Grow Your Reach with Smart Marketing
          </h2>
          <p className="mt-4 text-muted-foreground text-lg text-balance">
            Powerful marketing tools to find leads, engage customers, and grow your business faster.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {marketingTools.map((tool, i) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group glass-card p-6 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Animated icon */}
              <div className={cn('relative w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-5', tool.gradient)}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
                <tool.icon className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform" />
                <div className={cn('absolute inset-0 rounded-2xl bg-gradient-to-br blur-xl opacity-50 group-hover:opacity-80 transition-opacity', tool.gradient)} />
              </div>

              <h3 className="font-heading text-xl font-bold mb-2 text-foreground">{tool.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>

              <ul className="space-y-2 mb-6">
                {tool.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
                    <span className={cn('w-5 h-5 rounded-full bg-gradient-to-br flex items-center justify-center shrink-0', tool.gradient)}>
                      <Check className="w-3 h-3 text-white" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className="w-full rounded-full group/btn" variant="outline">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
