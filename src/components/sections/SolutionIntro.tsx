import { solutionIntro } from "@/lib/content";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { FadeIn } from "@/components/ui/FadeIn";

export function SolutionIntro() {
  return (
    <SectionContainer background="brand" className="text-center">
      <FadeIn>
        <p className="text-lg font-bold text-white">{solutionIntro.lead}</p>
      </FadeIn>

      <FadeIn delay={0.05}>
        <h2 className="mt-1 text-4xl leading-tight font-extrabold text-highlight-400">
          {solutionIntro.brandName}
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="mt-1 text-2xl font-extrabold text-white">{solutionIntro.tagline}</p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="mx-auto mt-8 max-w-xs rounded-3xl border-4 border-highlight-400 bg-white p-2 shadow-xl">
          <ImagePlaceholder
            label={solutionIntro.screenshotLabel}
            aspect="aspect-[4/3]"
            className="rounded-2xl"
          />
        </div>
      </FadeIn>
    </SectionContainer>
  );
}
