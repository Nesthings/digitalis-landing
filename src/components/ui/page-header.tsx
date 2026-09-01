import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function PageHeader({
  eyebrow,
  eyebrowClassName,
  title,
  description,
}: {
  eyebrow?: string;
  eyebrowClassName?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-bg-muted">
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
