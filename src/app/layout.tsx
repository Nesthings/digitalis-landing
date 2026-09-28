import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Digitalis Labs | Software, consultoría técnica y desarrollo a medida",
    template: "%s | Digitalis Labs",
  },
  description:
    "Digitalis Labs es una startup de software con SaaS propios, consultoría técnica (DevOps, cloud, automatización) y desarrollo de software a medida.",
  keywords: [
    "desarrollo de software",
    "DevOps",
    "cloud",
    "consultoría técnica",
    "SaaS",
    "MVPs",
    "integración",
    "migraciones",
  ],
  openGraph: {
    title: "Digitalis Labs | Software, consultoría técnica y desarrollo a medida",
    description:
      "SaaS propios, consultoría técnica y desarrollo de software a medida.",
    type: "website",
    locale: "es_MX",
    siteName: "Digitalis Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitalis Labs | Software, consultoría y desarrollo a medida",
    description: "SaaS propios, consultoría técnica y desarrollo de software a medida.",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "256x256" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {/* Aplica el tema antes del primer paint para evitar el "flash" claro→oscuro. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);var e=document.documentElement;e.classList.toggle('dark',d);e.style.colorScheme=d?'dark':'light';}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-dvh flex-col bg-bg font-sans text-fg antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
