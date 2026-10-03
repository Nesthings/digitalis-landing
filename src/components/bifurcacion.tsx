import {
  ArrowRight,
  Check,
  ClipboardText,
  CloudCheck,
  DeviceMobile,
  Globe,
  Robot,
  ShieldCheckIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { IconPanel } from "@/components/ui/icon-panel";

const items: {
  icon: React.ElementType;
  title: string;
  description: string;
  bullets: string[];
  href: string;
  cta: string;
  tone: "blue" | "cyan" | "violet" | "fuchsia" | "emerald" | "amber";
  bg: string;
  image?: string;
}[] = [
  {
    icon: Globe,
    title: "Desarrollo Web a Medida",
    description:
      "Plataformas web, SaaS y portales a medida: rápidos, escalables y listos para crecer con tu negocio.",
    bullets: ["SaaS y portales", "Rendimiento y SEO"],
    href: "/servicios/web",
    cta: "Ver desarrollo web",
    tone: "cyan",
    bg: "/placeholders/case-2.svg",
    image: "/desarrollo-web.jpg",
  },
  {
    icon: CloudCheck,
    title: "Consultoría Técnica",
    description:
      "DevOps, cloud y automatización. Modernizamos tu infraestructura sin frenar el negocio.",
    bullets: ["Cloud y DevOps", "Automatización y observabilidad"],
    href: "/servicios/consultoria",
    cta: "Ver consultoría",
    tone: "amber",
    bg: "/placeholders/case-5.svg",
    image: "/consultoria-tecnica.png",
  },
  {
    icon: DeviceMobile,
    title: "Apps Móviles a Medida",
    description:
      "Aplicaciones nativas y multiplataforma para iOS y Android, pensadas para la experiencia de tus usuarios.",
    bullets: ["iOS y Android", "Publicación en stores"],
    href: "/servicios/movil",
    cta: "Ver apps móviles",
    tone: "violet",
    bg: "/placeholders/case-3.svg",
    image: "/apps-moviles.png",
  },
  {
    icon: Robot,
    title: "IA y Chatbots (RAG)",
    description:
      "Chatbots con RAG sobre tus propios datos, asistentes y automatizaciones con modelos de lenguaje.",
    bullets: ["Chatbots RAG", "Automatización con IA"],
    href: "/servicios/ia",
    cta: "Ver soluciones de IA",
    tone: "fuchsia",
    bg: "/placeholders/case-4.svg",
    image: "/ia-chatbots.png",
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
    bg: "/placeholders/case-6.svg",
    image: "/ciberseguridad.png",
  },
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
    image: "/gestion-proyectos.jpg",
  },
];

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
              Todo lo que tu empresa necesita para crecer
            </h2>
            <p className="mt-3 text-lg text-fg-secondary text-pretty">
              De la estrategia al código: entender tu problema y resolverlo con la tecnología
              adecuada, de principio a fin.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08} className="h-full">
              <GlassCard src={item.bg} tone={item.tone}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-1 flex-col p-6 sm:p-7"
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

                  <div className="mt-5 flex-1">
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">
                      {item.description}
                    </p>

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
                  </div>

                  <IconPanel
                    icon={item.icon}
                    tone={item.tone}
                    src={item.image}
                    className="mt-6 transition-transform duration-300 group-hover:scale-[1.01]"
                  />

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