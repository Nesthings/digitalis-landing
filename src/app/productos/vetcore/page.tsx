import {
  ArrowRight,
  BellRinging,
  Building,
  CalendarCheck,
  ChartLineUp,
  Check,
  ClipboardText,
  CloudCheck,
  Gauge,
  DeviceMobile,
  Heartbeat,
  LockKey,
  Package,
  PawPrint,
  Pulse,
  QrCode,
  Receipt,
  Scan,
  Signature,
  Sliders,
  SlidersHorizontal,
  Syringe,
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
  title: "Vetcore",
  description:
    "Sistema de gestión para clínicas veterinarias: agenda, expedientes, vacunas, inventario y finanzas en un solo lugar.",
};

const badges = [
  { icon: UsersThree, label: "SaaS multiusuario" },
  { icon: Building, label: "Multi-sucursal" },
  { icon: CloudCheck, label: "100% en la nube" },
  { icon: LockKey, label: "Datos siempre seguros" },
];

const features = [
  {
    icon: CalendarCheck,
    title: "Agenda inteligente y lista de espera",
    tagline: "Tu agenda al día, sin huecos perdidos",
    description:
      "Maneja citas por día o semana, bloquea horarios, y cuando no haya espacio, registra al paciente en la lista de espera. Cuando se libera un hueco, el sistema te guía para ofrecerlo y cerrarlo en segundos. Nada se te escapa.",
    placeholder: "[IMAGEN: navegación en la agenda por día/semana y lista de espera]",
    video: "/placeholders/vc-agenda.webm",
    aspect: "900/542",
  },
  {
    icon: QrCode,
    title: "Expedientes digitales con cartilla y QR",
    tagline: "La historia clínica completa, a un clic",
    description:
      "Cada paciente con su expediente digital: foto, datos, peso con historial, alergias, alertas y vacunas. Comparte la cartilla con el dueño mediante un QR: ellos la ven desde su celular y tú mantienes el control de todo.",
    placeholder: "[IMAGEN: ficha de la mascota con foto, peso en gráfica y cartilla con QR]",
    video: "/placeholders/vc-expedientes.webm",
    aspect: "900/557",
  },
  {
    icon: Receipt,
    title: "Checkout de consultas: consulta + recibo en un solo paso",
    tagline: "Atiende, cobra y entrega el recibo antes de que termine el día",
    description:
      "Registra la consulta, agrega servicios y productos del catálogo, descuenta stock automáticamente y genera el recibo PDF en un solo paso. Menos tecleo, más flujo de pacientes, cero papeles.",
    placeholder: "[IMAGEN: wizard de nueva consulta con recibo PDF]",
    video: "/placeholders/vc-checkout.webm",
    aspect: "900/557",
  },
  {
    icon: Scan,
    title: "Cartilla digital y check-in con QR",
    tagline: "Tu paciente conectado, tu recepción más ágil",
    description:
      "Comparte la cartilla con los dueños y permiteles ver el historial de su mascota al instante. Al llegar, apunta la webcam al QR de la cartilla y abre el expediente en segundos: sin buscar ni tipear, la historia clínica ya está en pantalla.",
    placeholder: "[IMAGEN: cartilla del paciente y check-in escaneando el QR con la webcam]",
  },
  {
    icon: Package,
    title: "Inventario con alertas de stock",
    tagline: "Inventario que se descuenta solo",
    description:
      "Catálogo de productos y servicios con precios, fotos y stock. Cada venta y consulta descuenta existencias automáticamente y te avisa cuando un producto está por agotarse. Compra justo lo que necesitas, ni más ni menos.",
    placeholder: "[IMAGEN: lista de productos con stock y alerta de reabastecimiento]",
    video: "/placeholders/vc-insumyprod.webm",
    aspect: "900/557",
  },
  {
    icon: ChartLineUp,
    title: "Dashboard financiero",
    tagline: "Decisiones con números, no con corazonadas",
    description:
      "Ingresos por servicios y productos, ticket promedio, facturas pagadas y por cobrar, gastos y gráficas de evolución. Mira cómo le va a tu clínica hoy, esta semana o este mes, con un vistazo.",
    placeholder: "[IMAGEN: dashboard de finanzas con ingresos y gráficas]",
    video: "/placeholders/vc-finanzas.webm",
    aspect: "900/564",
  },
  {
    icon: BellRinging,
    title: "Alertas inteligentes",
    tagline: "VetCore vigila por ti",
    description:
      "El sistema analiza la operación y genera alertas deterministas: vacunas vencidas, pacientes en seguimiento, cambios de peso y más. Nada importante se queda esperando en un cajón.",
    placeholder: "[IMAGEN: lista de alertas automáticas de la operación]",
    video: "/placeholders/vc-alert-int.webm",
    aspect: "900/564",
  },
  {
    icon: UsersThree,
    title: "Multiusuario, roles, sucursales y accesos",
    tagline: "Todo tu equipo, cada quien con su rol",
    description:
      "Admins, veterinarios y recepción con permisos por módulo y multi-sucursal para cadenas. Tú decides qué ve cada empleado: bloquea o permite el acceso de cada miembro por módulo y por sucursal, con permisos finos y auditables. Escala de una clínica a varias sin cambiar de sistema.",
    placeholder: "[IMAGEN: panel de configuración con roles, sucursales y permisos]",
    video: "/placeholders/vc-control-acceso.webm",
    aspect: "900/564",
  },
  {
    icon: ClipboardText,
    title: "Bitácora y trazabilidad",
    tagline: "Sabé quién, qué y cuándo se hizo",
    description:
      "Registro de auditoría completo de cada acción sobre expedientes, citas, cobros y configuraciones: quién la hizo, qué cambió y cuándo. Transparencia total y control para cumplimiento, sin depender de la memoria del equipo.",
    placeholder: "[IMAGEN: bitácora de auditoría con historial de cambios]",
    video: "/placeholders/vc-bitacora.webm",
    aspect: "900/564",
  },
  {
    icon: Heartbeat,
    title: "Modo veterinario",
    tagline: "Atiende sin perder el foco en el paciente",
    description:
      "Una vista enfocada para el consultorio: acceso directo a la ficha del paciente, peso, constantes y notas clínicas en pantalla, sin distracciones ni navegación extra. Todo lo que necesitas en la consulta, a un clic.",
    placeholder: "[IMAGEN: pantalla del modo veterinario en el consultorio]",
  },
  {
    icon: Pulse,
    title: "Hospitalización",
    tagline: "Monitorea en tiempo real a tus pacientes",
    description:
      "Seguimiento continuo de los pacientes internados: estado, signos vitales, medicación y notas del equipo en un solo tablero. Alertas cuando algo requiere atención, para que nada se escape durante la internación.",
    placeholder: "[IMAGEN: tablero de hospitalización con monitoreo en tiempo real]",
    video: "/placeholders/vc-hospitalizacion.webm",
    aspect: "900/564",
  },
  {
    icon: DeviceMobile,
    title: "Accede desde PC o tu celular",
    tagline: "Tu clínica, en cualquier dispositivo",
    description:
      "Trabaja desde la computadora del consultorio o desde tu teléfono móvil: agenda, expedientes, cobros y alertas siempre al alcance. Todo sincronizado en tiempo real, donde estés.",
    placeholder: "[IMAGEN: Vetcore en PC de escritorio y en celular]",
  },
  {
    icon: Signature,
    title: "Citas y consentimientos para tus pacientes",
    tagline: "Cercanía, transparencia y comunicación",
    description:
      "Permite a tus pacientes solicitar citas desde su cartilla y firmar los consentimientos que les envíes de los procedimientos que realices. Sabemos que la confianza de tu cliente es lo más importante.",
    placeholder: "[IMAGEN: solicitud de cita y firma de consentimiento desde la cartilla]",
  },
  {
    icon: Syringe,
    title: "Planes de vacunación personalizados",
    tagline: "Crea el plan de vacunación a medida de cada paciente",
    description:
      "Diseña tus propios planes de vacunación según especie, edad o condición del paciente. Asigna dosis, intervalos y recordatorios automáticos, y mantén el carnet siempre al día sin depender de plantillas genéricas.",
    placeholder: "[IMAGEN: creación de un plan de vacunación personalizado]",
    video: "/placeholders/vc-vacunacion.webm",
    aspect: "900/564",
  },
  {
    icon: Sliders,
    title: "Servicios y cobros personalizados",
    tagline: "Arma tu catálogo, pon precios y automatiza el cobro",
    description:
      "Personaliza tus propios servicios: define nombre, precio y duración, conéctalos con los insumos que consumen para descontar stock automáticamente y automatiza los cobros en cada consulta. Tu catálogo, tu regla.",
    placeholder: "[IMAGEN: configuración de servicios con precios e insumos]",
    video: "/placeholders/vc-servicios.webm",
    aspect: "900/564",
  },
  {
    icon: SlidersHorizontal,
    title: "Personaliza tu experiencia",
    tagline: "Tu clínica, tu panel, a tu medida",
    description:
      "Ajusta Vetcore a la forma de trabajar de tu equipo: agrega o quita los módulos que uses, ordena las secciones a tu gusto y elige los dashboards que necesites ver. Solo lo que te sirve, sin ruido.",
    placeholder: "[IMAGEN: personalización de módulos, secciones y dashboards]",
    video: "/placeholders/vc-personaliza.webm",
    aspect: "900/564",
  },
];

const steps = [
  {
    icon: Building,
    step: "01",
    title: "Crea tu clínica",
    description: "Configura tu veterinaria en minutos con un asistente sencillo.",
  },
  {
    icon: PawPrint,
    step: "02",
    title: "Registra pacientes y equipo",
    description:
      "Sube tu catálogo, agrega a tu staff y da de alta a tus pacientes con foto y expediente completo.",
  },
  {
    icon: Gauge,
    step: "03",
    title: "Opera tu día a día",
    description:
      "Agenda, atiende, cobra y revisa tus números. Todo desde un solo lugar.",
  },
];

const benefits = [
  "Menos olvidos de citas y vacunas",
  "Recibos y facturas en segundos",
  "Inventario siempre al día",
  "Decisiones con datos reales",
];

export default function VetcorePage() {
  return (
    <>
      <PageHeader
        eyebrow="Productos"
        eyebrowClassName="text-emerald-600 dark:text-emerald-400"
        title="Vetcore"
        description="Sistema de gestión para clínicas veterinarias, desarrollado y operado in-house por Digitalis Labs."
      />
      <ProductHero
        name="Vetcore"
        initial="V"
        oneLiner="Sistema de gestión para clínicas veterinarias"
        features={features.slice(0, 3).map((f) => f.title)}
        src="/placeholders/product-vetcore.svg"
        alt="[PLACEHOLDER: screenshot del sistema Vetcore, clínicas veterinarias]"
        siteUrl="#"
        tone="clinical"
        bg="/placeholders/product-vetcore.svg"
        srcVideo="/placeholders/vetcore-demo.webm"
        logo="vetcore"
      />

      {/* Hero de producto */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="relative isolate mx-auto max-w-4xl overflow-hidden rounded-3xl">
              <div aria-hidden className="absolute inset-0 -z-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/placeholders/product-vetcore.svg"
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-emerald-500/45" />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/50 via-emerald-500/40 to-teal-500/55 dark:from-emerald-900/55 dark:via-emerald-800/40 dark:to-teal-800/45" />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(16,185,129,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.14) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
              </div>
              <div className="relative rounded-3xl border border-white/30 bg-white/10 px-6 py-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] backdrop-blur-lg sm:px-10 md:py-16">
                <div className="mx-auto max-w-3xl text-center">
                  <p className="text-xl leading-relaxed text-white text-pretty md:text-2xl">
                    Deja de perder horas con el papeleo y dale a tu equipo la herramienta para
                    atender más pacientes, cobrar más rápido y tomar decisiones con datos.
                  </p>
                  <p className="mt-4 text-base text-white/80 text-pretty md:text-lg">
                    Un solo sistema para agenda, expedientes, vacunas, inventario y finanzas.
                  </p>
                </div>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contacto"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-base font-medium text-emerald-700 shadow-elevation-1 transition-all duration-200 hover:bg-white/90 hover:shadow-elevation-2 active:translate-y-px"
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
              <MediaPlaceholder label="[IMAGEN: comparación rápida — hoja de papel y excel desordenado vs VetCore ordenado]" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-semibold tracking-tight text-fg text-balance md:text-4xl">
                ¿Suena familiar?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-fg-secondary md:text-lg">
                Expedientes en papel que se pierden, citas apuntadas en libretas, vacunas que
                se olvidan, inventario que nunca cuadra y recibos que tardan horas en armarse.
              </p>
              <p className="mt-4 text-base font-medium text-fg md:text-lg">
                Tu tiempo vale más que eso.
              </p>
              <p className="mt-4 text-base leading-relaxed text-fg-secondary md:text-lg">
                VetCore concentra toda la operación de tu veterinaria en una sola plataforma
                fácil de usar, pensada para el día a día real de una clínica.
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
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                Funciones
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg text-balance md:text-4xl">
                Todo lo que tu clínica necesita, en un solo lugar
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={`${f.title}-${i}`} delay={(i % 2) * 0.07} className="h-full">
                <GlassCard src="/placeholders/product-vetcore.svg" tone="clinical">
                  <div className="flex h-full flex-col p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/40 bg-white/25 text-white backdrop-blur-lg">
                        <f.icon size={20} weight="duotone" />
                      </span>
                      <h3 className="text-base font-semibold text-white">{f.title}</h3>
                    </div>
                    {f.video ? (
                      <div className="mt-6 overflow-hidden rounded-xl border border-white/20 transition-transform duration-300 group-hover:scale-[1.01]">
                        <video
                          src={f.video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full object-cover"
                          style={{ aspectRatio: f.aspect }}
                        />
                      </div>
                    ) : (
                      <MediaPlaceholder label={f.placeholder} className="mt-6 border-white/25 bg-white/10 text-white/60" />
                    )}
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
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                Cómo funciona
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg text-balance md:text-4xl">
                De cero a operando en tres pasos
              </h2>
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <MediaPlaceholder label="[IMAGEN: alta de clínica y primer login guiado]" className="mb-12 aspect-[21/9]" />
          </Reveal>

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.08} className="h-full">
                <GlassCard src="/placeholders/product-vetcore.svg" tone="clinical">
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
                value={40}
                prefix="+"
                suffix="%"
                label="menos tiempo en tareas administrativas"
                className="border-l-2 border-emerald-600 pl-4 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400"
              />
              <ul className="mt-10 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-base text-fg">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                      <Check size={12} weight="bold" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <MediaPlaceholder label="[IMAGEN: métricas animadas o insignias de la clínica]" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Testimonio */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <figure className="mx-auto max-w-3xl rounded-3xl border border-border bg-bg-muted p-8 sm:p-12">
              <MediaPlaceholder label="[IMAGEN: logo o captura de una clínica real]" className="mb-8 aspect-[16/6]" />
              <blockquote className="text-lg leading-relaxed text-fg text-pretty md:text-xl">
                “Pasamos de cuadernos y excel a tener todo el consultorio en la nube. La
                agenda y el cobro en un solo paso nos ahorran horas cada semana.”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-600 bg-bg font-mono text-sm font-semibold text-emerald-600 dark:border-emerald-400 dark:text-emerald-400">
                  ?
                </span>
                <div>
                  <div className="text-sm font-medium text-fg">[NOMBRE]</div>
                  <div className="text-xs text-fg-muted">Director de [NOMBRE DE LA CLÍNICA]</div>
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
            src="/placeholders/product-vetcore.svg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-emerald-500/45" />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/50 via-emerald-500/40 to-teal-500/55 dark:from-emerald-900/55 dark:via-emerald-800/40 dark:to-teal-800/45" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(16,185,129,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.14) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <Container className="relative py-20 md:py-24">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight text-white text-balance md:text-4xl">
                ¿Listo para llevar tu veterinaria al siguiente nivel?
              </h2>
              <p className="mt-3 text-base text-white/80 md:text-lg text-pretty">
                Únete a clínicas que ya operan con VetCore.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-base font-medium text-emerald-700 shadow-elevation-2 transition-all duration-200 hover:bg-white/90 hover:shadow-elevation-3 active:translate-y-px"
            >
              Pruébalo gratis <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}