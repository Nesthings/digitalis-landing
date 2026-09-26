import {
  ArrowRight,
  ClipboardText,
  CloudCheck,
  DeviceMobile,
  Globe,
  Robot,
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
    "Gestión de proyectos, desarrollo web, apps móviles, IA y chatbots RAG, consultoría técnica y ciberseguridad. Seis formas de trabajar con nosotros.",
};

const services = [
  {
    icon: ClipboardText,
    title: "Gestión de proyectos",
    description:
      "Nos hacemos cargo de tu proyecto de principio a fin: definición, planificación, ejecución y operación.",
    href: "/servicios/gestion",
    cta: "Ver gestión de proyectos",
    tone: "blue",
    bg: "/placeholders/case-1.svg",
    img: "/placeholders/client-1.svg",
    imgAlt: "[IMAGEN: gestión de proyectos de principio a fin]",
  },
  {
    icon: Globe,
    title: "Desarrollo web a medida",
    description:
      "Plataformas web, SaaS y portales a medida: rápidos, escalables y listos para crecer.",
    href: "/servicios/web",
    cta: "Ver desarrollo web",
    tone: "cyan",
    bg: "/placeholders/case-2.svg",
    img: "/placeholders/client-2.svg",
    imgAlt: "[IMAGEN: desarrollo web a medida]",
  },
  {
    icon: DeviceMobile,
    title: "Apps móviles a medida",
    description:
      "Aplicaciones nativas y multiplataforma para iOS y Android, pensadas para tus usuarios.",
    href: "/servicios/movil",
    cta: "Ver apps móviles",
    tone: "violet",
    bg: "/placeholders/case-3.svg",
    img: "/placeholders/client-3.svg",
    imgAlt: "[IMAGEN: desarrollo de aplicaciones móviles]",
  },
  {
    icon: Robot,
    title: "IA y chatbots RAG",
    description:
      "Asistentes con RAG sobre tus datos, automatizaciones e IA integrada en tu producto.",
    href: "/servicios/ia",
    cta: "Ver soluciones de IA",
    tone: "fuchsia",
    bg: "/placeholders/case-4.svg",
    img: "/placeholders/client-4.svg",
    imgAlt: "[IMAGEN: chatbots RAG e inteligencia artificial]",
  },
  {
    icon: CloudCheck,
    title: "Consultoría técnica",
    description:
      "DevOps, cloud y automatización. Modernizamos infraestructura sin frenar tu negocio.",
    href: "/servicios/consultoria",
    cta: "Ver consultoría",
    tone: "amber",
    bg: "/placeholders/case-5.svg",
    img: "/placeholders/client-5.svg",
    imgAlt: "[IMAGEN: consultoría técnica de infraestructura]",
  },
  {
    icon: ShieldCheckIcon,
    title: "Consultoría de ciberseguridad",
    description:
      "Auditorías, hardening y estrategia de seguridad para proteger tu infraestructura y tus datos.",
    href: "/servicios/ciberseguridad",
    cta: "Ver ciberseguridad",
    tone: "emerald",
    bg: "/placeholders/case-6.svg",
    img: "/placeholders/client-6.svg",
    imgAlt: "[IMAGEN: ciberseguridad y hardening]",
  },
] as const;

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Seis formas de trabajar con nosotros"
        description="Con una misma premisa: entender tu problema y resolverlo con la tecnología adecuada, de principio a fin."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08} className="h-full">
                <GlassCard src={s.bg} tone={s.tone}>
                  <Link
                    href={s.href}
                    className="group flex h-full flex-1 flex-col justify-between gap-6 p-7 sm:p-8"
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
                      <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/80">
                        {s.description}
                      </p>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-white/25 transition-transform duration-300 group-hover:scale-[1.01]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={s.img}
                        alt={s.imgAlt}
                        className="aspect-[16/10] w-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
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