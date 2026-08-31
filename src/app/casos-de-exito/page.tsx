import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";

export const metadata: Metadata = {
  title: "Casos de Éxito",
  description:
    "Resultados concretos de proyectos de Digitalis Labs: menos costos, más velocidad y mejor operación para nuestros clientes.",
};

const cases = [
  {
    client: "Helvetia Tech",
    industry: "Logística",
    metric: "-92%",
    metricLabel: "tiempo de deploy",
    description:
      "Migración de un pipeline manual a CI/CD completo con despliegues automatizados.",
    src: "/placeholders/case-1.svg",
    alt: "[PLACEHOLDER: caso de éxito Helvetia Tech - portada]",
  },
  {
    client: "Avantir",
    industry: "Retail",
    metric: "+38%",
    metricLabel: "conversión del checkout",
    description:
      "Rediseño y reconstrucción del proceso de pago online con integración a ERP.",
    src: "/placeholders/case-2.svg",
    alt: "[PLACEHOLDER: caso de éxito Avantir - portada]",
  },
  {
    client: "Delta Alto",
    industry: "Fintech",
    metric: "3x",
    metricLabel: "velocidad de desarrollo",
    description:
      "Equipo en retainer que multiplicó la capacidad de entrega del equipo interno.",
    src: "/placeholders/case-3.svg",
    alt: "[PLACEHOLDER: caso de éxito Delta Alto - portada]",
  },
  {
    client: "Proforma",
    industry: "Manufactura",
    metric: "-64%",
    metricLabel: "costos de infraestructura",
    description:
      "Optimización de workloads en la nube y auto-scaling para picos de producción.",
    src: "/placeholders/case-4.svg",
    alt: "[PLACEHOLDER: caso de éxito Proforma - portada]",
  },
  {
    client: "Metronomical",
    industry: "Salud",
    metric: "12",
    metricLabel: "semanas al MVP",
    description:
      "De idea a MVP funcional en producción en tres meses, con early adopters onboard.",
    src: "/placeholders/case-5.svg",
    alt: "[PLACEHOLDER: caso de éxito Metronomical - portada]",
  },
  {
    client: "Clinimed Health",
    industry: "SaaS",
    metric: "99.9%",
    metricLabel: "uptime sostenido",
    description:
      "Endurecimiento de la infraestructura y observabilidad para un SaaS crítico.",
    src: "/placeholders/case-6.svg",
    alt: "[PLACEHOLDER: caso de éxito Clinimed Health - portada]",
  },
];

export default function CasosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Casos de Éxito"
        title="Donde el impacto se cuenta en números"
        description="Una selección de proyectos que hablan por sus resultados: menos costos, más velocidad, mejor operación."
      />

      <Container className="py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.client} delay={(i % 3) * 0.07} className="h-full">
              <GlassCard src={c.src} tone="blue">
                <Link
                  href="/contacto"
                  className="group flex h-full flex-1 flex-col p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-base font-semibold text-white">{c.client}</h2>
                    <span className="rounded-full border border-white/30 bg-white/15 px-2.5 py-0.5 text-xs text-white/80 backdrop-blur-lg">
                      {c.industry}
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/80">
                    {c.description}
                  </p>
                  <div className="mt-5 flex items-end justify-between border-t border-white/20 pt-5">
                    <div>
                      <p className="font-mono text-3xl font-semibold tracking-tight text-white">
                        {c.metric}
                      </p>
                      <p className="text-xs text-white/70">{c.metricLabel}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors group-hover:text-white">
                      Ver caso
                      <ArrowRight
                        size={14}
                        weight="bold"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}