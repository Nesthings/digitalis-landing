import { Check, Code, Flask, GearSix, GitMerge, HandshakeIcon } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { CtaSection } from "@/components/ui/cta-section";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Desarrollo a medida",
  description:
    "MVPs, integraciones y migraciones. Construimos software que resuelve tu problema exacto, no otro.",
};

const projectTypes = [
  { icon: Flask, title: "MVPs", description: "Validar una idea con el menor costo posible y la mejor base técnica." },
  { icon: GitMerge, title: "Integraciones", description: "Conectar sistemas que hoy no se hablan: APIs, webhooks, datos." },
  { icon: Code, title: "Migraciones", description: "Mover sistemas legacy a tecnología moderna sin perder el negocio." },
];

const stack = [
  "TypeScript",
  "React / Next.js",
  "Node.js",
  "Python",
  "Go",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "AWS",
  "GCP",
  "Terraform",
  "GitHub Actions",
];

const engagementModels = [
  {
    icon: HandshakeIcon,
    title: "Por proyecto",
    description: "Alcance cerrado, presupuesto fijo y entregas por hitos.",
    tag: "Ideal para MVPs y migraciones",
  },
  {
    icon: GearSix,
    title: "Retainer",
    description: "Equipo técnico disponible de forma continua para evolucionar tu producto.",
    tag: "Ideal para productos en crecimiento",
  },
];

export default function DesarrolloPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Desarrollo a medida"
        description="Cuando el software genérico no alcanza, construimos el tuyo. Nos hacemos cargo de todo el ciclo: producto, código, infraestructura y operación."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {projectTypes.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.07} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-bg p-6 transition-all duration-300 hover:shadow-elevation-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
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
          <Reveal>
            <div className="rounded-3xl border border-border bg-bg p-6 sm:p-8 lg:p-10">
              <h3 className="text-lg font-semibold text-fg">Stack tecnológico</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {engagementModels.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.07} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-border bg-bg p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-fg">{m.title}</h3>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <m.icon size={20} weight="duotone" />
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-secondary">
                    {m.description}
                  </p>
                  <span
                    className={cn(
                      "mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium text-fg-secondary",
                    )}
                  >
                    <Check size={12} weight="bold" className="text-accent" />
                    {m.tag}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="¿Necesitas software a medida?"
        description="Cuéntanos qué necesitas construir o integrar. Te respondemos con un plan claro, sin vueltas."
      />
    </>
  );
}