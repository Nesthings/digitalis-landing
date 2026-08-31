import { ArrowSquareOut, Check } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { VetcoreLogo } from "@/components/vetcore-logo";
import { GymcoreLogo } from "@/components/gymcore-logo";

interface ProductHeroProps {
  name: string;
  initial: string;
  oneLiner: string;
  features: string[];
  src: string;
  alt: string;
  siteUrl: string;
  tone?: "blue" | "clinical" | "electric";
  bg?: string;
  srcVideo?: string;
  logo?: "vetcore" | "gymcore";
}

export function ProductHero({ name, initial, oneLiner, features, src, alt, siteUrl, tone = "blue", bg = src, srcVideo, logo }: ProductHeroProps) {
  return (
    <Container className="py-16 md:py-20">
      <Reveal>
        <GlassCard src={bg} tone={tone} hover={false}>
          <article className="grid h-full flex-1 gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:p-12">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/40 bg-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-lg">
                  {logo === "vetcore" ? <VetcoreLogo className="h-full w-full object-cover" containerClassName="h-full w-full" /> : logo === "gymcore" ? <GymcoreLogo className="h-full w-full object-cover" containerClassName="h-full w-full" /> : (
                    <span className="font-mono text-lg font-bold text-white">{initial}</span>
                  )}
                </span>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-white">{name}</h2>
                  <p className="text-sm text-white/80">{oneLiner}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/90">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/25 text-white">
                      <Check size={12} weight="bold" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-11 w-fit items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-brand-600 shadow-elevation-1 transition-all duration-200 hover:bg-white/90 hover:shadow-elevation-2 active:translate-y-px"
              >
                Visitar sitio <ArrowSquareOut size={14} weight="bold" />
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/25 shadow-elevation-2">
              {srcVideo ? (
                <video
                  src={srcVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full object-cover"
                  style={{ aspectRatio: "900/555" }}
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={src}
                  alt={alt}
                  className="w-full object-cover"
                  style={{ aspectRatio: "900/555" }}
                  loading="lazy"
                />
              )}
            </div>
          </article>
        </GlassCard>
      </Reveal>
    </Container>
  );
}