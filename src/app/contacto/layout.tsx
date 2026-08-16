import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Uliliza gratis por 30 dias cualquiera de nuestros SaaS o cotiza un proyecto de desarrollo o consultoría técnica con Digitalis Labs.",
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
