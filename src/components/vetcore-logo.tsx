import Image from "next/image";
import { cn } from "@/lib/utils";

export function VetcoreLogo({
  className,
  containerClassName,
}: {
  className?: string;
  containerClassName?: string;
}) {
  return (
    <>
      <span
        className={cn(
          "relative block h-7 w-7 overflow-hidden rounded-lg dark:hidden",
          containerClassName,
        )}
      >
        <Image
          src="/logo_vetcore_for_whitemode.png"
          alt="Logo de Vetcore"
          fill
          sizes="40px"
          className={cn("object-cover", className)}
          unoptimized
        />
      </span>
      <span
        className={cn(
          "relative hidden h-7 w-7 overflow-hidden rounded-lg dark:block",
          containerClassName,
        )}
      >
        <Image
          src="/logo_vetcore_for_darkmode.png"
          alt="Logo de Vetcore en modo oscuro"
          fill
          sizes="40px"
          className={cn("object-cover", className)}
          unoptimized
        />
      </span>
    </>
  );
}