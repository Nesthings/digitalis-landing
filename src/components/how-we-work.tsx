import { Compass, Cpu, Gear, RocketLaunch } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    icon: Compass,
    step: "01",
    title: "Descubrimiento",
    description: "Entendemos el problema real antes de escribir una sola línea de código.",
  },
  {
    icon: Gear,
    step: "02",
    title: "Diseño y arquitectura",
    description: "Definimos la solución, el stack y los trade-offs técnicos con criterio.",
  },
  {
    icon: Cpu,
    step: "03",
    title: "Construcción",
    description: "Desarrollamos en iteraciones cortas, con deploy continuo desde el día uno.",
  },
  {
    icon: RocketLaunch,
    step: "04",
    title: "Operación y mejora",
    description: "Monitoreamos, medimos y evolucionamos el producto con datos.",
  },
];

export function HowWeWork() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-fg text-balance md:text-4xl">
              Cómo trabajamos
            </h2>
            <p className="mt-3 text-lg text-fg-secondary text-pretty">
              Un proceso simple y predecible, para que sepas qué esperar en cada etapa.
            </p>
          </div>
        </Reveal>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.08} className="h-full">
              <li className="relative h-full rounded-2xl border border-border bg-bg-muted p-6">
                <span className="absolute right-5 top-5 font-mono text-xs font-medium text-fg-muted">
                  {s.step}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <s.icon size={20} weight="duotone" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-fg">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-fg-secondary">
                  {s.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
