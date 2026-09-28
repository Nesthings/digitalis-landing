import {
  ChartLineUp,
  Check,
  Globe,
  Plugs,
  ShoppingCart,
  Storefront,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { CtaSection } from "@/components/ui/cta-section";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { toneAccent } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

const accent = toneAccent.cyan;

export const metadata: Metadata = {
  title: "Desarrollo web a medida",
  description:
    "Plataformas web, SaaS, portales y e-commerce a medida: rápidos, escalables y listos para crecer.",
};

const types = [
  {
    icon: Globe,
    title: "Plataformas y SaaS",
    description: "Productos web completos: multiusuario, suscripciones, paneles y reportes.",
  },
  {
    icon: Storefront,
    title: "Portales y dashboards",
    description: "Portales de clientes, intranets y tableros de datos hechos a tu medida.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Tiendas y checkout a medida, integrados con tu stock, pagos y logística.",
  },
  {
    icon: Plugs,
    title: "APIs e integraciones",
    description: "APIs robustas y conexión con los sistemas que ya usás (ERP, CRM, pagos).",
  },
];

const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "REST / GraphQL",
  "Docker",
  "AWS",
  "Vercel",
];

const includes = [
  "Diseño UI/UX y desarrollo full-stack",
  "Arquitectura escalable y segura",
  "Rendimiento, accesibilidad y SEO",
  "Integraciones y despliegue continuo",
];

export default function WebPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Desarrollo web a medida"
        description="Plataformas web, SaaS, portales y e-commerce construidos a medida. Rápidos, escalables y pensados para crecer con tu negocio."
        tone="cyan"
        backdrop="/placeholders/case-2.svg"
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {types.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.07} className="h-full">
                <div
                  className={cn(
                    "group h-full rounded-2xl border border-border bg-bg-muted p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-bg hover:shadow-elevation-2",
                    accent.borderHover,
                    accent.shadowHover,
                  )}
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105",
                      accent.bgSoft,
                      accent.text,
                    )}
                  >
                    <t.icon size={20} weight="duotone" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-fg">{t.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-secondary">
                    {t.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-bg-muted py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-fg md:text-3xl">
                Todo el ciclo, en un solo equipo
              </h2>
              <ul className="mt-6 space-y-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-fg-secondary">
                    <span
                      className={cn(
                        "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                        accent.bgSoft,
                        accent.text,
                      )}
                    >
                      <Check size={12} weight="bold" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-bg p-6 sm:p-8">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-fg">
                  <ChartLineUp size={20} className={accent.text} aria-hidden="true" />
                  Stack tecnológico
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <Badge key={tech} className={cn(accent.bgSoft, accent.text)}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaSection
        title="¿Necesitas una plataforma web?"
        description="Cuéntanos qué quieres construir. Te respondemos con un plan claro y un presupuesto cerrado."
        tone="cyan"
        backdrop="/placeholders/case-2.svg"
      />
    </>
  );
}