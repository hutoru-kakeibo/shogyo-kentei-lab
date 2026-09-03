import { Hero } from "@/components/sections/Hero";
import { TrialContent } from "@/components/sections/TrialContent";
import { PainPoints } from "@/components/sections/PainPoints";
import { SolutionIntro } from "@/components/sections/SolutionIntro";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { ClosingCta } from "@/components/sections/ClosingCta";

export default function Home() {
  return (
    <main>
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
  );
}
