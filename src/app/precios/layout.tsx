import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Planes de Digitalis Labs: mentoría técnica, proyectos a medida y retainers. Precios claros, sin letra chica.",
};

export default function PreciosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
