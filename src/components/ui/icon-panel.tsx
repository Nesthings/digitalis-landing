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
      <Icon size={72} weight="duotone" className="relative text-white" />
    </div>
  );
}