import { Check, ClipboardText, Code, Flask, GearSix } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { CtaSection } from "@/components/ui/cta-section";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Gestión de proyectos de software",
  description:
    "Nos hacemos cargo de tu proyecto de software de principio a fin: definición, planificación, equipo, desarrollo, despliegue y operación.",
};

const phases = [
  { icon: ClipboardText, title: "Definición y alcance", description: "Transformamos tu idea en un plan claro con objetivos, entregables y plazos realistas." },
  { icon: GearSix, title: "Planificación", description: "Armamos el equipo, el cronograma y el stack. Todo documentado, todo transparente." },
  { icon: Code, title: "Ejecución", description: "Desarrollamos en iteraciones cortas con revisiones frecuentes. Siempre sabes cómo va todo." },
  { icon: Flask, title: "Deploy y operación", description: "Lo llevamos a producción, monitoreamos y acompañamos hasta que el sistema es estable." },
];

export default function GestionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Gestionamos tu proyecto"
        description="Nos hacemos cargo de tu proyecto de principio a fin: definición, planificación, equipo, desarrollo, despliegue y operación. Tú te ocupas del negocio, nosotros del resto."
      />

      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-fg md:text-3xl">
                Un solo equipo, de principio a fin
              </h2>
              <p className="mt-3 text-lg text-fg-secondary text-pretty">
                Cuatro fases claras para que sepas qué está pasando y qué viene en cada
                momento del proyecto.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {phases.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-bg-muted p-6 transition-all duration-300 hover:bg-bg hover:shadow-elevation-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <p.icon size={20} weight="duotone" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-fg">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-secondary">
                    {p.description}
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

      <CtaSection
        title="¿Tienes un proyecto que gestionar?"
        description="Cuéntanos qué necesitas construir o mejorar. Te respondemos con un plan claro, sin vueltas."
      />
    </>
  );
}