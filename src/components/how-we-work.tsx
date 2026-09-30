import { Compass, Cpu, Gear, RocketLaunch } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard, GlassIcon } from "@/components/ui/glass-card";

const steps = [
  {
    icon: Compass,
    step: "01",
    title: "Descubrimiento",
    description: "Entendemos el problema real antes de escribir una sola línea de código.",
    detail:
      "Nos sentamos con vos, escuchamos cómo trabajás hoy y armamos un diagnóstico. Salís con un problema bien definido, prioridades claras y una idea realista del alcance.",
    bullets: ["Entrevistas con tu equipo", "Diagnóstico técnico", "Definición de alcance"],
    bg: "/placeholders/product-vetcore.svg",
  },
  {
    icon: Gear,
    step: "02",
    title: "Diseño y arquitectura",
    description: "Definimos la solución, el stack y los trade-offs técnicos con criterio.",
    detail:
      "Traducimos el problema a una arquitectura concreta: qué construimos, con qué tecnología y por qué. Todo documentado, con los trade-offs sobre la mesa para que decidas con información.",
    bullets: ["Diseño de la solución", "Elección de stack", "Trade-offs documentados"],
    bg: "/placeholders/product-gymcore.svg",
  },
  {
    icon: Cpu,
    step: "03",
    title: "Construcción",
    description: "Desarrollamos en iteraciones cortas, con deploy continuo desde el día uno.",
    detail:
      "Construimos en sprints de una o dos semanas, con entregas revisables y deploy continuo. Seguís el avance en todo momento y probás cada versión apenas está lista.",
    bullets: ["Sprints cortos", "Deploy continuo", "Entregas revisables"],
    bg: "/placeholders/hero-image.svg",
  },
  {
    icon: RocketLaunch,
    step: "04",
    title: "Operación y mejora",
    description: "Monitoreamos, medimos y evolucionamos el producto con datos.",
    detail:
      "Lo llevamos a producción, monitoreamos que todo funcione y usamos los datos reales para decidir la próxima mejora. El producto no se entrega y se abandona: evoluciona con vos.",
    bullets: ["Monitoreo y alertas", "Métricas de uso", "Evolución continua"],
    bg: "/placeholders/cta-background.svg",
  },
];

export function HowWeWork() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-fg text-balance md:text-4xl">
              Cómo trabajamos
            </h2>
            <p className="mt-3 text-lg text-fg-secondary text-pretty">
              Un proceso simple y predecible, para que sepas qué esperar en cada etapa.
            </p>
          </div>
        </Reveal>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.08} className="h-full">
              <div className="group/card flex h-full flex-col">
                <GlassCard src={s.bg} hover={false}>
                  <div className="relative flex h-full flex-col p-6">
                    <span className="absolute right-5 top-5 font-mono text-xs font-medium text-white/60">
                      {s.step}
                    </span>
                    <GlassIcon>
                      <s.icon size={20} weight="duotone" />
                    </GlassIcon>
                    <h3 className="mt-4 text-base font-semibold text-white">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/80">
                      {s.description}
                    </p>
                  </div>
                </GlassCard>

                {/* Cajón: se despliega desde abajo al pasar el mouse */}
                <div
                  className="pointer-events-none max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover/card:pointer-events-auto group-hover/card:max-h-72 group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <div className="mt-2 rounded-b-2xl border border-t-0 border-white/25 bg-white/[0.06] p-5 backdrop-blur-lg">
                    <p className="text-sm leading-relaxed text-white/85">{s.detail}</p>
                    <ul className="mt-3 space-y-1.5">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-xs text-white/75">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}