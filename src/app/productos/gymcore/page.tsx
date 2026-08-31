import {
  ArrowRight,
  Building,
  ChartLineUp,
  Check,
  CloudCheck,
  CreditCard,
  DeviceMobile,
  Funnel,
  Gauge,
  QrCode,
  TrendDown,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { ProductHero } from "@/components/product-hero";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedMetric } from "@/components/ui/animated-metric";

export const metadata: Metadata = {
  title: "Gymcore",
  description:
    "Software para gimnasios y estudios: socios, cobranza, check-in sin hardware e inteligencia de retención en un solo sistema.",
};

const badges = [
  { icon: UsersThree, label: "SaaS multiusuario" },
  { icon: Building, label: "Multi-sucursal" },
  { icon: CloudCheck, label: "100% en la nube" },
  { icon: QrCode, label: "Check-in sin hardware" },
];

const features = [
  {
    icon: UsersThree,
    title: "Socios y membresías al día",
    tagline: "Da de alta, renueva y no dejes que se te escape ninguna cuota",
    description:
      "Registra socios con foto y expediente completo, asígnales un plan de membresía y deja que GymCore marque cada renovación y cada vencimiento. Todo tu padrón, ordenado y a un clic.",
    placeholder:
      "[IMAGEN: alta de socio con foto, asignación de plan y membresías activas, por vencer y vencidas]",
  },
  {
    icon: QrCode,
    title: "Check-in por QR o nombre, sin hardware",
    tagline: "Entra y registra en segundos, sin lectoras ni tarjetas",
    description:
      "Cada socio lleva su QR en el celular: escanéalo o busca por nombre y registra su entrada al instante. Cero inversión en hardware, cero filas en recepción, control real de quién entrena.",
    placeholder: "[IMAGEN: registro de entrada escaneando el QR del celular del socio]",
  },
  {
    icon: CreditCard,
    title: "Cobranza con recordatorios",
    tagline: "Cobra a tiempo y deja que el sistema recuerde por ti",
    description:
      "Pagos en efectivo, tarjeta, transferencia o Mercado Pago con recibo PDF al instante. Recordatorios automáticos de vencimiento y seguimiento de morosidad para que ninguna cuota se pierda.",
    placeholder: "[IMAGEN: registro de pago con recibo PDF y recordatorios de vencimiento]",
  },
  {
    icon: TrendDown,
    title: "Riesgo de abandono: el diferencial de GymCore",
    tagline: "Ve quién está por irse… antes de que se vaya",
    description:
      "El sistema analiza asistencia, tendencia y estado de membresía para dar a cada socio un score de riesgo con acción sugerida. Retén a tus mejores socios antes de perderlos.",
    placeholder: "[IMAGEN: score 0-100 de un socio con días sin asistir y acción sugerida]",
  },
  {
    icon: DeviceMobile,
    title: "Portal del socio: metas, logros y racha",
    tagline: "Tu socio enganchado, incluso fuera del gimnasio",
    description:
      "Cada socio con su propio portal: metas, logros, progreso de peso y racha de asistencias. La motivación que convierte visitas en renovaciones.",
    placeholder: "[IMAGEN: vista del socio desde su celular con metas, logros y racha]",
  },
  {
    icon: ChartLineUp,
    title: "Dashboard operativo",
    tagline: "Decisiones con números, no con corazonadas",
    description:
      "Ingresos, altas, renovaciones, cancelaciones, morosidad y riesgo en un vistazo. Mira cómo va tu gimnasio hoy, esta semana o este mes.",
    placeholder: "[IMAGEN: dashboard con ingresos, socios nuevos y riesgo de abandono]",
  },
  {
    icon: Funnel,
    title: "CRM de captación",
    tagline: "Convierte prospectos en socios",
    description:
      "Registra cada lead, síguelo por su etapa de venta y mide tu conversión. Del que pregunta al que entrena, todo el camino bajo control.",
    placeholder: "[IMAGEN: pipeline de leads con etapas de seguimiento y conversión]",
  },
  {
    icon: UsersThree,
    title: "Multiusuario, roles y sucursales",
    tagline: "Cada quien con su rol, tu negocio a escala",
    description:
      "Admins, recepción y coaches con permisos por módulo, y multi-sucursal para cadenas. Escala de un gimnasio a varios sin cambiar de sistema.",
    placeholder: "[IMAGEN: panel de configuración con roles, sucursales y permisos]",
  },
];

const steps = [
  {
    icon: Building,
    step: "01",
    title: "Crea tu gimnasio",
    description: "Configúralo en minutos con un asistente sencillo.",
  },
  {
    icon: UsersThree,
    step: "02",
    title: "Registra socios y equipo",
    description:
      "Agrega tu staff, crea tus planes de membresía y da de alta a tus socios con foto y expediente.",
  },
  {
    icon: Gauge,
    step: "03",
    title: "Opera tu día a día",
    description:
      "Check-in, cobra, sigue tus leads y revisa tu riesgo de abandono. Todo desde un solo lugar.",
  },
];

const benefits = [
  "Menos cuotas vencidas y olvidadas",
  "Check-in sin hardware ni filas",
  "Socios que se renuevan más y por más tiempo",
  "Decisiones con datos reales",
];

export default function GymcorePage() {
  return (
    <>
      <PageHeader
        eyebrow="Productos"
        title="Gymcore"
        description="Software para gimnasios y estudios de entrenamiento, desarrollado y operado in-house por Digitalis Labs."
      />
      <ProductHero
        name="Gymcore"
        initial="G"
        oneLiner="Software para gimnasios y estudios de entrenamiento"
        features={features.slice(0, 3).map((f) => f.title)}
        src="/placeholders/product-gymcore.svg"
        alt="[PLACEHOLDER: screenshot del sistema Gymcore, gimnasios y estudios]"
        siteUrl="#"
        tone="electric"
        logo="gymcore"
      />

      {/* Hero de producto */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="relative isolate mx-auto max-w-4xl overflow-hidden rounded-3xl">
              <div aria-hidden className="absolute inset-0 -z-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/placeholders/product-gymcore.svg"
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-green-400/45" />
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/50 via-lime-400/45 to-lime-300/50 dark:from-green-900/55 dark:via-green-800/40 dark:to-lime-800/45" />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(163,230,53,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(163,230,53,0.18) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
              </div>
              <div className="relative rounded-3xl border border-white/30 bg-white/10 px-6 py-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] backdrop-blur-lg sm:px-10 md:py-16">
                <div className="mx-auto max-w-3xl text-center">
                  <p className="text-xl leading-relaxed text-white text-pretty md:text-2xl">
                    Deja de perseguir cuotas en libretas y de enterarte tarde de quiénes se
                    están yendo. GymCore concentra socios, cobranza, check-in sin hardware e
                    inteligencia de retención en un solo sistema.
                  </p>
                  <p className="mt-4 text-base text-white/80 text-pretty md:text-lg">
                    Menos papeleo, más tiempo para entrenar tu negocio.
                  </p>
                </div>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contacto"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-base font-medium text-green-700 shadow-elevation-1 transition-all duration-200 hover:bg-white/90 hover:shadow-elevation-2 active:translate-y-px"
                  >
                    Pruébalo gratis
                    <ArrowRight size={16} weight="bold" />
                  </Link>
                  <Link
                    href="#funciones"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/15 px-7 text-base font-medium text-white backdrop-blur-lg transition-all duration-200 hover:bg-white/25 active:translate-y-px"
                  >
                    Conoce las funciones
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
                  {badges.map((b) => (
                    <span
                      key={b.label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-lg"
                    >
                      <b.icon size={13} weight="bold" />
                      {b.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* El problema */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <MediaPlaceholder label="[IMAGEN: comparación rápida — libreta de asistencias y excel desordenado vs GymCore ordenado]" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-semibold tracking-tight text-fg text-balance md:text-4xl">
                ¿Suena familiar?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-fg-secondary md:text-lg">
                Listas de asistencia en papel, cuotas que vencen y nadie recuerda, socios que
                dejan de venir sin que te des cuenta y un mar de hojas de cálculo para saber
                cuánto ganas al mes.
              </p>
              <p className="mt-4 text-base font-medium text-fg md:text-lg">
                Tu tiempo vale más que eso.
              </p>
              <p className="mt-4 text-base leading-relaxed text-fg-secondary md:text-lg">
                GymCore concentra toda la operación de tu gimnasio en una sola plataforma fácil
                de usar, pensada para el día a día real de un gimnasio.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Características destacadas */}
      <section id="funciones" className="scroll-mt-24 border-t border-border bg-bg-muted py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Funciones
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg text-balance md:text-4xl">
                Todo lo que tu gimnasio necesita, en un solo lugar
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 0.07} className="h-full">
                <GlassCard src="/placeholders/product-gymcore.svg" tone="electric">
                  <div className="flex h-full flex-col p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/40 bg-white/25 text-white backdrop-blur-lg">
                        <f.icon size={20} weight="duotone" />
                      </span>
                      <h3 className="text-base font-semibold text-white">{f.title}</h3>
                    </div>
                    <MediaPlaceholder label={f.placeholder} className="mt-6 border-white/25 bg-white/10 text-white/60" />
                    <p className="mt-6 text-sm font-medium text-white">“{f.tagline}”</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">
                      {f.description}
                    </p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Cómo funciona */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Cómo funciona
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg text-balance md:text-4xl">
                De cero a operando en tres pasos
              </h2>
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <MediaPlaceholder label="[IMAGEN: alta de gimnasio y primer login guiado]" className="mb-12 aspect-[21/9]" />
          </Reveal>

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.08} className="h-full">
                <GlassCard src="/placeholders/product-gymcore.svg" tone="electric">
                  <div className="relative flex h-full flex-col p-6">
                    <span className="absolute right-5 top-5 font-mono text-xs font-medium text-white/60">
                      {s.step}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/40 bg-white/25 text-white backdrop-blur-lg">
                      <s.icon size={20} weight="duotone" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-white">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/80">
                      {s.description}
                    </p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Beneficios */}
      <section className="border-t border-border bg-bg-muted py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <AnimatedMetric
                value={60}
                prefix="+"
                suffix="%"
                label="menos tiempo en tareas administrativas"
                className="border-l-2 border-accent pl-4"
              />
              <ul className="mt-10 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-base text-fg">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Check size={12} weight="bold" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <MediaPlaceholder label="[IMAGEN: métricas animadas o insignias del gimnasio]" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Testimonio */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <figure className="mx-auto max-w-3xl rounded-3xl border border-border bg-bg-muted p-8 sm:p-12">
              <MediaPlaceholder label="[IMAGEN: logo o captura de un gimnasio real]" className="mb-8 aspect-[16/6]" />
              <blockquote className="text-lg leading-relaxed text-fg text-pretty md:text-xl">
                “Pasamos de libretas y excel a tener todo el gimnasio en la nube. El check-in
                y el score de riesgo nos ahorran horas cada semana y nos ayudan a retener
                socios mes con mes.”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg font-mono text-sm font-semibold text-accent">
                  ?
                </span>
                <div>
                  <div className="text-sm font-medium text-fg">[NOMBRE]</div>
                  <div className="text-xs text-fg-muted">Director de [NOMBRE DEL GIMNASIO]</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/placeholders/product-gymcore.svg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-green-400/45" />
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/50 via-lime-400/45 to-lime-300/50 dark:from-green-900/55 dark:via-green-800/40 dark:to-lime-800/45" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(163,230,53,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(163,230,53,0.18) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <Container className="relative py-20 md:py-24">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight text-white text-balance md:text-4xl">
                ¿Listo para llevar tu gimnasio al siguiente nivel?
              </h2>
              <p className="mt-3 text-base text-white/80 md:text-lg text-pretty">
                Únete a gimnasios que ya operan con GymCore.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-base font-medium text-green-700 shadow-elevation-2 transition-all duration-200 hover:bg-white/90 hover:shadow-elevation-3 active:translate-y-px"
            >
              Pruébalo gratis <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}