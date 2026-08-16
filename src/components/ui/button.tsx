import { Slot } from "./slot";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 select-none disabled:pointer-events-none disabled:opacity-50 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-contrast shadow-elevation-1 hover:bg-accent-hover hover:shadow-elevation-2",
  secondary:
    "border border-border-strong bg-bg text-fg hover:bg-bg-subtle hover:border-fg-muted",
  ghost: "text-fg-secondary hover:text-fg hover:bg-bg-subtle",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  asChild,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (asChild) return <Slot className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} />;
  return <button className={classes} {...props} />;
}
