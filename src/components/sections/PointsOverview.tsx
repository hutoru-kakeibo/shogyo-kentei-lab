"use client";

import { useState } from "react";
import { Crown, ChevronDown, Smartphone, Target, MessageCircleQuestion } from "lucide-react";
import { pointsOverview, features } from "@/lib/content";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { FadeIn } from "@/components/ui/FadeIn";

const icons = { Smartphone, Target, MessageCircleQuestion } as const;

export function PointsOverview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionContainer background="brand">
      <FadeIn>
        <p className="text-center text-sm font-bold text-white">{pointsOverview.lead}</p>
        <h2 className="mt-1 text-center text-2xl leading-tight font-extrabold text-highlight-400">
          {pointsOverview.brandName}
        </h2>
        <p className="text-center text-lg font-extrabold text-white">{pointsOverview.tagline}</p>
      </FadeIn>

      <div className="mt-8 space-y-4">
        {features.map((feature, i) => {
          const Icon = icons[feature.icon as keyof typeof icons];
          const open = openIndex === i;
          return (
            <FadeIn key={feature.headline} delay={i * 0.06}>
              <div className="rounded-3xl bg-brand-300/30 p-4">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center gap-3 text-left"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-500 shadow-sm">
                    <Icon size={20} strokeWidth={2.5} />
                  </span>
                  <span className="flex-1">
                    <span className="inline-flex items-center gap-1 rounded-full bg-highlight-400 px-2.5 py-0.5 text-[11px] font-extrabold text-ink">
                      <Crown size={12} />
                      POINT {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1 block text-base leading-snug font-extrabold whitespace-pre-line text-white">
                      {feature.headline}
                    </span>
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-white transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>

                {open ? (
                  <ul className="mt-3 space-y-1.5 border-t border-white/20 pt-3">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-1.5 text-sm font-bold text-white/90">
                        <span className="text-highlight-400">★</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </SectionContainer>
  );
}
