import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Utiliza gratis por 30 días cualquiera de nuestros SaaS o cotiza un proyecto de desarrollo o consultoría técnica con Digitalis Labs.",
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
