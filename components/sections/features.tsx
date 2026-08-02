'use client';

import { motion } from 'framer-motion';
import { features } from '@/lib/data';
import { cn } from '@/lib/utils';

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="container-max px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
          >
            Powerful Features
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Everything You Need in One Platform
          </h2>
          <p className="mt-4 text-muted-foreground text-lg text-balance">
            A comprehensive suite of tools designed to streamline every aspect of your business.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                'group relative rounded-2xl glass-card p-6 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden',
                feature.span || ''
              )}
            >
              {/* Gradient glow on hover */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="inline-flex w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>

                {/* Large feature gets extra visual */}
                {feature.span?.includes('row-span-2') && (
                  <div className="mt-auto pt-4">
                    <div className="flex items-end gap-2 h-20">
                      {[60, 80, 45, 90, 70, 100, 55].map((h, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.05, duration: 0.5 }}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-primary/40 to-accent/40 group-hover:from-primary group-hover:to-accent transition-colors"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
