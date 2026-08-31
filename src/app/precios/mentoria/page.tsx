import { ArrowRight, Check, X } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Mentoría técnica",
  description:
    "Acceso directo a un ingeniero senior: sesiones de arquitectura, revisión de código e infraestructura y chat directo.",
};

const incluye = [
  { title: "Sesiones de arquitectura", detalle: "4 sesiones al mes, 1 hora cada una, agendadas por semana" },
  { title: "Revisión de código", detalle: "Hasta 2 revisiones de PR o repos por mes" },
  { title: "Revisión de infraestructura", detalle: "Auditoría ligera de configuración cloud/CI-CD una vez al mes" },
  { title: "Chat directo", detalle: "Preguntas puntuales entre sesiones, respuesta en menos de 24h hábiles" },
];

const noIncluye = [
  "Desarrollo o implementación directa (para eso está Proyecto o Retainer)",
  "Soporte de incidentes en producción",
  "Disponibilidad fuera de horario laboral",
];

const comoFunciona = [
  "Llamada inicial de 30 min para entender tu contexto técnico",
  "Se agendan las 4 sesiones del mes según tu disponibilidad",
  "Canal de chat se activa el mismo día de la primera sesión",
  "Sin permanencia mínima — cancelas con 15 días de aviso",
];

export default function MentoriaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Precios · Mentoría"
        title="Mentoría técnica"
        description="US$1,000 por mes"
      />

      <Container className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-base leading-relaxed text-fg-secondary md:text-lg">
              Acceso directo a un ingeniero senior — sin capas de project manager, sin junior
              aprendiendo con tu presupuesto. Ideal para equipos que ya tienen dirección técnica
              pero quieren un segundo criterio antes de tomar decisiones caras: arquitectura,
              elección de stack, revisión de decisiones de infraestructura o simplemente
              destrabar un problema puntual.
            </p>
          </Reveal>

          <Reveal className="mt-10">
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-fg">Para quién es</h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Equipos internos que necesitan un asesor externo sin contratar full-time",
                  "Fundadores técnicos que quieren validar decisiones antes de construir",
                  "Empresas que ya tienen dev team pero les falta experiencia en DevOps/infraestructura",
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
              <h2 className="text-xl font-semibold tracking-tight text-fg">Qué incluye</h2>
              <div className="mt-4 overflow-hidden rounded-xl border border-border">
                {incluye.map((item, i) => (
                  <div
                    key={item.title}
                    className={cn(
                      "grid gap-1 p-4 text-sm sm:grid-cols-[200px_1fr] sm:gap-4",
                      i % 2 === 0 ? "bg-bg-muted" : "bg-bg",
                    )}
                  >
                    <span className="font-medium text-fg">{item.title}</span>
                    <span className="text-fg-secondary">{item.detalle}</span>
                  </div>
                ))}
              </div>
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
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-base font-medium text-accent-contrast shadow-elevation-1 transition-all duration-200 hover:bg-accent-hover hover:shadow-elevation-2 active:translate-y-px"
              >
                Elegir Mentoría
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