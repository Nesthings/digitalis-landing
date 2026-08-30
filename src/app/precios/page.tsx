"use client";

import { Check } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";

const plans = [
  {
    name: "Mentoría",
    priceMonthly: "US$ 1.200",
    priceAnnual: "US$ 1.000",
    period: "por mes",
    description: "Para equipos que quieren apoyo técnico puntual sin compromiso de proyecto.",
    features: [
      "Sesiones mensuales de arquitectura",
      "Revisión de código e infraestructura",
      "Acceso a asesoría por chat",
      "Cancela cuando quieras",
    ],
    cta: "Elegir Mentoría",
    featured: false,
  },
  {
    name: "Proyecto",
    priceMonthly: "Desde US$ 8.000",
    priceAnnual: "Desde US$ 8.000",
    period: "por proyecto",
    description: "Para MVPs, integraciones y migraciones con alcance definido.",
    features: [
      "Alcance cerrado con entregas por hitos",
      "Equipo dedicado durante el proyecto",
      "DevOps e infraestructura incluidos",
      "Soporte 30 días post-lanzamiento",
    ],
    cta: "Cotizar mi proyecto",
    featured: true,
  },
  {
    name: "Retainer",
    priceMonthly: "US$ 4.500",
    priceAnnual: "US$ 3.800",
    period: "por mes",
    description: "Para productos en crecimiento que necesitan evolución continua.",
    features: [
      "Equipo técnico a disposición",
      "Roadmap de producto compartido",
      "Deploys y monitoreo constantes",
      "Prioridad en requerimientos",
    ],
    cta: "Armar mi retainer",
    featured: false,
  },
];

const faqs = [
  {
    q: "¿Cómo se calcula el precio de un proyecto a medida?",
    a: "Partimos de una estimación inicial tras una sesión de descubrimiento. Si el alcance se mantiene, el precio también. Los cambios se cotizan por separado antes de implementarse.",
  },
  {
    q: "¿Trabajan con contratos anuales?",
    a: "Sí. En retainer ofrecemos facturación mensual y anual, con un descuento en la modalidad anual. No exigimos permanencia mínima en el plan Mentoría.",
  },
  {
    q: "¿Los precios incluyen infraestructura en la nube?",
    a: "Los costos de proveedores cloud se facturan aparte y se te muestran siempre con transparencia. Nosotros optimizamos para que sean lo más bajo posible.",
  },
  {
    q: "¿Pueden tomar un proyecto que otro equipo dejó a medias?",
    a: "Es uno de nuestros casos más comunes. Hacemos una auditoría previa, te decimos con honestidad el estado real y proponemos un plan de recuperación.",
  },
];

export default function PreciosPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      <PageHeader
        eyebrow="Precios"
        title="Planes claros, sin letra chica"
        description="Elige el modelo que mejor encaje con tu etapa. Todos empiezan con una conversación para entender tu problema real."
      />

      <Container className="py-16 md:py-20">
        <Reveal>
          <div className="flex items-center justify-center gap-3">
            <span
              className={cn(
                "text-sm font-medium transition-colors",
                !annual ? "text-fg" : "text-fg-muted",
              )}
            >
              Mensual
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={annual}
              aria-label="Alternar facturación mensual o anual"
              onClick={() => setAnnual((v) => !v)}
              className="relative h-7 w-12 rounded-full border border-border-strong bg-bg-subtle transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span
                className={cn(
                  "absolute top-0.5 h-5 w-5 rounded-full bg-accent shadow-elevation-1 transition-all duration-200",
                  annual ? "left-6" : "left-0.5",
                )}
              />
            </button>
            <span
              className={cn(
                "text-sm font-medium transition-colors",
                annual ? "text-fg" : "text-fg-muted",
              )}
            >
              Anual <span className="ml-1 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">-15%</span>
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-300",
                  plan.featured
                    ? "border-accent bg-accent text-accent-contrast shadow-elevation-3 lg:-mt-4 lg:-mb-4"
                    : "border-border bg-bg-muted hover:shadow-elevation-2",
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-accent-contrast px-3 py-1 text-xs font-semibold text-accent">
                    Más elegido
                  </span>
                )}
                <h2 className="text-lg font-semibold">{plan.name}</h2>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed",
                    plan.featured ? "text-accent-contrast/75" : "text-fg-secondary",
                  )}
                >
                  {plan.description}
                </p>
                <div className="mt-6">
                  <span className="font-mono text-3xl font-semibold tracking-tight md:text-4xl">
                    {annual ? plan.priceAnnual : plan.priceMonthly}
                  </span>
                  <span
                    className={cn(
                      "ml-1.5 text-sm",
                      plan.featured ? "text-accent-contrast/75" : "text-fg-muted",
                    )}
                  >
                    {plan.period}
                  </span>
                </div>
                <ul className="mt-6 flex-1 space-y-3 border-t border-border pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span
                        className={cn(
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                          plan.featured ? "bg-accent-contrast/20 text-accent-contrast" : "bg-accent/10 text-accent",
                        )}
                      >
                        <Check size={12} weight="bold" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contacto"
                  className={cn(
                    "mt-8 inline-flex h-11 items-center justify-center rounded-full text-sm font-medium transition-all duration-200 active:translate-y-px",
                    plan.featured
                      ? "bg-accent-contrast text-accent hover:shadow-elevation-2"
                      : "border border-border-strong bg-bg text-fg hover:bg-bg-subtle",
                  )}
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-fg md:text-3xl">
              Preguntas frecuentes
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 grid max-w-3xl gap-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 0.05}>
              <details className="group rounded-2xl border border-border bg-bg-muted px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-fg">
                  {faq.q}
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border-strong text-fg-muted transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-fg-secondary">{faq.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
