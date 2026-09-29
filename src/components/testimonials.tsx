import { Star } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";

const testimonials = [
  {
    quote:
      "La verdad, veníamos con un deploy que no sabíamos ni por dónde agarrar. Se metieron a fondo, ordenaron todo y en poco tiempo lo teníamos andando. Un alivio.",
    name: "Jorge Vázquez M",
    role: "CTO, Helvetia Tech",
    avatar: "/placeholders/avatar-1.svg",
    alt: "[PLACEHOLDER: foto de perfil de Jorge Vázquez M]",
    bg: "/placeholders/client-1.svg",
  },
  {
    quote:
      "Teníamos la idea medio suelta y nos ayudaron a bajarla a tierra. El MVP salió antes de lo que esperábamos y con cosas que ni se nos habían ocurrido.",
    name: "Laura Méndez",
    role: "Head of Product, Avantir",
    avatar: "/placeholders/avatar-2.svg",
    alt: "[PLACEHOLDER: foto de perfil de Laura Méndez]",
    bg: "/placeholders/client-2.svg",
  },
  {
    quote:
      "Son de esas personas que dicen algo y lo cumplen. Nos ayudaron con la parte de cloud y se notó en la factura desde el primer mes, en serio.",
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