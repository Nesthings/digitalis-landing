"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function AnimatedMetric({
  value,
  prefix = "",
  suffix = "",
  label,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <div ref={ref} className={className}>
      <div className="font-mono text-4xl font-semibold tracking-tight md:text-5xl">
        {prefix}
        {(reduce ? value : display).toLocaleString("es-AR")}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-fg-muted">{label}</div>
    </div>
  );
}
