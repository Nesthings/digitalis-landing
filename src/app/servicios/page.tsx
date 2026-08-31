import {
  ArrowRight,
  ClipboardText,
  CloudCheck,
  CodeIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Gestión de proyectos, consultoría técnica, desarrollo a medida y ciberseguridad. Cuatro formas de trabajar con nosotros, con una misma premisa: resolver tu problema con la tecnología adecuada.",
};

const services = [
  {
    icon: ClipboardText,
    title: "Gestión de proyectos",
    description:
      "Nos hacemos cargo de tu proyecto de principio a fin: definición, planificación, ejecución y operación.",
    href: "/servicios/gestion",
    cta: "Ver gestión de proyectos",
  },
  {
    icon: CloudCheck,
    title: "Consultoría técnica",
    description:
      "DevOps, cloud y automatización. Modernizamos infraestructura sin frenar tu negocio.",
    href: "/servicios/consultoria",
    cta: "Ver consultoría",
  },
  {
    icon: CodeIcon,
    title: "Desarrollo a medida",
    description:
      "MVPs, integraciones y migraciones. Construimos software que resuelve tu problema exacto.",
    href: "/servicios/desarrollo",
    cta: "Ver desarrollo a medida",
  },
  {
    icon: ShieldCheckIcon,
    title: "Consultoría de ciberseguridad",
    description:
      "Auditorías, hardening y estrategia de seguridad para proteger tu infraestructura y tus datos.",
    href: "/servicios/ciberseguridad",
    cta: "Ver ciberseguridad",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Cuatro formas de trabajar con nosotros"
        description="Con una misma premisa: entender tu problema y resolverlo con la tecnología adecuada, de principio a fin."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} className="h-full">
                <Link
                  href={s.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-bg-muted p-7 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-bg hover:shadow-elevation-2"
                >
                  <div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg text-accent transition-transform duration-300 group-hover:scale-105">
                      <s.icon size={22} weight="duotone" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-fg">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
                      {s.description}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    {s.cta}
                    <ArrowRight
                      size={14}
                      weight="bold"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}