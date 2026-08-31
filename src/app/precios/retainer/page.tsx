import { ArrowRight, Check, X } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Retainer — equipo técnico continuo",
  description:
    "Equipo de 5 especialidades con horas garantizadas mensuales por rol, desde US$5,500/mes.",
};

const dedicacion = [
  { rol: "Lead engineer", horas: "20h", cubre: "Coordinación, arquitectura, revisión" },
  { rol: "Platform / Product engineer", horas: "40h combinadas", cubre: "Desarrollo de features del roadmap" },
  { rol: "DevOps engineer", horas: "15h", cubre: "Deploys, monitoreo, infraestructura" },
  { rol: "Cybersecurity engineer", horas: "8h", cubre: "Revisión de seguridad, parches críticos" },
];

const comoFunciona = [
  "Sesión de kickoff para definir el roadmap del primer trimestre",
  "Reunión mensual de planeación y priorización",
  "Deploys programados + monitoreo activo de infraestructura",
  "Canal directo con el equipo para reportar incidentes o pedir prioridad en algo urgente",
  "Reporte mensual de horas usadas y avance del roadmap",
];

const noIncluye = [
  "Desarrollo de proyectos nuevos fuera del roadmap acordado (eso se cotiza como Proyecto adicional)",
  "Horas no usadas no se acumulan al siguiente mes",
];

export default function RetainerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Precios · Retainer"
        title="Retainer — equipo técnico continuo"
        description="Desde US$5,500 por mes"
      />

      <Container className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-base leading-relaxed text-fg-secondary md:text-lg">
              No es "un desarrollador disponible medio tiempo" disfrazado de equipo. El retainer
              te da acceso a un equipo de 5 especialidades (lead, plataforma, producto, DevOps,
              cybersecurity), con horas garantizadas mensuales por rol, para que tu producto siga
              evolucionando sin que tengas que armar un equipo interno.
            </p>
          </Reveal>

          <Reveal className="mt-10">
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-fg">Para quién es</h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Productos ya en producción que necesitan mantenimiento activo y nuevas features",
                  "Empresas que quieren escalar su equipo técnico sin contratar y hacer nómina",
                  "Negocios con necesidad recurrente de DevOps + seguridad, no solo desarrollo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-fg-secondary">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Check size={12} weight="bold" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal className="mt-12">
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-fg">
                Dedicación incluida por rol (tier base — Desde US$5,500/mes)
              </h2>
              <div className="mt-4 overflow-hidden rounded-xl border border-border">
                <div className="grid gap-1 bg-bg-subtle p-4 text-xs font-semibold uppercase tracking-wide text-fg-muted sm:grid-cols-[1fr_140px_1.2fr] sm:gap-4">
                  <span>Rol</span>
                  <span>Horas garantizadas/mes</span>
                  <span>Qué cubre</span>
                </div>
                {dedicacion.map((d, i) => (
                  <div
                    key={d.rol}
                    className={cn(
                      "grid gap-1 p-4 text-sm sm:grid-cols-[1fr_140px_1.2fr] sm:gap-4",
                      i % 2 === 0 ? "bg-bg-muted" : "bg-bg",
                    )}
                  >
                    <span className="font-medium text-fg">{d.rol}</span>
                    <span className="font-mono text-accent">{d.horas}</span>
                    <span className="text-fg-secondary">{d.cubre}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-fg-muted">
                Tiers superiores con más horas o dedicación full-time de algún rol se cotizan
                aparte según necesidad.
              </p>
            </section>
          </Reveal>

          <Reveal className="mt-12">
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-fg">Cómo funciona</h2>
              <ol className="mt-4 space-y-3">
                {comoFunciona.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-fg-secondary">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-[11px] font-semibold text-accent">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>

          <Reveal className="mt-12">
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-fg">Qué no incluye</h2>
              <ul className="mt-4 space-y-3">
                {noIncluye.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-fg-secondary">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bg-subtle text-fg-muted">
                      <X size={12} weight="bold" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal className="mt-12">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-base font-medium text-accent-contrast shadow-elevation-1 transition-all duration-200 hover:bg-accent-hover hover:shadow-elevation-2 active:translate-y-px"
              >
                Armar mi retainer
                <ArrowRight size={16} weight="bold" />
              </Link>
              <Link
                href="/precios"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border-strong bg-bg px-7 text-base font-medium text-fg transition-all duration-200 hover:bg-bg-subtle hover:border-fg-muted"
              >
                Ver todos los planes
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </>
  );
}