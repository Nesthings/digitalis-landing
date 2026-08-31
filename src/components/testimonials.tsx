import { Star } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";

const testimonials = [
  {
    quote:
      "Nos desbloquearon un despliegue que llevábamos meses postergando. Proceso prolijo y total confianza para redoblar la apuesta.",
    name: "Juan Ramírez",
    role: "CTO, Helvetia Tech",
    avatar: "/placeholders/avatar-1.svg",
    alt: "[PLACEHOLDER: foto de perfil de Juan Ramírez]",
    bg: "/placeholders/client-1.svg",
  },
  {
    quote:
      "El MVP quedó en producción antes de que termináramos de definir internamente qué queríamos. Impresionante velocidad.",
    name: "Laura Méndez",
    role: "Head of Product, Avantir",
    avatar: "/placeholders/avatar-2.svg",
    alt: "[PLACEHOLDER: foto de perfil de Laura Méndez]",
    bg: "/placeholders/client-2.svg",
  },
  {
    quote:
      "Hacen lo que dicen, en el plazo que dicen. La consultoría de cloud nos ahorró costos desde el primer mes.",
    name: "Carlos Peralta",
    role: "Director de Operaciones, Proforma",
    avatar: "/placeholders/avatar-3.svg",
    alt: "[PLACEHOLDER: foto de perfil de Carlos Peralta]",
    bg: "/placeholders/client-3.svg",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-fg text-balance md:text-4xl">
              Lo que dicen quienes trabajan con nosotros
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <GlassCard src={t.bg} tone="blue">
                <figure className="flex h-full flex-col p-6">
                  <div className="flex gap-1 text-white" aria-label="5 de 5 estrellas">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={14} weight="fill" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-white/90">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/25 backdrop-blur-lg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={t.avatar}
                        alt={t.alt}
                        className="h-full w-full rounded-full object-cover"
                        loading="lazy"
                      />
                    </span>
                    <div>
                      <div className="text-sm font-medium text-white">{t.name}</div>
                      <div className="text-xs text-white/70">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}