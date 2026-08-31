import { ArrowRight, Check, X } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Proyecto — desarrollo con alcance cerrado",
  description:
    "Construimos con alcance definido y fecha de entrega clara: MVP, integraciones y migraciones desde US$12,000.",
};

const roles = [
  { rol: "Lead engineer", funcion: "Arquitectura, coordinación técnica, revisión de calidad" },
  { rol: "Platform engineer", funcion: "Desarrollo del producto core" },
  { rol: "Product engineer", funcion: "Definición de flujos, UX técnico, prioridades de features" },
  { rol: "DevOps engineer", funcion: "CI/CD, infraestructura, despliegues" },
  { rol: "Cybersecurity engineer", funcion: "Hardening, revisión de vulnerabilidades antes de lanzar" },
];

const entregables = [
  "Discovery y alcance (semana 1): definición de hitos, arquitectura, presupuesto cerrado",
  "Desarrollo por sprints: entregas parciales revisables cada 1-2 semanas",
  "Lanzamiento: despliegue a producción con checklist de seguridad e infraestructura",
  "Soporte post-lanzamiento: 30 días incluidos para bugs y ajustes menores",
];

const noIncluye = [
  "Mantenimiento continuo post 30 días (eso pasa a Retainer)",
  "Soporte de infraestructura no relacionada al proyecto entregado",
];

export default function ProyectoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Precios · Proyecto"
        title="Desarrollo de proyecto con alcance cerrado"
        description="Desde US$12,000 por proyecto"
      />

      <Container className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-base leading-relaxed text-fg-secondary md:text-lg">
              Construimos con alcance definido y fecha de entrega clara — no cobramos por hora
              abierta ni dejamos que el scope crezca sin que tú lo apruebes. Cada proyecto se
              arma con los roles que realmente necesita, no con los cinco integrantes del equipo
              metidos a fuerza.
            </p>
          </Reveal>

          <Reveal className="mt-10">
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-fg">Para quién es</h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Empresas que necesitan lanzar un MVP o producto nuevo con fecha límite",
                  "Equipos que requieren integrar sistemas existentes (EDI, APIs, migraciones de datos)",
                  "Negocios que están migrando infraestructura legacy a cloud",
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
                Roles que pueden participar
              </h2>
              <p className="mt-1 text-sm text-fg-muted">
                Se asignan según el alcance del proyecto, no todos entran en todos los proyectos.
              </p>
              <div className="mt-4 overflow-hidden rounded-xl border border-border">
                {roles.map((r, i) => (
                  <div
                    key={r.rol}
                    className={cn(
                      "grid gap-1 p-4 text-sm sm:grid-cols-[180px_1fr] sm:gap-4",
                      i % 2 === 0 ? "bg-bg-muted" : "bg-bg",
                    )}
                  >
                    <span className="font-medium text-fg">{r.rol}</span>
                    <span className="text-fg-secondary">{r.funcion}</span>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal className="mt-12">
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-fg">Estructura de entregables</h2>
              <ol className="mt-4 space-y-3">
                {entregables.map((step, i) => (
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
            <section className="rounded-2xl border border-border bg-bg-muted p-6">
              <h2 className="text-xl font-semibold tracking-tight text-fg">
                Qué incluye el precio base (desde US$12,000)
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-fg-secondary">
                Proyectos de alcance acotado (ej. integración puntual, MVP simple) con 1-2 roles
                involucrados a tiempo parcial. Proyectos más grandes (múltiples roles, mayor
                duración) se cotizan por separado — el "desde" refleja el punto de entrada, no el
                techo.
              </p>
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
                Cotizar mi proyecto
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