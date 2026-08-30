import { Check, ClipboardText, Code, Flask, GearSix, GitMerge } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  CloudCheckIcon,
  DatabaseIcon,
  HandshakeIcon,
  ShieldCheckIcon,
  TerminalWindowIcon,
} from "@phosphor-icons/react/dist/ssr";


export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Consultoría técnica (DevOps, cloud, automatización), desarrollo de software a medida: MVPs, integraciones y migraciones, gestionamos tu proyecto de software de principio a fin.",
};

const consultingAreas = [
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
];

const consultingSteps = [
  "Auditoría de tu infraestructura actual",
  "Definición del plan y prioridades",
  "Implementación en sprints cortos",
  "Hand-off con documentación y training",
];

const devProjectTypes = [
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

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Gestionamos tu proyecto, lo desarrollamos y lo llevamos a producción"
        description="Tres formas de trabajar con nosotros, con una misma premisa: entender tu problema y resolverlo con la tecnología adecuada, de principio a fin."
      />

      {/* Gestión de proyecto */}
      <section id="gestion" className="scroll-mt-24 py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-fg md:text-3xl">
                Gestionamos tu proyecto
              </h2>
              <p className="mt-3 text-lg text-fg-secondary text-pretty">
                Nos hacemos cargo de tu proyecto de principio a fin: definición, planificación,
                equipo, desarrollo, despliegue y operación. Tú te ocupas del negocio, nosotros
                del resto.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ClipboardText, title: "Definición y alcance", description: "Transformamos tu idea en un plan claro con objetivos, entregables y plazos realistas." },
              { icon: GearSix, title: "Planificación", description: "Armamos el equipo, el cronograma y el stack. Todo documentado, todo transparente." },
              { icon: Code, title: "Ejecución", description: "Desarrollamos en iteraciones cortas con revisiones frecuentes. Siempre sabes cómo va todo." },
              { icon: Flask, title: "Deploy y operación", description: "Lo llevamos a producción, monitoreamos y acompañamos hasta que el sistema es estable." },
            ].map((s, i) => (
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

          <Reveal className="mt-14">
            <div className="rounded-3xl border border-accent bg-accent p-6 sm:p-8 lg:p-10">
              <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="text-lg font-semibold text-accent-contrast">
                    Un solo responsable, de principio a fin
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-accent-contrast/85">
                    Nada de pasar el problema de un proveedor a otro. Gestionamos el proyecto
                    completo: tú hablas con una sola persona, que responde por el resultado.
                    Con reportes periódicos, presupuesto claro y entregas verificables.
                  </p>
                </div>
                <ul className="space-y-2.5">
                  {["Reportes de avance periódicos", "Presupuesto claro desde el inicio", "Un único responsable de resultado"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-accent-contrast">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-contrast/20">
                        <Check size={12} weight="bold" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Consultoría */}
      <section id="consultoria" className="scroll-mt-24 py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-fg md:text-3xl">
                Consultoría técnica
              </h2>
              <p className="mt-3 text-lg text-fg-secondary text-pretty">
                Acompañamos a tu equipo con criterio técnico: modernizamos infraestructura,
                automatizamos lo repetitivo y dejamos sistemas que tu equipo puede operar.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {consultingAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 0.07} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-bg-muted p-6 transition-all duration-300 hover:bg-bg hover:shadow-elevation-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <area.icon size={20} weight="duotone" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-fg">{area.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-secondary">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="grid gap-8 rounded-3xl border border-border bg-bg-muted p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr] lg:p-10">
              <div>
                <h3 className="text-lg font-semibold text-fg">Metodología</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
                  Trabajamos en ciclos cortos y verificables. No hay sorpresas al final: te
                  mostramos resultados desde la primera semana.
                </p>
              </div>
              <ol className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {consultingSteps.map((step, i) => (
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

          <Reveal className="mt-14">
            <div className="rounded-3xl border border-border bg-bg-muted p-6 sm:p-8 lg:p-10">
              <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="text-lg font-semibold text-fg">Mini caso de estudio</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg-secondary">
                    Una empresa de logística operaba con deploys manuales cada dos semanas y
                    caídas frecuentes. Reestructuramos su pipeline a CI/CD con deploys
                    automatizados en dos meses.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-bg p-6 text-center">
                  <p className="font-mono text-4xl font-semibold text-accent">-92%</p>
                  <p className="mt-1 text-sm text-fg-muted">tiempo de deploy</p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Desarrollo a medida */}
      <section id="desarrollo" className="scroll-mt-24 border-t border-border bg-bg-muted py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-fg md:text-3xl">
                Desarrollo a medida
              </h2>
              <p className="mt-3 text-lg text-fg-secondary text-pretty">
                Cuando el software genérico no alcanza, construimos el tuyo. Nos hacemos
                cargo de todo el ciclo: producto, código, infraestructura y operación.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {devProjectTypes.map((t, i) => (
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

          <Reveal className="mt-14">
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
    </>
  );
}
