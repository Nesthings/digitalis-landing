import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { toneHeaderBg, type GlassTone } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  eyebrowClassName,
  title,
  description,
  tone,
}: {
  eyebrow?: string;
  eyebrowClassName?: string;
  title: string;
  description?: string;
  tone?: GlassTone;
}) {
  return (
    <section className={cn("border-b border-border bg-bg-muted", tone && toneHeaderBg[tone])}>
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