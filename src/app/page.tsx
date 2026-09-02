import { Hero } from "@/components/sections/Hero";
import { TrialContent } from "@/components/sections/TrialContent";
import { PainPoints } from "@/components/sections/PainPoints";
import { SolutionIntro } from "@/components/sections/SolutionIntro";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { StickyCta } from "@/components/layout/StickyCta";
import { hero } from "@/lib/content";

export default function Home() {
  return (
    <>
      <main className="pb-24">
        <Hero />
        <TrialContent />
        <PainPoints />
        <SolutionIntro />
        <Features />
        <Testimonials />
        <Pricing />
        <Faq />
        <ClosingCta />
      </main>
      <StickyCta label={hero.ctaLabel} />
    </>
  );
}
