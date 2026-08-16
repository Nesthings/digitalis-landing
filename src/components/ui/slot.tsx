import { cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SlotProps {
  children?: ReactNode;
  className?: string;
  [key: string]: unknown;
}

export function Slot({ children, className, ...props }: SlotProps) {
  if (!isValidElement(children)) return null;
  const child = children as ReactElement<Record<string, unknown>>;
  const childClassName = (child.props as Record<string, unknown>).className;
  return cloneElement(child, {
    ...props,
    className: cn(className, typeof childClassName === "string" ? childClassName : undefined),
  } as Record<string, unknown>);
}
