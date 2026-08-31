import { ArrowSquareOut, Check } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { VetcoreLogo } from "@/components/vetcore-logo";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Software desarrollados in-house por Digitalis Labs: VetCore, gestión de clínicas veterinarias y GymCore para gestión d gimnasios.",
};

interface ProductCardProps {
  id: string;
  name: string;
  oneLiner: string;
  features: string[];
  src: string;
  alt: string;
  href: string;
  ctaLabel: string;
}

function ProductCard({ id, name, oneLiner, features, src, alt, href, ctaLabel }: ProductCardProps) {
  return (
    <Reveal className="h-full">
      <article
        id={id}
        className="grid scroll-mt-24 gap-8 rounded-3xl border border-border bg-bg-muted p-6 sm:p-8 lg:grid-cols-2 lg:p-12"
      >
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-accent">
              {name === "Vetcore" ? (
                <VetcoreLogo className="h-full w-full object-cover" containerClassName="h-full w-full" />
              ) : (
                <span className="font-mono text-lg font-bold text-accent-contrast">{name.slice(0, 1)}</span>
              )}
            </span>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-fg">{name}</h2>
              <p className="text-sm text-fg-muted">{oneLiner}</p>
            </div>
          </div>

          <ul className="mt-6 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-fg-secondary">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Check size={12} weight="bold" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <Link
            href={href}
            className="mt-8 inline-flex h-11 w-fit items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-contrast shadow-elevation-1 transition-all duration-200 hover:bg-accent-hover hover:shadow-elevation-2 active:translate-y-px"
          >
            {ctaLabel} <ArrowSquareOut size={14} weight="bold" />
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border shadow-elevation-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
        </div>
      </article>
    </Reveal>
  );
}

export default function ProductosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Productos"
        title="SaaS que construimos y operamos nosotros mismos"
        description="Cada producto nace de una necesidad real que encontramos en el mercado y se desarrolla in-house: sabemos exactamente qué hay adentro, cómo se opera y cómo se escala."
      />

      <Container className="space-y-10 py-16 md:py-20">
        <ProductCard
          id="vetcore"
          name="Vetcore"
          oneLiner="Sistema de gestión para clínicas veterinarias"
          features={[
            "Historias clínicas digitales y agenda inteligente",
            "Facturación y gestión de stock de insumos",
            "Reportes de rendimiento por profesional",
          ]}
          src="/placeholders/product-vetcore.svg"
          alt="[PLACEHOLDER: screenshot del sistema Vetcore, clínicas veterinarias]"
          href="/productos/vetcore"
          ctaLabel="Visitar Vetcore"
        />

        <ProductCard
          id="gymcore"
          name="Gymcore"
          oneLiner="Software para gimnasios y estudios de entrenamiento"
          features={[
            "Planes de entrenamiento y seguimiento de alumnos",
            "Cobros, membresías y control de accesos",
            "App para que tus alumnos vean su progreso",
          ]}
          src="/placeholders/product-gymcore.svg"
          alt="[PLACEHOLDER: screenshot del sistema Gymcore, gimnasios y estudios]"
          href="/productos/gymcore"
          ctaLabel="Visitar Gymcore"
        />
      </Container>
    </>
  );
}
