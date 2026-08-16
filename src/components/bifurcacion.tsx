import { ArrowRight, CloudCheck, SquaresFour, CodeIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const items = [
  {
    icon: SquaresFour,
    title: "Nuestros Productos",
    description:
      "SaaS propios que desarrollamos, operamos y mejoramos con lo que aprendemos de nuestros clientes.",
    href: "/productos",
    cta: "Explorar productos",
    featured: true,
  },
  {
    icon: CloudCheck,
    title: "Consultoría",
    description:
      "DevOps, cloud y automatización. Acompañamos a tu equipo a modernizar infraestructura sin frenar el negocio.",
    href: "/servicios#consultoria",
    cta: "Ver consultoría",
    featured: false,
  },
  {
    icon: CodeIcon,
    title: "Desarrollo a Medida",
    description:
      "MVPs, integraciones y migraciones. Construimos software que resuelve tu problema exacto, no otro.",
    href: "/servicios#desarrollo",
    cta: "Ver desarrollo a medida",
    featured: false,
  },
];

export function Bifurcacion() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          {items.map((item, i) => {
            if (item.featured) {
              return (
                <Reveal key={item.title} delay={i * 0.08} className="h-full lg:row-span-2">
                  <Link
                    href={item.href}
                    className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-accent p-8 transition-all duration-300 hover:shadow-elevation-3 sm:p-10"
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                      }}
                    />
                    <div className="relative">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-contrast/15 text-accent-contrast transition-transform duration-300 group-hover:scale-105">
                        <item.icon size={24} weight="duotone" />
                      </span>
                      <h3 className="mt-6 text-2xl font-semibold tracking-tight text-accent-contrast">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-sm text-sm leading-relaxed text-accent-contrast/85">
                        {item.description}
                      </p>
                    </div>
                    <span className="relative mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent-contrast">
                      {item.cta}
                      <ArrowRight
                        size={14}
                        weight="bold"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </Reveal>
              );
            }
            return (
              <Reveal key={item.title} delay={i * 0.08} className="h-full">
                <Link
                  href={item.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-bg-muted p-7 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-bg hover:shadow-elevation-2"
                >
                  <div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg text-accent transition-transform duration-300 group-hover:scale-105">
                      <item.icon size={22} weight="duotone" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-fg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
                      {item.description}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    {item.cta}
                    <ArrowRight
                      size={14}
                      weight="bold"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
