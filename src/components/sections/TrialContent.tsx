import { Gem, ChartSpline, PenLine, ChevronDown } from "lucide-react";
import { trial } from "@/lib/content";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { FadeIn } from "@/components/ui/FadeIn";
import { PopButton } from "@/components/ui/PopButton";

const icons = { Gem, ChartSpline, PenLine } as const;
const trialLogoLabel = "商業検定ラボ";

export function TrialContent() {
  return (
    <SectionContainer background="brand">
      <FadeIn>
        <h2 className="flex items-center justify-center gap-2 text-center text-xl leading-snug font-extrabold whitespace-pre-line text-highlight-400">
          <span aria-hidden>◆</span>
          {trial.headline}
          <span aria-hidden>◆</span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="mx-auto mt-5 w-fit rounded-full border-2 border-white bg-brand-700 px-6 py-2 text-sm font-extrabold text-white">
          {trial.badge}
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-6 rounded-[2rem] bg-brand-300/40 p-3">
          {trial.items.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <div key={item.title}>
                <div className="rounded-2xl bg-white p-4 shadow-lg shadow-brand-900/10">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-extrabold text-brand-700">
                      {trialLogoLabel}
                    </span>
                    <span className="rounded-full bg-accent-500 px-2.5 py-1 text-[11px] font-bold text-white">
                      {item.tag}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-500">
                      <Icon size={22} strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-ink">
                        {item.leadRest}
                        <span className="text-accent-500">{item.leadHighlight}</span>
                      </p>
                      <p className="mt-0.5 text-lg font-extrabold text-ink">{item.title}</p>
                    </div>
                  </div>
                </div>

                <p className="mt-3 px-2 text-center text-sm font-bold text-white">
                  {item.caption}
                </p>

                {i < trial.items.length - 1 ? (
                  <div className="my-4 border-t-2 border-dotted border-white/50" />
                ) : null}
              </div>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <PopButton href="#free-content" variant="secondary" size="md" fullWidth className="mt-8">
          {trial.listButtonLabel}
        </PopButton>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mt-6 flex flex-col items-center gap-1">
          <p className="text-sm font-bold text-white">{trial.scrollPrompt}</p>
          <ChevronDown size={28} className="animate-bounce text-highlight-400" />
        </div>
      </FadeIn>
    </SectionContainer>
  );
}
