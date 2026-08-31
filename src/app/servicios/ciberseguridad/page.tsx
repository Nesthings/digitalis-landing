import { Check, Detective, Fingerprint, Keyhole, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { CtaSection } from "@/components/ui/cta-section";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Consultoría de Ciberseguridad",
  description:
    "Auditorías, hardening y estrategia de seguridad para proteger tu infraestructura y tus datos.",
};

const services = [
  {
    icon: Detective,
    title: "Auditorías de seguridad",
    description: "Revisamos tu infraestructura, código y procesos para encontrar riesgos antes que los atacantes.",
  },
  {
    icon: Keyhole,
    title: "Hardening",
    description: "Endurecemos servidores, redes y aplicaciones: configuración segura, mínimos privilegios y parches.",
  },
  {
    icon: Fingerprint,
    title: "Identidad y accesos",
    description: "MFA, gestión de credenciales y control de accesos para que solo quien debe, pueda.",
  },
  {
    icon: ShieldCheck,
    title: "Estrategia y cumplimiento",
    description: "Políticas, respuesta a incidentes y alineación con estándares para operar con confianza.",
  },
];

const steps = [
  "Diagnóstico inicial y análisis de riesgos",
  "Plan de remediación por prioridad",
  "Implementación de controles en sprints cortos",
  "Monitoreo y respuesta a incidentes",
];

export default function CiberseguridadPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Consultoría de Ciberseguridad"
        description="Auditorías, hardening y estrategia de seguridad para proteger tu infraestructura y tus datos."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-bg-muted p-6 transition-all duration-300 hover:bg-bg hover:shadow-elevation-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <s.icon size={20} weight="duotone" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-fg">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-secondary">
                    {s.description}
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
                <h3 className="text-lg font-semibold text-fg">Cómo lo hacemos</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
                  Seguridad en ciclos cortos y medibles, sin frenar tu operación. Priorizamos
                  lo que más expone a tu negocio y resolvemos por partes.
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
              <h3 className="text-lg font-semibold text-fg">Qué obtienes</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Mapa de riesgos priorizado por impacto",
                  "Controles implementados y verificables",
                  "Documentación para tu equipo y auditorías",
                  "Acompañamiento continuo post-entrega",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-fg-secondary">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Check size={12} weight="bold" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection
        title="¿Quieres revisar la seguridad de tu infraestructura?"
        description="Cuéntanos qué necesitas proteger. Te respondemos con un plan claro, sin vueltas."
      />
    </>
  );
}