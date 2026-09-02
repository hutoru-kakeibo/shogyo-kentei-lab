import Image from "next/image";
import { Check } from "lucide-react";
import { painPoints, painPointsHeadline, painPointsLead } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";

export function PainPoints() {
  return (
    <section>
      <div className="bg-brand-500 px-5 pt-12 pb-6 text-center">
        <FadeIn>
          <h2 className="whitespace-pre-line text-2xl leading-snug font-extrabold text-white">
            <span className="mr-1" aria-hidden>
              ＼
            </span>
            {painPointsHeadline}
            <span className="ml-1" aria-hidden>
              ／
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Image
            src="/images/pain-points-illustration.png"
            alt="検定勉強に悩む学生のイラスト"
            width={603}
            height={763}
            className="mx-auto mt-4 w-40"
            priority
          />
        </FadeIn>
      </div>

      <div className="bg-accent-700 px-5 pt-8 pb-12">
        <FadeIn>
          <p className="text-center text-sm font-bold text-white/90">
            {painPointsLead}
          </p>
        </FadeIn>

        <div className="mx-auto mt-5 max-w-xs space-y-3">
          {painPoints.map((point, i) => (
            <FadeIn key={point} delay={i * 0.05}>
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-highlight-400">
                  <Check size={16} strokeWidth={3} className="text-accent-700" />
                </span>
                <p className="text-sm leading-relaxed font-bold text-white">{point}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
