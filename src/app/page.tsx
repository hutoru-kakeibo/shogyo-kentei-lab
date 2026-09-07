import { Hero } from "@/components/sections/Hero";
import { TrialContent } from "@/components/sections/TrialContent";
import { PainPoints } from "@/components/sections/PainPoints";
import { PointsOverview } from "@/components/sections/PointsOverview";
import { PointHighlight } from "@/components/sections/PointHighlight";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { ClosingCta } from "@/components/sections/ClosingCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrialContent />
      <PainPoints />
      <PointsOverview />
      <PointHighlight />
      <ComparisonTable />
      <Pricing />
      <Testimonials />
      <Faq />
      <ClosingCta />
    </main>
  );
}
