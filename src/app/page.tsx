import { Hero } from "@/components/hero";
import { Bifurcacion } from "@/components/bifurcacion";
import { SaasPreview } from "@/components/saas-preview";
import { HowWeWork } from "@/components/how-we-work";
import { Metrics } from "@/components/metrics";
import { Testimonials } from "@/components/testimonials";
import { CtaSection } from "@/components/ui/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Sección "Empresas que confían en nuestro trabajo" desactivada.
          Para reactivarla, descomentar el import de LogoWall y su uso. */}
      {/* <LogoWall /> */}
      <Bifurcacion />
      <SaasPreview />
      <HowWeWork />
      <Metrics />
      <Testimonials />
      <CtaSection />
    </>
  );
}
