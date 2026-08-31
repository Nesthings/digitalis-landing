"use client";

import { motion, useReducedMotion, useScroll } from "motion/react";
import { ArrowSquareOut, CaretDown, List, X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";
import { VetcoreLogo } from "@/components/vetcore-logo";
import { GymcoreLogo } from "@/components/gymcore-logo";

const navItems = [
  {
    label: "Nuestros Productos",
    href: "/productos",
    children: [
      {
        title: "Vetcore",
        href: "/productos/vetcore",
        description: "Gestión para clínicas veterinarias",
      },
      {
        title: "Gymcore",
        href: "/productos/gymcore",
        description: "Software para gimnasios y estudios",
      },
    ],
  },
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      {
        title: "Gestión de proyectos",
        href: "/servicios/gestion",
        description: "De principio a fin, sin que tengas que preocuparte",
      },
      {
        title: "Consultoría técnica",
        href: "/servicios/consultoria",
        description: "DevOps, cloud y automatización",
      },
      {
        title: "Desarrollo a medida",
        href: "/servicios/desarrollo",
        description: "MVPs, integraciones y migraciones",
      },
      {
        title: "Consultoría de ciberseguridad",
        href: "/servicios/ciberseguridad",
        description: "Auditorías, hardening y estrategia de seguridad",
      },
    ],
  },
  { label: "Casos de Éxito", href: "/casos-de-exito" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Precios", href: "/precios" },
];

export function Navbar() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuTimer = useRef<number | null>(null);
  const { scrollY } = useScroll();

  const closeMenus = () => {
    if (menuTimer.current) window.clearTimeout(menuTimer.current);
    setOpenMenu(null);
    setMobileOpen(false);
  };

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => {
      setScrolled(v > 24);
    });
    return unsubscribe;
  }, [scrollY]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openWithDelay = (label: string) => {
    if (menuTimer.current) window.clearTimeout(menuTimer.current);
    setOpenMenu(label);
  };

  const closeWithDelay = () => {
    if (menuTimer.current) window.clearTimeout(menuTimer.current);
    menuTimer.current = window.setTimeout(() => setOpenMenu(null), 120);
  };

  const isActive = (href: string) =>
    href === "/productos" || href === "/servicios"
      ? pathname.startsWith(href)
      : pathname === href;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 md:h-[72px]">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => openWithDelay(item.label)}
                onMouseLeave={closeWithDelay}
                onFocus={() => openWithDelay(item.label)}
                onBlur={closeWithDelay}
              >
                <Link
                  href={item.href}
                  onClick={closeMenus}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-bg-subtle text-fg"
                      : "text-fg-secondary hover:text-fg",
                  )}
                >
                  {item.label}
                  <CaretDown
                    size={12}
                    weight="bold"
                    className={cn(
                      "transition-transform duration-200",
                      openMenu === item.label && "rotate-180",
                    )}
                  />
                </Link>
                <div
                  className={cn(
                    "absolute left-0 top-full pt-2 transition-opacity duration-150",
                    openMenu === item.label
                      ? "pointer-events-auto opacity-100"
                      : "pointer-events-none opacity-0",
                  )}
                >
                  <div className="w-72 rounded-2xl border border-border bg-bg p-2 shadow-elevation-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        onClick={closeMenus}
                        className="flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-bg-subtle"
                      >
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-bg-muted text-accent">
                          {child.title === "Vetcore" ? (
                            <VetcoreLogo className="h-full w-full object-cover" containerClassName="h-full w-full" />
                          ) : child.title === "Gymcore" ? (
                            <GymcoreLogo className="h-full w-full object-cover" containerClassName="h-full w-full" />
                          ) : (
                            <ArrowSquareOut size={15} weight="bold" />
                          )}
                        </span>
                        <span>
                          <span className="block text-sm font-medium text-fg">
                            {child.title}
                          </span>
                          <span className="block text-xs text-fg-muted">
                            {child.description}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenus}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-fg"
                    : "text-fg-secondary hover:text-fg",
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-accent" />
                )}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contacto"
            onClick={closeMenus}
            className={cn(
              "hidden items-center justify-center rounded-full bg-accent px-5 text-sm font-medium text-accent-contrast shadow-elevation-1 transition-all duration-200 hover:bg-accent-hover hover:shadow-elevation-2 active:translate-y-px sm:inline-flex",
              pathname === "/contacto" && "ring-2 ring-inset ring-focus-ring",
            )}
          >
            Hablemos
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full text-fg transition-colors hover:bg-bg-subtle lg:hidden"
          >
            {mobileOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 top-16 z-40 bg-bg lg:hidden"
        >
          <nav
            className="flex h-full flex-col gap-1 overflow-y-auto px-6 py-8"
            aria-label="Navegación móvil"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={item.href}
                  onClick={closeMenus}
                  className={cn(
                    "block rounded-xl px-3 py-3.5 text-lg font-medium transition-colors",
                    isActive(item.href) ? "bg-bg-subtle text-fg" : "text-fg-secondary hover:text-fg",
                  )}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 mt-1 space-y-1 border-l border-border pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        onClick={closeMenus}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
                      >
                        {child.title === "Vetcore" && (
                          <span className="relative block h-5 w-5 shrink-0 overflow-hidden rounded-md">
                            <VetcoreLogo className="h-full w-full object-cover" containerClassName="h-full w-full" />
                          </span>
                        )}
                        {child.title === "Gymcore" && (
                          <span className="relative block h-5 w-5 shrink-0 overflow-hidden rounded-md">
                            <GymcoreLogo className="h-full w-full object-cover" containerClassName="h-full w-full" />
                          </span>
                        )}
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * navItems.length, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6"
            >
              <Link
                href="/contacto"
                onClick={closeMenus}
                className="flex h-12 items-center justify-center rounded-full bg-accent text-base font-medium text-accent-contrast shadow-elevation-1"
              >
                Hablemos
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
