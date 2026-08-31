import {
  ArrowRight,
  ClipboardText,
  CloudCheck,
  CodeIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard, GlassIcon } from "@/components/ui/glass-card";

const items = [
  {
    icon: ClipboardText,
    title: "Gestión de Proyectos",
    description:
      "Nos hacemos cargo de tu proyecto de principio a fin: definición, planificación, ejecución y operación.",
    href: "/servicios/gestion",
    cta: "Ver gestión de proyectos",
    bg: "/placeholders/product-vetcore.svg",
  },
  {
    icon: CloudCheck,
    title: "Consultoría",
    description:
      "DevOps, cloud y automatización. Acompañamos a tu equipo a modernizar infraestructura sin frenar el negocio.",
    href: "/servicios/consultoria",
    cta: "Ver consultoría",
    bg: "/placeholders/product-gymcore.svg",
  },
  {
    icon: CodeIcon,
    title: "Desarrollo a Medida",
    description:
      "MVPs, integraciones y migraciones. Construimos software que resuelve tu problema exacto, no otro.",
    href: "/servicios/desarrollo",
    cta: "Ver desarrollo a medida",
    bg: "/placeholders/hero-image.svg",
  },
  {
    icon: ShieldCheckIcon,
    title: "Consultoría de Ciberseguridad",
    description:
      "Auditorías, hardening y estrategia de seguridad para proteger tu infraestructura y tus datos.",
    href: "/servicios/ciberseguridad",
    cta: "Ver ciberseguridad",
    bg: "/placeholders/cta-background.svg",
  },
];

export function Bifurcacion() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="h-full">
              <GlassCard src={item.bg}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-1 flex-col justify-between p-7"
                >
                  <div>
                    <GlassIcon>
                      <item.icon size={22} weight="duotone" />
                    </GlassIcon>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">
                      {item.description}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                    {item.cta}
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
  );
}