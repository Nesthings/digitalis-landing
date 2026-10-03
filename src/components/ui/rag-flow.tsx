"use client";

import {
  Brain,
  ChatCircleText,
  FileText,
  MagnifyingGlass,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const nodes = [
  {
    icon: ChatCircleText,
    label: "Pregunta",
    caption: "El usuario consulta",
  },
  {
    icon: MagnifyingGlass,
    label: "Búsqueda",
    caption: "Embeddings + vector DB",
  },
  {
    icon: FileText,
    label: "Contexto",
    caption: "Fragmentos relevantes",
  },
  {
    icon: Brain,
    label: "LLM",
    caption: "Genera la respuesta",
  },
  {
    icon: Sparkle,
    label: "Respuesta",
    caption: "Con la fuente citada",
  },
];

export function RagFlow({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border bg-bg p-6 sm:p-8",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(217,70,239,0.18) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative flex flex-col gap-4 lg:flex-row lg:items-stretch">
        {nodes.map((node, i) => (
          <div key={node.label} className="flex flex-1 flex-col lg:flex-row lg:items-center">
            <motion.div
              className="relative z-10 flex w-full items-center gap-3 rounded-2xl border border-fuchsia-500/25 bg-fuchsia-500/[0.06] p-3.5 lg:flex-1 lg:flex-col lg:items-start lg:gap-0 lg:p-4"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400">
                <node.icon size={18} weight="duotone" />
              </span>
              <div className="lg:mt-3">
                <p className="text-sm font-semibold text-fg">{node.label}</p>
                <p className="text-xs text-fg-muted">{node.caption}</p>
              </div>
            </motion.div>

            {i < nodes.length - 1 && (
              <div className="relative flex items-center justify-center py-1 lg:w-10 lg:py-0">
                <div className="h-4 w-px bg-fuchsia-500/30 lg:h-px lg:w-full" />
                {!reduce && (
                  <>
                    <motion.span
                      className="absolute left-[calc(50%-3px)] size-1.5 rounded-full bg-fuchsia-500 lg:hidden"
                      animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.span
                      className="absolute top-[calc(50%-3px)] hidden size-1.5 rounded-full bg-fuchsia-500 lg:block"
                      animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut",
                      }}
                    />
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="relative mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-fg-secondary">
        <span className="inline-flex items-center gap-1.5">
          <Sparkle size={13} weight="fill" className="text-fuchsia-500" />
          La respuesta se basa en tus datos
        </span>
        <span className="inline-flex items-center gap-1.5">
          <FileText size={13} weight="fill" className="text-fuchsia-500" />
          Cita la fuente, no inventa
        </span>
      </div>
    </div>
  );
}
