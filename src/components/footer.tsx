"use client";

import { ArrowRight, GithubLogoIcon, LinkedinLogoIcon, XLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/logo";

export function Footer() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setState("loading");
    setTimeout(() => setState("success"), 700);
  };

  const columns = [
    {
      heading: "Productos",
      links: [
        { label: "Vetcore", href: "/productos/vetcore" },
        { label: "Gymcore", href: "/productos/gymcore" },
      ],
    },
    {
      heading: "Servicios",
      links: [
        { label: "Gestión de proyectos", href: "/servicios/gestion" },
        { label: "Consultoría técnica", href: "/servicios/consultoria" },
        { label: "Desarrollo a medida", href: "/servicios/desarrollo" },
        { label: "Ciberseguridad", href: "/servicios/ciberseguridad" },
      ],
    },
    {
      heading: "Empresa",
      links: [
        { label: "Nosotros", href: "/nosotros" },
        { label: "Blog", href: "/blog" },
        { label: "Contacto", href: "/contacto" },
      ],
    },
  ];

  const socials = [
    { label: "GitHub", href: "#", icon: GithubLogoIcon },
    { label: "LinkedIn", href: "#", icon: LinkedinLogoIcon },
    { label: "X", href: "#", icon: XLogoIcon },
  ];

  return (
    <footer className="border-t border-border bg-bg-muted">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo textClassName="text-xl" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-muted">
              Software propio, consultoría técnica y desarrollo a medida para empresas que
              necesitan resultados, no promesas.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="text-sm font-semibold text-fg">{col.heading}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-fg-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-bg p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-base font-semibold text-fg">Novedades técnicas, sin spam</h3>
              <p className="mt-1 text-sm text-fg-muted">
                Un correo al mes sobre lo que aprendemos construyendo software.
              </p>
            </div>
            <form onSubmit={onSubmit} className="w-full max-w-md">
              {state === "success" ? (
                <p className="rounded-xl border border-border-strong bg-bg-subtle px-4 py-3 text-sm font-medium text-fg">
                  ¡Listo! Revisa tu bandeja de entrada.
                </p>
              ) : (
                <div className="flex flex-col gap-2 sm:flex-row">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@empresa.com"
                    className="h-11 flex-1 rounded-full border border-border-strong bg-bg px-4 text-sm text-fg placeholder:text-fg-muted focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                  />
                  <button
                    type="submit"
                    disabled={state === "loading"}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-accent-contrast shadow-elevation-1 transition-all hover:bg-accent-hover hover:shadow-elevation-2 active:translate-y-px disabled:opacity-60"
                  >
                    {state === "loading" ? (
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-accent-contrast border-t-transparent" />
                    ) : (
                      <>
                        Suscribirme <ArrowRight size={14} weight="bold" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-fg-muted">
            © {new Date().getFullYear()} [Digitalis Labs]. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-fg-muted">
            <Link href="#" className="transition-colors hover:text-fg">
              Términos
            </Link>
            <Link href="#" className="transition-colors hover:text-fg">
              Privacidad
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
