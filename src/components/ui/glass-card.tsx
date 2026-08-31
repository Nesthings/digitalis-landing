import { cn } from "@/lib/utils";

type GlassTone = "blue" | "clinical" | "electric";

const tones: Record<
  GlassTone,
  { base: string; overlay: string; overlayDark: string; grid: string }
> = {
  blue: {
    base: "bg-brand-600/40",
    overlay: "from-brand-600/40 via-brand-500/30 to-brand-400/50",
    overlayDark:
      "dark:from-brand-900/50 dark:via-brand-800/35 dark:to-brand-700/40",
    grid: "rgba(46,75,224,0.12)",
  },
  clinical: {
    base: "bg-emerald-500/45",
    overlay: "from-emerald-600/50 via-emerald-500/40 to-teal-500/55",
    overlayDark:
      "dark:from-emerald-900/55 dark:via-emerald-800/40 dark:to-teal-800/45",
    grid: "rgba(16,185,129,0.14)",
  },
  electric: {
    base: "bg-green-400/45",
    overlay: "from-green-400/50 via-lime-400/45 to-lime-300/50",
    overlayDark:
      "dark:from-green-900/55 dark:via-green-800/40 dark:to-lime-800/45",
    grid: "rgba(163,230,53,0.18)",
  },
};

interface GlassCardProps {
  src?: string;
  tone?: GlassTone;
  className?: string;
  contentClassName?: string;
  hover?: boolean;
  children: React.ReactNode;
}

export function GlassCard({
  src = "/placeholders/hero-image.svg",
  tone = "blue",
  className,
  contentClassName,
  hover = true,
  children,
}: GlassCardProps) {
  const t = tones[tone];

  return (
    <div
      className={cn(
        "relative isolate h-full overflow-hidden rounded-3xl",
        hover && "transition-all duration-300 hover:-translate-y-1 hover:shadow-elevation-3",
        className,
      )}
    >
      {/* Imagen/textura detrás (del tamaño de la card) */}
      <div aria-hidden className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" className="h-full w-full object-cover" />
        <div className={cn("absolute inset-0", t.base)} />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            t.overlay,
            t.overlayDark,
          )}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${t.grid} 1px, transparent 1px), linear-gradient(90deg, ${t.grid} 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Contenido con efecto glass */}
      <div
        className={cn(
          "relative flex h-full flex-col rounded-3xl border border-white/30 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] backdrop-blur-lg transition-all duration-300 hover:border-white/50 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20",
          contentClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function GlassIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/40 bg-white/25 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-lg transition-transform duration-300 group-hover:scale-105 dark:border-white/15 dark:bg-white/10">
      {children}
    </span>
  );
}