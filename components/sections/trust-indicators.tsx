'use client';

import { motion } from 'framer-motion';
import { Flag } from 'lucide-react';
import { stats } from '@/lib/data';
import { AnimatedCounter } from '@/components/animated-counter';

export function TrustIndicators() {
  return (
    <section className="relative -mt-8 z-10">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 sm:p-8 shadow-xl shadow-primary/5"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center group"
              >
                <div className="inline-flex w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-border flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Flag className="w-4 h-4 text-orange-500" />
            <span>Proudly <strong className="text-foreground">Made in Nepal</strong> · Serving the world</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
