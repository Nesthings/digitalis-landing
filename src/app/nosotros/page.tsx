import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Timeline } from "@/components/timeline";
import { GlassCard } from "@/components/ui/glass-card";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Historia, misión y equipo de Digitalis Labs, una startup de software con SaaS propios, consultoría técnica y desarrollo a medida.",
};

const team = [
  {
    name: "Agustín Duarte",
    role: "Co-founder · Plataforma",
    src: "/placeholders/team-1.svg",
    alt: "[PLACEHOLDER: foto de Agustín Duarte, Co-founder]",
  },
  {
    name: "Martina Cáceres",
    role: "Co-founder · Producto",
    src: "/placeholders/team-2.svg",
    alt: "[PLACEHOLDER: foto de Martina Cáceres, Co-founder]",
  },
  {
    name: "Lucas Romero",
    role: "Lead Engineer",
    src: "/placeholders/team-3.svg",
    alt: "[PLACEHOLDER: foto de Lucas Romero, Lead Engineer]",
  },
  {
    name: "Néstor Quiñones",
    role: "DevOps Engineer",
    src: "/placeholders/pp.jpg",
    alt: "[PLACEHOLDER: foto de Sofía Paredes, DevOps Engineer]",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nosotros"
        title="Un equipo pequeño que hace las cosas bien"
        description="Construimos software con una convicción simple: el resultado importa más que las herramientas. Por eso nos hacemos responsables de todo el ciclo."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <Reveal>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-fg md:text-3xl">
                  Nuestra historia
                </h2>
                <p className="mt-4 text-base leading-relaxed text-fg-secondary text-pretty">
                  Lo que empezó como un proyecto de consultoría para un puñado de clientes se
                  convirtió en una empresa de software con productos propios. Hoy dividimos el
                  tiempo entre lo que construimos para otros y lo que construimos para
                  nosotros.
                </p>
                <p className="mt-4 text-base leading-relaxed text-fg-secondary text-pretty">
                  Creemos que un buen producto requiere entendimiento técnico profundo y
                  honestidad sobre lo que se puede lograr. Eso es lo que ofrecemos, en cada
                  proyecto y cada línea de código.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Timeline />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-bg-muted py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-fg md:text-3xl">
                El equipo
              </h2>
              <p className="mt-3 text-lg text-fg-secondary text-pretty">
                Ingenieros, diseñadores y personas de producto que prefieren medir resultados
                antes que prometerlos.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.07} className="h-full">
                <GlassCard src="/placeholders/hero-image.svg" tone="blue">
                  <div className="group flex h-full flex-col p-4">
                    <div className="overflow-hidden rounded-xl border border-white/20">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={member.src}
                        alt={member.alt}
                        className="aspect-square w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-white">{member.name}</h3>
                    <p className="mt-0.5 text-sm text-white/70">{member.role}</p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
