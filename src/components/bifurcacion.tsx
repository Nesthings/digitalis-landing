import {
  ArrowRight,
  Check,
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
    bullets: ["Un solo responsable", "Reportes periódicos"],
    href: "/servicios/gestion",
    cta: "Ver gestión de proyectos",
    tone: "blue",
    bg: "/placeholders/case-1.svg",
    img: "/placeholders/client-1.svg",
    imgAlt: "[IMAGEN: gestión de proyectos de principio a fin]",
  },
  {
    icon: CloudCheck,
    title: "Consultoría",
    description:
      "DevOps, cloud y automatización. Acompañamos a tu equipo a modernizar infraestructura sin frenar el negocio.",
    bullets: ["Cloud y DevOps", "Automatización y observabilidad"],
    href: "/servicios/consultoria",
    cta: "Ver consultoría",
    tone: "cyan",
    bg: "/placeholders/case-2.svg",
    img: "/placeholders/client-2.svg",
    imgAlt: "[IMAGEN: consultoría técnica de infraestructura]",
  },
  {
    icon: CodeIcon,
    title: "Desarrollo a Medida",
    description:
      "MVPs, integraciones y migraciones. Construimos software que resuelve tu problema exacto, no otro.",
    bullets: ["MVPs e integraciones", "Migraciones sin frenar el negocio"],
    href: "/servicios/desarrollo",
    cta: "Ver desarrollo a medida",
    tone: "violet",
    bg: "/placeholders/case-3.svg",
    img: "/placeholders/client-3.svg",
    imgAlt: "[IMAGEN: desarrollo de software a medida]",
  },
  {
    icon: ShieldCheckIcon,
    title: "Consultoría de Ciberseguridad",
    description:
      "Auditorías, hardening y estrategia de seguridad para proteger tu infraestructura y tus datos.",
    bullets: ["Auditorías y hardening", "Cumplimiento y respuesta"],
    href: "/servicios/ciberseguridad",
    cta: "Ver ciberseguridad",
    tone: "emerald",
    bg: "/placeholders/case-4.svg",
    img: "/placeholders/client-4.svg",
    imgAlt: "[IMAGEN: ciberseguridad y hardening]",
  },
] as const;

export function Bifurcacion() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Servicios
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg text-balance md:text-4xl">
              Cuatro formas de trabajar con nosotros
            </h2>
            <p className="mt-3 text-lg text-fg-secondary text-pretty">
              De principio a fin: entender tu problema y resolverlo con la tecnología adecuada.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:gap-8">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="h-full">
              <GlassCard src={item.bg} tone={item.tone}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-1 flex-col p-7 sm:p-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs font-medium text-white/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowRight
                      size={20}
                      className="text-white/70 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-white"
                    />
                  </div>

                  <div className="mt-5">
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

                  <ul className="mt-5 space-y-2">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-white/90">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                          <Check size={12} weight="bold" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 overflow-hidden rounded-2xl border border-white/25 transition-transform duration-300 group-hover:scale-[1.01]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.img}
                      alt={item.imgAlt}
                      className="aspect-[16/10] w-full object-cover"
                      loading="lazy"
                    />
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