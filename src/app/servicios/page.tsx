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
import { GlassCard, GlassIcon } from "@/components/ui/glass-card";

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
    bg: "/placeholders/product-vetcore.svg",
    img: "/placeholders/client-1.svg",
    imgAlt: "[IMAGEN: gestión de proyectos de principio a fin]",
  },
  {
    icon: CloudCheck,
    title: "Consultoría técnica",
    description:
      "DevOps, cloud y automatización. Modernizamos infraestructura sin frenar tu negocio.",
    href: "/servicios/consultoria",
    cta: "Ver consultoría",
    bg: "/placeholders/product-gymcore.svg",
    img: "/placeholders/client-2.svg",
    imgAlt: "[IMAGEN: consultoría técnica de infraestructura]",
  },
  {
    icon: CodeIcon,
    title: "Desarrollo a medida",
    description:
      "MVPs, integraciones y migraciones. Construimos software que resuelve tu problema exacto.",
    href: "/servicios/desarrollo",
    cta: "Ver desarrollo a medida",
    bg: "/placeholders/hero-image.svg",
    img: "/placeholders/client-3.svg",
    imgAlt: "[IMAGEN: desarrollo de software a medida]",
  },
  {
    icon: ShieldCheckIcon,
    title: "Consultoría de ciberseguridad",
    description:
      "Auditorías, hardening y estrategia de seguridad para proteger tu infraestructura y tus datos.",
    href: "/servicios/ciberseguridad",
    cta: "Ver ciberseguridad",
    bg: "/placeholders/cta-background.svg",
    img: "/placeholders/client-4.svg",
    imgAlt: "[IMAGEN: ciberseguridad y hardening]",
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
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} className="h-full">
                <GlassCard src={s.bg} tone="blue">
                  <Link
                    href={s.href}
                    className="group flex h-full flex-1 flex-col justify-between gap-8 p-8 sm:p-10"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <GlassIcon>
                          <s.icon size={22} weight="duotone" />
                        </GlassIcon>
                        <ArrowRight
                          size={20}
                          className="mt-1 text-white/70 transition-colors group-hover:text-white"
                        />
                      </div>
                      <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
                        {s.title}
                      </h3>
                      <p className="mt-3 max-w-md text-base leading-relaxed text-white/80">
                        {s.description}
                      </p>
                    </div>

                    <div className="mt-6 overflow-hidden rounded-2xl border border-white/25 aspect-[16/9] transition-transform duration-300 group-hover:scale-[1.01]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={s.img}
                        alt={s.imgAlt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                      {s.cta}
                      <ArrowRight
                        size={14}
                        weight="bold"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}