import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export function CtaSection({
  title = "¿Tienes un proyecto en mente?",
  description = "Cuéntanos qué necesitas construir o mejorar. Te respondemos con un plan claro, sin vueltas.",
  link = "/contacto",
  linkLabel = "Hablemos de tu proyecto",
}: {
  title?: string;
  description?: string;
  link?: string;
  linkLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-accent">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <Container className="relative py-20 md:py-24">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-accent-contrast text-balance md:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-base text-accent-contrast/80 md:text-lg text-pretty">
              {description}
            </p>
          </div>
          <Link
            href={link}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent-contrast px-7 text-base font-medium text-accent shadow-elevation-2 transition-all duration-200 hover:shadow-elevation-3 active:translate-y-px"
          >
            {linkLabel} <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
