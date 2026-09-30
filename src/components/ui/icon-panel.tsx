import { cn } from "@/lib/utils";
import { toneAccent, type GlassTone } from "@/components/ui/glass-card";

export function IconPanel({
  icon: Icon,
  tone = "blue",
  className,
}: {
  icon: React.ElementType;
  tone?: GlassTone;
  className?: string;
}) {
  const a = toneAccent[tone];
  return (
    <div
      className={cn(
        "relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/25 bg-white/[0.08]",
        className,
      )}
      style={{ perspective: "700px" }}
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
      {/* Halos de color del servicio */}
      <div
        aria-hidden
        className={cn("absolute size-32 rounded-full opacity-70 blur-3xl", a.bgSoft)}
      />
      {/* Recuadro del ícono: gira 360° en 3D sobre su eje al pasar el mouse.
          Al salir no hay animación de retorno (evita el giro brusco de vuelta). */}
      <span
        className={cn(
          "relative flex size-20 items-center justify-center rounded-2xl border backdrop-blur-md [transform-style:preserve-3d] transition-none motion-safe:group-hover:duration-700 motion-safe:group-hover:ease-out motion-safe:group-hover:transition-transform motion-safe:group-hover:[transform:rotateY(360deg)]",
          a.border,
          a.bgSoft,
        )}
      >
        <Icon size={44} weight="duotone" className={a.text} />
      </span>
    </div>
  );
}