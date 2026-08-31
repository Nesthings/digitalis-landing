"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const clients = [
  { name: "Helvetia Tech", src: "/placeholders/client-1.svg" },
  { name: "Avantir", src: "/placeholders/client-2.svg" },
  { name: "Delta Alto", src: "/placeholders/client-3.svg" },
  { name: "Proforma", src: "/placeholders/client-4.svg" },
  { name: "Metronomical", src: "/placeholders/client-5.svg" },
  { name: "Clinimed Health", src: "/placeholders/client-6.svg" },
];

export function LogoWall() {
  const reduce = useReducedMotion();

  return (
    <section className="border-y border-border bg-bg-muted">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-fg-muted">
          Empresas que confían en nuestro trabajo
        </p>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {clients.map((client, i) => (
            <motion.li
              key={client.name}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.src}
                alt={`[PLACEHOLDER: logo del cliente ${client.name}]`}
                className={cn(
                  "h-9 w-9 rounded-lg grayscale transition-all duration-300 hover:scale-110 hover:grayscale-0",
                )}
                loading="lazy"
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
