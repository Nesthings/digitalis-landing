import { Star } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const testimonials = [
  {
    quote:
      "Nos desbloquearon un despliegue que llevábamos meses postergando. Proceso prolijo y total confianza para redoblar la apuesta.",
    name: "Juan Ramírez",
    role: "CTO, Helvetia Labs",
    avatar: "/placeholders/avatar-1.svg",
    alt: "[PLACEHOLDER: foto de perfil de Juan Ramírez]",
  },
  {
    quote:
      "El MVP quedó en producción antes de que termináramos de definir internamente qué queríamos. Impresionante velocidad.",
    name: "Laura Méndez",
    role: "Head of Product, Vantir",
    avatar: "/placeholders/avatar-2.svg",
    alt: "[PLACEHOLDER: foto de perfil de Laura Méndez]",
  },
  {
    quote:
      "Hacen lo que dicen, en el plazo que dicen. La consultoría de cloud nos ahorró costos desde el primer mes.",
    name: "Carlos Peralta",
    role: "Director de Operaciones, Proforma",
    avatar: "/placeholders/avatar-3.svg",
    alt: "[PLACEHOLDER: foto de perfil de Carlos Peralta]",
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
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-bg-muted p-6">
                <div className="flex gap-1 text-accent" aria-label="5 de 5 estrellas">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} weight="fill" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-fg-secondary">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.alt}
                    className="h-10 w-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-sm font-medium text-fg">{t.name}</div>
                    <div className="text-xs text-fg-muted">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
