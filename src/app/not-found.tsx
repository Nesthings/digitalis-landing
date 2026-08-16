import { ArrowLeft, Compass } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-dvh flex-col items-center justify-center py-24 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
        <Compass size={26} weight="duotone" />
      </span>
      <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-fg-muted">
        Error 404
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-fg text-balance md:text-5xl">
        Esta página no existe (todavía)
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-fg-secondary">
        Puede que se haya movido o que la URL esté escrita mal. Volvé al inicio o contanos qué
        buscabas.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-contrast shadow-elevation-1 transition-all duration-200 hover:bg-accent-hover hover:shadow-elevation-2 active:translate-y-px"
        >
          <ArrowLeft size={15} weight="bold" /> Volver al inicio
        </Link>
        <Link
          href="/contacto"
          className="inline-flex h-11 items-center justify-center rounded-full border border-border-strong bg-bg px-6 text-sm font-medium text-fg transition-colors hover:bg-bg-subtle"
        >
          Contactar
        </Link>
      </div>
    </Container>
  );
}
