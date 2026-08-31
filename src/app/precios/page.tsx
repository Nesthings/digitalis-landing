"use client";

import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  featured: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    name: "Mentoría",
    price: "US$1,000",
    period: "por mes",
    description: "Para equipos que quieren criterio senior sin comprometerse a un proyecto.",
    features: [
      "4 sesiones mensuales de arquitectura (1:1)",
      "Revisión de código e infraestructura",
      "Canal directo de chat, respuesta en menos de 24h",
      "Cancela cuando quieras",
    ],
    cta: "Elegir Mentoría",
    href: "/precios/mentoria",
    featured: false,
  },
  {
    name: "Proyecto",
    price: "Desde US$12,000",
    period: "por proyecto",
    description: "Para MVPs, integraciones y migraciones con alcance definido.",
    features: [
      "Alcance cerrado con entregas por hitos",
      "Equipo dedicado: lead engineer + roles según el proyecto",
      "DevOps e infraestructura incluidos desde el día uno",
      "Soporte 30 días post-lanzamiento",
    ],
    cta: "Cotizar mi proyecto",
    href: "/precios/proyecto",
    featured: true,
    badge: "Más elegido",
  },
  {
    name: "Retainer",
    price: "Desde US$5,500",
    period: "por mes",
    description: "Para productos en crecimiento que necesitan evolución continua.",
    features: [
      "Equipo técnico especializado a disposición",
      "Roadmap de producto compartido",
      "Deploys y monitoreo constantes",
      "Prioridad en requerimientos",
    ],
    cta: "Armar mi retainer",
    href: "/precios/retainer",
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
  return (
    <>
      <PageHeader
        eyebrow="Precios"
        title="Planes claros, sin letra chica"
        description="Elige el modelo que mejor encaje con tu etapa. Todos empiezan con una conversación para entender tu problema real."
      />

      <Container className="py-16 md:py-20">
        <div className="mt-4 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08} className="h-full">
              {plan.featured ? (
                <div className="relative h-full lg:-mt-4 lg:-mb-4">
                  {plan.badge && (
                    <span className="absolute -top-3 left-7 z-10 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-600 shadow-elevation-1">
                      {plan.badge}
                    </span>
                  )}
                  <GlassCard src="/placeholders/hero-image.svg" tone="blue">
                    <div className="flex h-full flex-1 flex-col p-7 pt-9">
                    <h2 className="text-lg font-semibold text-white">{plan.name}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">
                      {plan.description}
                    </p>
                    <div className="mt-6">
                      <span className="font-mono text-3xl font-semibold tracking-tight text-white md:text-4xl">
                        {plan.price}
                      </span>
                      <span className="ml-1.5 text-sm text-white/75">
                        {plan.period}
                      </span>
                    </div>
                    <ul className="mt-6 flex-1 space-y-3 border-t border-white/20 pt-6">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-white/90">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                            <Check size={12} weight="bold" />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-col gap-2.5">
                      <a
                        href="/contacto"
                        className="inline-flex h-11 items-center justify-center rounded-full bg-white text-sm font-medium text-brand-600 shadow-elevation-1 transition-all duration-200 hover:bg-white/90 hover:shadow-elevation-2 active:translate-y-px"
                      >
                        {plan.cta}
                      </a>
                      <Link
                        href={plan.href}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-full text-sm font-medium text-white/85 transition-all duration-200 hover:bg-white/10 hover:text-white active:translate-y-px"
                      >
                        Ver detalle
                        <ArrowRight size={14} weight="bold" />
                      </Link>
                    </div>
                  </div>
                  </GlassCard>
                </div>
              ) : (
                <div
                  className="relative flex h-full flex-col rounded-3xl border border-border bg-bg-muted p-7 transition-all duration-300 hover:shadow-elevation-2"
                >
                  <h2 className="text-lg font-semibold">{plan.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
                    {plan.description}
                  </p>
                  <div className="mt-6">
                    <span className="font-mono text-3xl font-semibold tracking-tight md:text-4xl">
                      {plan.price}
                    </span>
                    <span className="ml-1.5 text-sm text-fg-muted">
                      {plan.period}
                    </span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3 border-t border-border pt-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                          <Check size={12} weight="bold" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col gap-2.5">
                    <a
                      href="/contacto"
                      className="inline-flex h-11 items-center justify-center rounded-full border border-border-strong bg-bg text-sm font-medium text-fg transition-all duration-200 hover:bg-bg-subtle active:translate-y-px"
                    >
                      {plan.cta}
                    </a>
                    <Link
                      href={plan.href}
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-full text-sm font-medium text-accent transition-all duration-200 hover:bg-accent/10 active:translate-y-px"
                    >
                      Ver detalle
                      <ArrowRight size={14} weight="bold" />
                    </Link>
                  </div>
                </div>
              )}
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