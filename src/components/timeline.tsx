"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const timeline = [
  {
    year: "2021",
    title: "El origen",
    description:
      "Nacimos como un equipo de consultoría DevOps con clientes en el país y en el exterior.",
  },
  {
    year: "2022",
    title: "Primer SaaS: Vetcore",
    description:
      "Lanzamos nuestro primer producto propio para clínicas veterinarias, hoy en producción.",
  },
  {
    year: "2023",
    title: "Gymcore y equipo propio",
    description:
      "Sumamos un segundo SaaS y consolidamos un equipo interno de producto y plataforma.",
  },
  {
    year: "2026",
    title: "Donde estamos hoy",
    description:
      "Tres líneas de negocio activas: SaaS, consultoría técnica y desarrollo a medida.",
  },
];

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative">
      {/* Línea base */}
      <div
        aria-hidden
        className="absolute left-[5px] top-1 bottom-1 w-0.5 -translate-x-1/2 rounded-full bg-border"
      />

      {/* Línea de progreso que se rellena al hacer scroll */}
      <motion.div
        aria-hidden
        style={{ scaleY: lineScale }}
        className="absolute left-[5px] top-1 bottom-1 w-0.5 -translate-x-1/2 origin-top rounded-full bg-accent"
      />

      <ol className="relative space-y-12 pl-8">
        {timeline.map((t) => (
          <li key={t.year} className="relative">
            <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
            <span className="font-mono text-sm font-semibold text-accent">{t.year}</span>
            <h3 className="mt-1 text-base font-semibold text-fg">{t.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-fg-secondary">
              {t.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}