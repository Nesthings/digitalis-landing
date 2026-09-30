import { cn } from "@/lib/utils";

export function IconPanel({
  icon: Icon,
  className,
}: {
  icon: React.ElementType;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/25 bg-white/[0.08]",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* Halo que aparece al pasar el mouse por la card */}
      <div
        aria-hidden
        className="absolute size-24 rounded-full bg-white/25 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <span className="relative motion-safe:animate-icon-breathe">
        <Icon
          size={72}
          weight="duotone"
          className="text-white transition-transform duration-500 ease-out group-hover:-rotate-3 group-hover:-translate-y-1 group-hover:scale-110"
        />
      </span>
    </div>
  );
}