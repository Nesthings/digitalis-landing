"use client";

import { ArrowClockwise, Warning } from "@phosphor-icons/react/dist/ssr";
import { useEffect } from "react";
import { Container } from "@/components/ui/container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-dvh flex-col items-center justify-center py-24 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
        <Warning size={26} weight="duotone" />
      </span>
      <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-fg-muted">
        Algo salió mal
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-fg text-balance md:text-5xl">
        No pudimos cargar esta página
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-fg-secondary">
        Ocurrió un error inesperado. Intenta de nuevo; si el problema continúa, escríbenos y lo
        revisamos.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-contrast shadow-elevation-1 transition-all duration-200 hover:bg-accent-hover hover:shadow-elevation-2 active:translate-y-px"
      >
        <ArrowClockwise size={15} weight="bold" /> Reintentar
      </button>
    </Container>
  );
}
