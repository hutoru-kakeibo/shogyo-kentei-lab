import { Gamepad2, Smartphone, Target, MessageCircleQuestion } from "lucide-react";
import { features, featuresHeadline } from "@/lib/content";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { FadeIn } from "@/components/ui/FadeIn";

const icons = { Smartphone, Target, MessageCircleQuestion } as const;
const reasonNumerals = ["①", "②", "③"];

export function Features() {
  return (
    <SectionContainer background="brand">
      <FadeIn>
        <h2 className="flex items-center justify-center gap-2 text-center text-xl font-extrabold text-white">
          {featuresHeadline}
          <Gamepad2 size={22} className="text-highlight-400" />
        </h2>
      </FadeIn>

      <div className="mt-12 space-y-20">
        {features.map((feature, i) => {
          const Icon = icons[feature.icon as keyof typeof icons];
          return (
            <FadeIn key={feature.leadText} delay={i * 0.08}>
              <div className="relative">
                {/* カード本体：白背景。上端はバッジを迎えるため余白多め */}
                <div className="relative z-0 rounded-3xl bg-white px-5 pt-8 pb-6 shadow-lg shadow-brand-900/10">
                  {/* 理由バッジ：水色（外側セクション背景）と白（カード）の境界線上にまたがる */}
                  <div className="absolute top-0 left-4 z-30 inline-flex -translate-y-1/2 items-center gap-2 rounded-full bg-brand-500 py-1.5 pr-4 pl-1.5 text-sm font-bold text-white shadow-md">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-highlight-400 text-brand-700">
                      <Icon size={16} strokeWidth={2.5} />
                    </span>
                    理由{reasonNumerals[i]}
                  </div>

                  {/* 吹き出し：通常のフローから外し、右上に完全に浮かせる */}
                  <div className="absolute -top-8 right-2 z-20 flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-brand-500 bg-highlight-400 text-center text-[11px] leading-tight font-bold whitespace-nowrap text-ink shadow-md">
                    {feature.speechBubble.split("\n").map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </div>

                  <p className="mt-2 text-sm font-bold text-brand-700">{feature.leadText}</p>
                  <h3 className="mt-1 text-2xl leading-snug font-extrabold text-ink">
                    {feature.headline.split("\n").map((line) => (
                      <span key={line} className="relative inline-block">
                        <span className="relative z-10">{line}</span>
                        <span className="absolute inset-x-0 bottom-0 z-0 h-[40%] bg-highlight-400" />
                      </span>
                    ))}
                  </h3>

                  <ul className="mt-4 space-y-1.5">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-1.5 text-sm font-bold text-ink">
                        <span className="text-brand-500">★</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </SectionContainer>
  );
}
