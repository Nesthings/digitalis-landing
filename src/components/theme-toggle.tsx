"use client";

import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
      className="relative flex h-10 w-10 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span
        className={`absolute transition-all duration-300 ${theme === "light" ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-90 opacity-0"}`}
      >
        <Sun size={18} weight="bold" />
      </span>
      <span
        className={`absolute transition-all duration-300 ${theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-50 rotate-90 opacity-0"}`}
      >
        <Moon size={18} weight="bold" />
      </span>
    </button>
  );
}
