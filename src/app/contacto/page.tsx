"use client";

import { CalendarCheck, Envelope, PaperPlaneRight } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";

type FormKind = "demo" | "cotizacion";

const inputClasses =
  "h-11 w-full rounded-xl border border-border-strong bg-bg px-3.5 text-sm text-fg placeholder:text-fg-muted focus:outline-2 focus:outline-offset-2 focus:outline-accent";

const labelClasses = "block text-sm font-medium text-fg";

function Field({
  label,
  htmlFor,
  children,
  error,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className={labelClasses}>
        {label}
      </label>
      {children}
      {error && (
        <p className="text-xs font-medium text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactoPage() {
  const [kind, setKind] = useState<FormKind>("demo");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: FormData) => {
    const next: Record<string, string> = {};
    const email = String(form.get("email") ?? "");
    const name = String(form.get("name") ?? "");
    if (!name.trim()) next.name = "Ingresá tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Ingresá un email válido.";
    if (kind === "demo" && !form.get("product")) next.product = "Elegí un producto.";
    if (kind === "cotizacion" && !form.get("projectType")) {
      next.projectType = "Elegí el tipo de proyecto.";
    }
    return next;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 1100);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Cuentanos qué necesitas"
        description="Ya sea una demo de un producto o la cotización de un proyecto, la primera conversación siempre es gratis y sin compromiso."
      />

      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <Reveal>
            <div>
              <div className="inline-flex rounded-full border border-border bg-bg-muted p-1" role="tablist" aria-label="Tipo de consulta">
                <button
                  type="button"
                  role="tab"
                  aria-selected={kind === "demo"}
                  onClick={() => {
                    setKind("demo");
                    setDone(false);
                    setErrors({});
                  }}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all",
                    kind === "demo" ? "bg-accent text-accent-contrast shadow-elevation-1" : "text-fg-secondary hover:text-fg",
                  )}
                >
                  Demo de un SaaS
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={kind === "cotizacion"}
                  onClick={() => {
                    setKind("cotizacion");
                    setDone(false);
                    setErrors({});
                  }}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all",
                    kind === "cotizacion" ? "bg-accent text-accent-contrast shadow-elevation-1" : "text-fg-secondary hover:text-fg",
                  )}
                >
                  Cotizar proyecto / consultoría
                </button>
              </div>

              <div className="mt-8">
                {done ? (
                  <div className="rounded-2xl border border-border bg-bg-muted p-8 text-center">
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <PaperPlaneRight size={22} weight="fill" />
                    </span>
                    <h2 className="mt-4 text-xl font-semibold text-fg">¡Mensaje enviado!</h2>
                    <p className="mt-2 text-sm text-fg-secondary">
                      Te respondemos dentro de las próximas 24 horas hábiles.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Nombre" htmlFor="name" error={errors.name}>
                        <input id="name" name="name" type="text" className={inputClasses} placeholder="Tu nombre" autoComplete="name" />
                      </Field>
                      <Field label="Email" htmlFor="email" error={errors.email}>
                        <input id="email" name="email" type="email" className={inputClasses} placeholder="tu@empresa.com" autoComplete="email" />
                      </Field>
                    </div>

                    {kind === "demo" ? (
                      <>
                        <Field label="Producto" htmlFor="product" error={errors.product}>
                          <select id="product" name="product" className={inputClasses} defaultValue="">
                            <option value="" disabled>
                              Seleccioná un producto
                            </option>
                            <option value="vetcore">Vetcore - gestión para clínicas veterinarias</option>
                            <option value="gymcore">Gymcore - software para gimnasios</option>
                          </select>
                        </Field>
                        <Field label="¿Qué querés ver en la demo?" htmlFor="message">
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="w-full rounded-xl border border-border-strong bg-bg px-3.5 py-3 text-sm text-fg placeholder:text-fg-muted focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                            placeholder="Contanos brevemente sobre tu clínica o gimnasio"
                          />
                        </Field>
                      </>
                    ) : (
                      <>
                        <div className="grid gap-5 sm:grid-cols-2">
                          <Field label="Tipo de proyecto" htmlFor="projectType" error={errors.projectType}>
                            <select id="projectType" name="projectType" className={inputClasses} defaultValue="">
                              <option value="" disabled>
                                Seleccioná una opción
                              </option>
                              <option value="mvp">MVP</option>
                              <option value="integracion">Integración</option>
                              <option value="migracion">Migración</option>
                              <option value="consultoria">Consultoría (DevOps / cloud)</option>
                              <option value="otro">Otro</option>
                            </select>
                          </Field>
                          <Field label="Presupuesto estimado" htmlFor="budget">
                            <select id="budget" name="budget" className={inputClasses} defaultValue="">
                              <option value="" disabled>
                                Rango estimado
                              </option>
                              <option value="<5">Menos de US$ 5.000</option>
                              <option value="5-15">US$ 5.000 - 15.000</option>
                              <option value="15-50">US$ 15.000 - 50.000</option>
                              <option value="50+">Más de US$ 50.000</option>
                            </select>
                          </Field>
                        </div>
                        <Field label="Descripción del proyecto" htmlFor="description">
                          <textarea
                            id="description"
                            name="description"
                            rows={4}
                            className="w-full rounded-xl border border-border-strong bg-bg px-3.5 py-3 text-sm text-fg placeholder:text-fg-muted focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                            placeholder="Contanos qué necesitás construir, integrar o mejorar"
                          />
                        </Field>
                      </>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-7 text-base font-medium text-accent-contrast shadow-elevation-2 transition-all duration-200 hover:bg-accent-hover hover:shadow-elevation-3 active:translate-y-px disabled:opacity-60 sm:w-auto"
                    >
                      {submitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-accent-contrast border-t-transparent" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar mensaje <PaperPlaneRight size={16} weight="bold" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-bg-muted p-6">
                <h2 className="flex items-center gap-2 text-base font-semibold text-fg">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <CalendarCheck size={18} weight="duotone" />
                  </span>
                  Preferís hablar directo
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-fg-secondary">
                  Agendá una llamada de 30 minutos. Sin guion, sin presión: solo hablamos de tu
                  proyecto.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex h-10 items-center justify-center rounded-full border border-border-strong bg-bg px-5 text-sm font-medium text-fg transition-colors hover:bg-bg-subtle"
                >
                  Agendar llamada
                </a>
                <p className="mt-3 font-mono text-xs text-fg-muted">
                  [PLACEHOLDER: embed de Calendly aquí]
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-bg-muted p-6">
                <h2 className="flex items-center gap-2 text-base font-semibold text-fg">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Envelope size={18} weight="duotone" />
                  </span>
                  Contacto directo
                </h2>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a href="mailto:hola@digitalislabs.com" className="text-fg-secondary transition-colors hover:text-accent">
                      hola@digitalislabs.com
                    </a>
                  </li>
                  <li className="text-fg-muted">[PLACEHOLDER: LinkedIn]</li>
                  <li className="text-fg-muted">[PLACEHOLDER: X / Twitter]</li>
                  <li className="text-fg-muted">[PLACEHOLDER: dirección / ciudad]</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </>
  );
}
