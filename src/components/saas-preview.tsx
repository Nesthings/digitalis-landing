"use client";

import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const products = [
  {
    name: "Vetcore",
    oneLiner: "Sistema de gestión para clínicas veterinarias",
    src: "/placeholders/product-vetcore.svg",
    alt: "[PLACEHOLDER: screenshot del producto Vetcore]",
    href: "#",
  },
  {
    name: "Gymcore",
    oneLiner: "Software para gimnasios y estudios de entrenamiento",
    src: "/placeholders/product-gymcore.svg",
    alt: "[PLACEHOLDER: screenshot del producto Gymcore]",
    href: "#",
  },
];

export function SaasPreview() {
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-border bg-bg-muted py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-fg text-balance md:text-4xl">
              Productos que desarrollamos in-house
            </h2>
            <p className="mt-3 text-lg text-fg-secondary text-pretty">
              Cada SaaS es software que nosotros mismos usamos para aprender cómo se
              construye bien: se opera, se mantiene y se mejora.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {products.map((product, i) => (
            <motion.a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl border border-border bg-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevation-3 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 font-mono text-lg font-bold text-accent transition-all duration-300 group-hover:scale-105">
                    {product.name.slice(0, 1)}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-fg">
                      {product.name}
                    </h3>
                    <p className="text-sm text-fg-muted">{product.oneLiner}</p>
                  </div>
                </div>
                <ArrowSquareOut
                  size={20}
                  className="mt-1 text-fg-muted transition-colors group-hover:text-accent"
                />
              </div>
              <div className="mt-6 overflow-hidden rounded-xl border border-border transition-transform duration-300 group-hover:scale-[1.01]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.src}
                  alt={product.alt}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
