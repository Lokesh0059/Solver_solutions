'use client';

import * as React from 'react';
import { useInView } from 'framer-motion';

export function AnimatedCounter({
  value,
  suffix = '',
  duration = 2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * value);
      setDisplay(start);
      if (progress < 1) requestAnimationFrame(animate);
      else setDisplay(value);
    };
    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  const formatted = display >= 1000
    ? new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(display)
    : display.toLocaleString();

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}
