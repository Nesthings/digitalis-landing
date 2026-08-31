import { ArrowRight, CloudCheckIcon, Code, DatabaseIcon, ShieldCheckIcon, TerminalWindowIcon } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { CtaSection } from "@/components/ui/cta-section";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Consultoría técnica",
  description:
    "DevOps, cloud y automatización. Acompañamos a tu equipo a modernizar infraestructura sin frenar el negocio.",
};

const areas = [
  {
    icon: CloudCheckIcon,
    title: "Cloud y DevOps",
    description: "Diseñamos y operamos infraestructura en AWS, GCP o Azure con IaC y pipelines sólidos.",
  },
  {
    icon: TerminalWindowIcon,
    title: "Automatización",
    description: "Eliminamos procesos manuales con scripts, CI/CD y orquestación de tareas.",
  },
  {
    icon: DatabaseIcon,
    title: "Bases de datos",
    description: "Migraciones, tuning y modelado para que tus datos sean un activo, no un dolor.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Seguridad y observabilidad",
    description: "Monitoreo, logging y buenas prácticas para que todo sea auditable y estable.",
  },
  {
    icon: Code,
    title: "Desarrollo a medida",
    description: "Cuando la consultoría no alcanza, construimos el software que resuelve tu problema exacto.",
  },
];

const steps = [
  "Auditoría de tu infraestructura actual",
  "Definición del plan y prioridades",
  "Implementación en sprints cortos",
  "Hand-off con documentación y training",
];

export default function ConsultoriaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Consultoría técnica"
        description="Acompañamos a tu equipo con criterio técnico: modernizamos infraestructura, automatizamos lo repetitivo y dejamos sistemas que tu equipo puede operar."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.07} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-bg-muted p-6 transition-all duration-300 hover:bg-bg hover:shadow-elevation-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <a.icon size={20} weight="duotone" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-fg">{a.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-secondary">
                    {a.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-bg-muted py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="grid gap-8 rounded-3xl border border-border bg-bg p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr] lg:p-10">
              <div>
                <h3 className="text-lg font-semibold text-fg">Metodología</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
                  Trabajamos en ciclos cortos y verificables. No hay sorpresas al final: te
                  mostramos resultados desde la primera semana.
                </p>
              </div>
              <ol className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {steps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-fg-secondary">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-[11px] font-semibold text-accent">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal className="mt-10">
            <div className="rounded-3xl border border-border bg-bg p-6 sm:p-8 lg:p-10">
              <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="text-lg font-semibold text-fg">Mini caso de estudio</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg-secondary">
                    Una empresa de logística operaba con deploys manuales cada dos semanas y
                    caídas frecuentes. Reestructuramos su pipeline a CI/CD con deploys
                    automatizados en dos meses.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-bg-muted p-6 text-center">
                  <p className="font-mono text-4xl font-semibold text-accent">-92%</p>
                  <p className="mt-1 text-sm text-fg-muted">tiempo de deploy</p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-bg-muted p-8 md:flex-row md:items-center lg:p-10">
              <div className="max-w-xl">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Code size={20} weight="duotone" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-fg">¿Necesitas desarrollo a medida?</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
                  Si además de modernizar tu infraestructura necesitas construir software nuevo,
                  lo hacemos de principio a fin: MVPs, integraciones y migraciones.
                </p>
              </div>
              <Link
                href="/servicios/desarrollo"
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-contrast shadow-elevation-1 transition-all duration-200 hover:bg-accent-hover hover:shadow-elevation-2 active:translate-y-px"
              >
                Ver desarrollo a medida
                <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection
        title="¿Necesitas modernizar tu infraestructura?"
        description="Cuéntanos qué necesitas mejorar. Te respondemos con un plan claro, sin vueltas."
      />
    </>
  );
}