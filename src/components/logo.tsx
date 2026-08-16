import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  textClassName,
}: {
  className?: string;
  textClassName?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5", className)}
      aria-label="Digitalis Labs - inicio"
    >
      {/* unoptimized: se sirve el PNG original para máxima nitidez */}
      <Image
        src="/logo.png"
        alt="Logo de Digitalis Labs"
        width={40}
        height={40}
        className="h-10 w-10 object-contain dark:hidden"
        priority
        unoptimized
      />
      <Image
        src="/logo-dark.png"
        alt="Logo de Digitalis Labs en modo oscuro"
        width={40}
        height={40}
        className="hidden h-10 w-10 object-contain dark:block"
        priority
        unoptimized
      />
      <span
        className={cn(
          "hidden text-lg font-semibold tracking-tight text-fg sm:inline",
          textClassName,
        )}
      >
        Digitalis Labs
      </span>
    </Link>
  );
}
