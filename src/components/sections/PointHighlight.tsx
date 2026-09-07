import { Check } from "lucide-react";
import { pointHighlight } from "@/lib/content";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { FadeIn } from "@/components/ui/FadeIn";

export function PointHighlight() {
  return (
    <SectionContainer background="white">
      <FadeIn>
        <p className="text-center text-xs font-bold text-brand-700">{pointHighlight.eyebrow}</p>
        <h2 className="mt-1 whitespace-pre-line text-center text-2xl leading-snug font-extrabold text-ink">
          {pointHighlight.headline}
        </h2>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="mt-6 overflow-hidden rounded-3xl border-2 border-brand-100">
          <ImagePlaceholder label={pointHighlight.imageLabel} aspect="aspect-[4/3]" />
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-5 rounded-2xl bg-brand-50 p-4">
          <p className="text-sm leading-relaxed text-ink">{pointHighlight.body}</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <ul className="mt-4 space-y-2">
          {pointHighlight.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-sm font-bold text-ink">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-400 text-white">
                <Check size={12} strokeWidth={3} />
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      </FadeIn>
    </SectionContainer>
  );
}
