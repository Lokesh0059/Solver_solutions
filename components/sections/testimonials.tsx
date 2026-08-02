'use client';

import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { cn } from '@/lib/utils';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-primary/10 via-transparent to-transparent" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-semibold mb-4"
          >
            Testimonials
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Loved by Businesses Worldwide
          </h2>
          <p className="mt-4 text-muted-foreground text-lg text-balance">
            See what our 500,000+ customers have to say about their experience.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card p-6 h-full flex flex-col"
                >
                  <Quote className="w-8 h-8 text-primary/30 mb-3" />

                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-sm text-foreground/80 leading-relaxed flex-1">
                    &ldquo;{t.content}&rdquo;
                  </p>

                  <div className="mt-5 pt-4 border-t border-border flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.avatar}
                      alt={t.name}
                      loading="lazy"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {t.role} · {t.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
