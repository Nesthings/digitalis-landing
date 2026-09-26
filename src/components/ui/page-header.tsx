import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { GlassBackdrop, type GlassTone } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  eyebrowClassName,
  title,
  description,
  tone,
  backdrop,
}: {
  eyebrow?: string;
  eyebrowClassName?: string;
  title: string;
  description?: string;
  tone?: GlassTone;
  backdrop?: string;
}) {
  // Con `tone` el header replica el color/textura exactos de la card (glass).
  if (tone) {
    return (
      <section className="relative isolate overflow-hidden border-b border-border">
        <GlassBackdrop src={backdrop} tone={tone} />
        <div className="relative">
          <Container className="pb-14 pt-28 md:pb-20 md:pt-36">
            <Reveal>
              <div className="max-w-3xl rounded-3xl border border-white/30 bg-white/10 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] backdrop-blur-lg sm:p-9 dark:border-white/10 dark:bg-white/[0.02]">
                {eyebrow && (
                  <p
                    className={
                      "font-mono text-xs uppercase tracking-[0.18em] text-white/80" +
                      (eyebrowClassName ? ` ${eyebrowClassName}` : "")
                    }
                  >
                    {eyebrow}
                  </p>
                )}
                <h1 className="mt-3 text-4xl font-semibold leading-[1.05] tracking-tight text-white text-balance md:text-5xl">
                  {title}
                </h1>
                {description && (
                  <p className="mt-4 text-lg leading-relaxed text-white/85 text-pretty">
                    {description}
                  </p>
                )}
              </div>
            </Reveal>
          </Container>
        </div>
      </section>
    );
  }

  return (
    <section className={cn("border-b border-border bg-bg-muted")}>
      <Container className="pb-14 pt-28 md:pb-20 md:pt-36">
        <Reveal>
          <div className="max-w-3xl">
            {eyebrow && (
              <p
                className={
                  "font-mono text-xs uppercase tracking-[0.18em] text-accent" +
                  (eyebrowClassName ? ` ${eyebrowClassName}` : "")
                }
              >
                {eyebrow}
              </p>
            )}
            <h1 className="mt-3 text-4xl font-semibold leading-[1.05] tracking-tight text-fg text-balance md:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mt-4 text-lg leading-relaxed text-fg-secondary text-pretty">
                {description}
              </p>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}