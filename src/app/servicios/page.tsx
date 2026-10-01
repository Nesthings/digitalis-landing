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
import { IconPanel } from "@/components/ui/icon-panel";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Desarrollo web, consultoría técnica, apps móviles, IA y chatbots RAG, ciberseguridad y gestión de proyectos. Seis formas de trabajar con nosotros.",
};

const services: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
  cta: string;
  tone: "blue" | "cyan" | "violet" | "fuchsia" | "emerald" | "amber";
  bg: string;
  image?: string;
}[] = [
  {
    icon: Globe,
    title: "Desarrollo web a medida",
    description:
      "Plataformas web, SaaS y portales a medida: rápidos, escalables y listos para crecer.",
    href: "/servicios/web",
    cta: "Ver desarrollo web",
    tone: "cyan",
    bg: "/placeholders/case-2.svg",
    image: "/desarrollo-web.jpg",
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
  },
  {
    icon: ClipboardText,
    title: "Gestión de proyectos",
    description:
      "Nos hacemos cargo de tu proyecto de principio a fin: definición, planificación, ejecución y operación.",
    href: "/servicios/gestion",
    cta: "Ver gestión de proyectos",
    tone: "blue",
    bg: "/placeholders/case-1.svg",
  },
];

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
                        <GlassIcon tone={s.tone}>
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

                    {s.image ? (
                      <div className="relative overflow-hidden rounded-2xl border border-white/25 bg-white/[0.08] transition-transform duration-300 group-hover:scale-[1.01]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={s.image}
                          alt={`Imagen de ${s.title}`}
                          className="aspect-[16/10] w-full object-cover opacity-70 backdrop-blur-sm"
                          loading="lazy"
                        />
                        {/* Velo glass encima de la imagen */}
                        <div className="pointer-events-none absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
                      </div>
                    ) : (
                      <IconPanel
                        icon={s.icon}
                        tone={s.tone}
                        className="transition-transform duration-300 group-hover:scale-[1.01]"
                      />
                    )}

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