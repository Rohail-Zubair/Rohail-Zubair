'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export default function AnimatedCounter({ value, className = '' }: AnimatedCounterProps) {
  const [displayed, setDisplayed] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValue();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateValue = () => {
    const numericMatch = value.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplayed(value);
      return;
    }

    const numericPart = parseFloat(numericMatch[0]);
    const prefix = value.slice(0, numericMatch.index);
    const suffix = value.slice((numericMatch.index ?? 0) + numericMatch[0].length);
    const isDecimal = numericMatch[0].includes('.');
    const duration = 1500;
    const steps = 60;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = numericPart * eased;
      const formatted = isDecimal ? currentValue.toFixed(2) : Math.floor(currentValue).toString();
      setDisplayed(`${prefix}${formatted}${suffix}`);

      if (current >= steps) {
        clearInterval(timer);
        setDisplayed(value);
      }
    }, stepDuration);
  };

  return (
    <span ref={ref} className={`metric-number ${className}`}>
      {displayed}
    </span>
  );
}
