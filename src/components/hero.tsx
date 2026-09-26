"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Container } from "@/components/ui/container";

function Eyebrow() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-bg/70 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-fg-secondary backdrop-blur">
      Ingeniería de software
    </span>
  );
}

function Heading() {
  return (
    <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-fg text-balance sm:text-5xl lg:text-6xl">
      Cree en tus <span className="text-accent">ideas</span>,
      <br />
      nosotros las <span className="text-accent">desarrollamos</span>.
    </h1>
  );
}

function Subtitle() {
  return (
    <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-secondary text-pretty">
      Mejoramos procesos automatizando tareas repetitivas, optimizando flujos de trabajo,
      modernizando infraestructura y haciendo de tu software un producto confiable.
    </p>
  );
}

function Actions() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
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
    </div>
  );
}

function Video() {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-border shadow-elevation-3">
      <video
        className="aspect-video h-[120%] w-full scale-[1.3] object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-label="[PLACEHOLDER: animación del producto principal]"
      >
        <source src="/videos/graphic-1.mp4" type="video/mp4" />
        <source src="/videos/graphic-1.webm" type="video/webm" />
      </video>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(58_92_255_/_0.08),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgb(58_92_255_/_0.05),transparent_50%)]"
      />
      <Container className="relative flex min-h-[100dvh] flex-col justify-center pb-16 pt-24">
        {/* Móvil / tablet: texto → video → botones */}
        <div className="flex flex-col gap-8 lg:hidden">
          <motion.div {...fade(0)}>
            <Eyebrow />
            <Heading />
            <Subtitle />
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Video />
          </motion.div>
          <motion.div {...fade(0.24)}>
            <Actions />
          </motion.div>
        </div>

        {/* Desktop: texto+botones a la izquierda, video a la derecha */}
        <div className="hidden items-center gap-16 lg:grid lg:grid-cols-[1.05fr_1fr]">
          <div>
            <motion.div {...fade(0)}>
              <Eyebrow />
            </motion.div>
            <motion.div {...fade(0.08)}>
              <Heading />
            </motion.div>
            <motion.div {...fade(0.16)}>
              <Subtitle />
            </motion.div>
            <motion.div {...fade(0.24)} className="mt-8">
              <Actions />
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Video />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}