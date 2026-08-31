import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

interface MediaPlaceholderProps {
  label: string;
  className?: string;
}

export function MediaPlaceholder({ label, className }: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        "flex aspect-[16/10] w-full items-center justify-center rounded-2xl border border-dashed border-border-strong bg-bg-muted",
        className,
      )}
    >
      <span className="max-w-xs px-6 text-center text-sm text-fg-muted">{label}</span>
    </div>
  );
}