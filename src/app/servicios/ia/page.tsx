import {
  Brain,
  Database,
  Lightning,
  MagnifyingGlass,
  Robot,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { CtaSection } from "@/components/ui/cta-section";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { toneAccent } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "IA y chatbots RAG",
  description:
    "Chatbots con RAG sobre tus propios datos, asistentes y automatizaciones con modelos de lenguaje.",
};

const solutions = [
  {
    icon: Robot,
    title: "Chatbots RAG",
    description:
      "Asistentes que responden con la información real de tu empresa, citando la fuente y sin inventar.",
  },
  {
    icon: Brain,
    title: "Asistentes internos",
    description:
      "Un copiloto para tu equipo sobre manuales, procedimientos y bases de conocimiento.",
  },
  {
    icon: Lightning,
    title: "Automatización con IA",
    description:
      "Clasificación de correos, resúmenes, extracción de datos y flujos que se ejecutan solos.",
  },
  {
    icon: Sparkle,
    title: "IA en tu producto",
    description:
      "Agrega búsqueda semántica, recomendaciones o generación de contenido a tu software.",
  },
];

const steps = [
  "Conectamos tus datos (documentos, bases, APIs)",
  "Indexamos con embeddings y búsqueda semántica",
  "El asistente recupera el contexto relevante (RAG)",
  "Genera la respuesta y cita la fuente",
];

const stack = [
  "OpenAI",
  "Anthropic Claude",
  "LangChain",
  "LlamaIndex",
  "pgvector",
  "Python",
  "Node.js",
  "RAG",
  "Embeddings",
  "Function calling",
];

const accent = toneAccent.fuchsia;

export default function IaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="IA y chatbots RAG"
        description="Asistentes inteligentes que responden sobre tus propios datos, automatizan tareas y agregan IA a tu producto. Sin inventar, citando la fuente."
        tone="fuchsia"
        backdrop="/placeholders/case-4.svg"
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07} className="h-full">
                <div className={cn(
                  "group h-full rounded-2xl border border-border bg-bg-muted p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-bg hover:shadow-elevation-2",
                  accent.borderHover,
                  accent.shadowHover,
                )}>
                  <span className={cn("flex h-10 w-10 items-center justify-center rounded-xl", accent.bgSoft, accent.text)}>
                    <s.icon size={20} weight="duotone" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-fg">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-secondary">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-bg-muted py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-fg md:text-3xl">
                Cómo funciona un chatbot RAG
              </h2>
              <p className="mt-3 text-lg text-fg-secondary text-pretty">
                RAG (Retrieval-Augmented Generation) combina la búsqueda en tus datos con un
                modelo de lenguaje: la respuesta se basa en tu información, no en suposiciones.
              </p>
            </div>
          </Reveal>

          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step} delay={i * 0.07} className="h-full">
                <li className="relative h-full rounded-2xl border border-border bg-bg p-6">
                  <span className="absolute right-5 top-5 font-mono text-xs font-medium text-fg-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={cn("flex h-10 w-10 items-center justify-center rounded-xl", accent.bgSoft, accent.text)}>
                    {i === 0 ? (
                      <Database size={20} weight="duotone" />
                    ) : i === 1 ? (
                      <MagnifyingGlass size={20} weight="duotone" />
                    ) : i === 2 ? (
                      <Brain size={20} weight="duotone" />
                    ) : (
                      <Sparkle size={20} weight="duotone" />
                    )}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-fg-secondary">{step}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-border bg-bg-muted p-6 sm:p-8 lg:p-10">
              <h3 className="text-lg font-semibold text-fg">Stack y herramientas</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection
        title="¿Quieres un asistente con IA?"
        description="Cuéntanos qué datos tienes y qué quieres automatizar. Te respondemos con un plan claro, sin vueltas."
        tone="fuchsia"
        backdrop="/placeholders/case-4.svg"
      />
    </>
  );
}