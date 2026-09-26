"use client";

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function getSnapshot(): Theme {
  return typeof document !== "undefined" && document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
}

function getServerSnapshot(): Theme {
  return "light";
}

function setTheme(next: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", next === "dark");
  root.style.colorScheme = next;
  try {
    window.localStorage.setItem("theme", next);
  } catch {
    /* private mode */
  }
  listeners.forEach((l) => l());
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // El script inline del <head> ya aplicó el tema antes del paint. Acá solo
  // sincronizamos localStorage/colorScheme por si el sistema cambió, sin
  // volver a alternar la clase (evita el parpadeo al navegar).
  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current: Theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    const desired: Theme =
      stored === "light" || stored === "dark" ? stored : system ? "dark" : "light";
    if (current !== desired) {
      setTheme(desired);
    } else {
      document.documentElement.style.colorScheme = current;
      listeners.forEach((l) => l());
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
