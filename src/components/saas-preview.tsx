"use client";

import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard, GlassIcon } from "@/components/ui/glass-card";
import { VetcoreLogo } from "@/components/vetcore-logo";

const products = [
  {
    name: "Vetcore",
    oneLiner: "Sistema de gestión para clínicas veterinarias",
    src: "/placeholders/product-vetcore.svg",
    video: "/placeholders/vetcore-demo.webm",
    alt: "[PLACEHOLDER: screenshot del producto Vetcore]",
    href: "/productos/vetcore",
    tone: "clinical",
    bg: "/placeholders/product-vetcore.svg",
    aspect: "900/555",
    logo: true,
  },
  {
    name: "Gymcore",
    oneLiner: "Software para gimnasios y estudios de entrenamiento",
    src: "/placeholders/product-gymcore.svg",
    alt: "[PLACEHOLDER: screenshot del producto Gymcore]",
    href: "/productos/gymcore",
    tone: "electric",
    bg: "/placeholders/product-gymcore.svg",
    aspect: "4/3",
  },
] as const;

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
            <motion.div
              key={product.name}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <GlassCard src={product.bg} tone={product.tone}>
                <a href={product.href} className="group flex h-full flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <GlassIcon>
                        {product.logo ? (
                          <VetcoreLogo className="h-full w-full object-cover" containerClassName="h-full w-full" />
                        ) : (
                          <span className="font-mono text-lg font-bold">
                            {product.name.slice(0, 1)}
                          </span>
                        )}
                      </GlassIcon>
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-white">
                          {product.name}
                        </h3>
                        <p className="text-sm text-white/80">{product.oneLiner}</p>
                      </div>
                    </div>
                    <ArrowSquareOut
                      size={20}
                      className="mt-1 text-white/70 transition-colors group-hover:text-white"
                    />
                  </div>
                  <div className="mt-6 overflow-hidden rounded-xl border border-white/20 transition-transform duration-300 group-hover:scale-[1.01]">
                    {product.video ? (
                      <video
                        src={product.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full object-cover"
                        style={{ aspectRatio: product.aspect }}
                      />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={product.src}
                        alt={product.alt}
                        className="w-full object-cover"
                        style={{ aspectRatio: product.aspect }}
                        loading="lazy"
                      />
                    )}
                  </div>
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}