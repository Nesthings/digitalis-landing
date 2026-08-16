import { Hero } from "@/components/hero";
import { LogoWall } from "@/components/logo-wall";
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
      <LogoWall />
      <Bifurcacion />
      <SaasPreview />
      <HowWeWork />
      <Metrics />
      <Testimonials />
      <CtaSection />
    </>
  );
}
