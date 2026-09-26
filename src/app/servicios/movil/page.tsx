import {
  Check,
  DeviceMobile,
  Devices,
  GearSix,
  Rocket,
  Storefront,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { CtaSection } from "@/components/ui/cta-section";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Desarrollo de apps móviles a medida",
  description:
    "Aplicaciones móviles nativas y multiplataforma para iOS y Android, pensadas para la experiencia de tus usuarios.",
};

const types = [
  {
    icon: DeviceMobile,
    title: "Apps nativas",
    description: "Máximo rendimiento y acceso total al dispositivo (iOS con Swift, Android con Kotlin).",
  },
  {
    icon: Devices,
    title: "Multiplataforma",
    description: "Una sola base para iOS y Android con React Native o Flutter: más rápido y más económico.",
  },
  {
    icon: GearSix,
    title: "Apps internas",
    description: "Herramientas para tu equipo: relevamiento en campo, stock, control de accesos.",
  },
  {
    icon: Storefront,
    title: "Publicación en stores",
    description: "Te acompañamos en el alta, revisión y publicación en App Store y Google Play.",
  },
];

const stack = [
  "React Native",
  "Expo",
  "Flutter",
  "Swift",
  "Kotlin",
  "TypeScript",
  "Firebase",
  "REST / GraphQL",
  "Push notifications",
  "App Store / Google Play",
];

const includes = [
  "Diseño de experiencia móvil (UX/UI)",
  "Integración con tus sistemas y APIs",
  "Notificaciones push y modo offline",
  "Publicación, analytics y mantenimiento",
];

export default function MovilPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Apps móviles a medida"
        description="Aplicaciones nativas y multiplataforma para iOS y Android, pensadas para la experiencia de tus usuarios y el día a día de tu negocio."
        tone="violet"
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {types.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.07} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-bg-muted p-6 transition-all duration-300 hover:bg-bg hover:shadow-elevation-2">
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
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-fg md:text-3xl">
                De la idea a la store
              </h2>
              <ul className="mt-6 space-y-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-fg-secondary">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
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
                  <Rocket size={20} className="text-accent" aria-hidden="true" />
                  Stack tecnológico
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaSection
        title="¿Necesitas una app móvil?"
        description="Cuéntanos qué querés construir. Te respondemos con un plan claro y un presupuesto cerrado."
      />
    </>
  );
}