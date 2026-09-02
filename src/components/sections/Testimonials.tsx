import { Quote } from "lucide-react";
import { testimonials } from "@/lib/content";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { FadeIn } from "@/components/ui/FadeIn";

export function Testimonials() {
  return (
    <SectionContainer background="white" className="px-0">
      <FadeIn className="px-5">
        <p className="text-center text-xs font-bold text-brand-700">VOICE</p>
        <h2 className="mt-1 text-center text-xl font-bold text-ink">
          利用者の声
        </h2>
      </FadeIn>

      <div className="mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-hide px-5 pb-2">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="w-64 shrink-0 snap-start rounded-3xl bg-canvas p-5"
          >
            <Quote size={22} className="text-brand-300" />
            <p className="mt-3 text-sm leading-relaxed text-ink">{t.comment}</p>
            <p className="mt-4 text-sm font-bold text-ink">{t.name}</p>
            <p className="text-xs text-ink-muted">{t.role}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
