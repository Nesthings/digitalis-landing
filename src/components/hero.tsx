"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(58_92_255_/_0.08),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgb(58_92_255_/_0.05),transparent_50%)]"
      />
      <Container className="relative flex min-h-[100dvh] flex-col justify-center pb-16 pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-bg/70 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-fg-secondary backdrop-blur">
                Estudio de ingeniería de software
              </span>
            </motion.div>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-fg text-balance sm:text-5xl lg:text-6xl"
            >
              Software que escala con tu operación, no al revés.
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-fg-secondary text-pretty"
            >
              SaaS propios, consultoría técnica y desarrollo a medida. Automatizamos
              procesos, modernizamos infraestructura y lanzamos software confiable.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/productos"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-base font-medium text-accent-contrast shadow-elevation-2 transition-all duration-200 hover:bg-accent-hover hover:shadow-elevation-3 active:translate-y-px"
              >
                Ver productos <ArrowRight size={16} weight="bold" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border-strong bg-bg px-7 text-base font-medium text-fg transition-all duration-200 hover:bg-bg-subtle active:translate-y-px"
              >
                Hablemos de tu proyecto
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[1.5rem] border border-border shadow-elevation-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/placeholders/hero-image.svg"
                alt="[PLACEHOLDER: imagen hero - mockup del producto principal]"
                className="h-full w-full object-cover"
                width={1440}
                height={1080}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
