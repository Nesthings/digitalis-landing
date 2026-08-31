import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedMetric } from "@/components/ui/animated-metric";

const metrics = [
  {
    value: 8000,
    suffix: "+",
    label: "Horas de desarrollo entregadas",
  },
  {
    value: 30,
    suffix: "+",
    label: "Proyectos llevados a producción",
  },
  {
    value: 15,
    suffix: "",
    label: "Clientes activos en 2025",
  },
  {
    value: 98,
    suffix: "%",
    label: "Satisfacción promedio reportada",
  },
];

export function Metrics() {
  return (
    <section className="border-t border-border bg-bg-muted py-20 md:py-24">
      <Container>
        <Reveal>
          <h2 className="sr-only">Resultados y métricas</h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.07}>
              <AnimatedMetric
                value={m.value}
                suffix={m.suffix}
                label={m.label}
                className="border-l-2 border-accent pl-4"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
