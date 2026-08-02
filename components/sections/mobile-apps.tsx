'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mobileApps } from '@/lib/data';
import { cn } from '@/lib/utils';

export function MobileApps() {
  return (
    <section id="apps" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
          >
            Mobile Apps
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Your Business in Your Pocket
          </h2>
          <p className="mt-4 text-muted-foreground text-lg text-balance">
            Powerful mobile apps for Android. Manage your business on the go with full functionality.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mobileApps.map((app, i) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="glass-card p-6 text-center hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2">
                {/* Phone Mockup */}
                <div className="relative mx-auto w-40 h-72 mb-6">
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary to-accent p-1 shadow-2xl group-hover:scale-105 transition-transform">
                    <div className="w-full h-full rounded-[1.75rem] bg-card overflow-hidden relative">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground/90 rounded-b-2xl z-10" />
                      {/* Screen content */}
                      <div className="pt-8 px-3 h-full flex flex-col">
                        <div className={cn('w-12 h-12 rounded-xl bg-gradient-to-br mx-auto flex items-center justify-center mb-3', app.gradient)}>
                          <app.icon className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-xs font-semibold text-center text-foreground mb-3">{app.name}</p>
                        {/* Mini screenshot */}
                        <div className="flex-1 space-y-2">
                          {app.features.slice(0, 4).map((f, idx) => (
                            <div key={f} className="flex items-center gap-1.5 p-1.5 rounded-lg bg-muted/50">
                              <div className={cn('w-5 h-5 rounded bg-gradient-to-br flex items-center justify-center', app.gradient)}>
                                <Check className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-[10px] text-foreground/70 truncate">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="font-heading text-lg font-bold mb-2 text-foreground">{app.name}</h3>
                <p className="text-xs text-muted-foreground mb-4">{app.description}</p>

                {/* Android badge */}
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-semibold mb-4">
                  <Star className="w-3 h-3 fill-current" />
                  Android Available
                </div>

                {/* Google Play button */}
                <Button size="sm" className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90 group/btn">
                  <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.29-.712V2.526c0-.265.105-.521.29-.712zM14.5 12.708L17.25 15.46l-12.5 7.062L14.5 12.708zm0-1.416L4.75 3.478l12.5 7.062-2.75 2.752zM18.25 8.75l-2.75 2.75L18.25 14.25l3-1.69c.5-.28.5-1.01 0-1.29l-3-1.69z"/>
                  </svg>
                  Google Play
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
