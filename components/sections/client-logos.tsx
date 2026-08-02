'use client';

import { clientLogos } from '@/lib/data';

export function ClientLogos() {
  const logos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-12 overflow-hidden">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
          Trusted by leading businesses worldwide
        </p>
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee gap-12 w-max">
            {logos.map((logo, i) => (
              <div
                key={`${logo}-${i}`}
                className="flex items-center gap-2 shrink-0 opacity-60 hover:opacity-100 transition-opacity cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="font-heading font-bold text-sm text-primary">
                    {logo.charAt(0)}
                  </span>
                </div>
                <span className="font-heading font-semibold text-lg text-foreground/70 whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}