"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  pricingModes,
  individualSubjects,
  pricingComingSoonMessage,
  pricingAvailableBadge,
  pricingUnavailableBadge,
  type PricingModeKey,
} from "@/lib/content";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { RibbonHeading } from "@/components/ui/RibbonHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { PopButton } from "@/components/ui/PopButton";

export function Pricing() {
  const [mode, setMode] = useState<PricingModeKey>(pricingModes[0].key);

  return (
    <SectionContainer background="gray" id="pricing">
      <FadeIn>
        <p className="text-center text-xs font-bold text-brand-700">PRICE</p>
        <RibbonHeading className="mt-2">料金プラン</RibbonHeading>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="mt-6 grid grid-cols-2 gap-2 rounded-full bg-white p-1.5 shadow-sm">
          {pricingModes.map((m) => (
            <button
              key={m.key}
              type="button"
              onClick={() => setMode(m.key)}
              aria-pressed={mode === m.key}
              className={`rounded-full py-2.5 text-sm font-bold transition-colors ${
                mode === m.key ? "bg-brand-500 text-white shadow-sm" : "text-ink-muted"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </FadeIn>

      {mode === "individual" ? (
        <FadeIn delay={0.1}>
          <p className="mt-6 text-center text-sm text-ink-muted">
            気になる科目をタップして詳細をチェック
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {individualSubjects.map((subject) =>
              subject.available ? (
                <Link
                  key={subject.slug}
                  href={`/subjects/${subject.slug}`}
                  className="relative flex flex-col gap-2 overflow-hidden rounded-2xl border-2 border-brand-500 bg-white p-4 pt-5 text-sm font-bold text-ink shadow-sm transition-colors active:bg-brand-50"
                >
                  <span className="absolute top-0 left-0 rounded-br-lg bg-brand-500 px-2 py-0.5 text-[10px] font-bold text-white">
                    {pricingAvailableBadge}
                  </span>
                  <span className="flex items-center justify-between gap-1">
                    {subject.name}
                    <ChevronRight size={16} className="shrink-0 text-brand-500" />
                  </span>
                </Link>
              ) : (
                <div
                  key={subject.slug}
                  aria-disabled="true"
                  className="relative flex flex-col gap-2 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-4 pt-5 text-sm font-bold text-gray-400"
                >
                  <span className="absolute top-0 left-0 rounded-br-lg bg-gray-300 px-2 py-0.5 text-[10px] font-bold text-white">
                    {pricingUnavailableBadge}
                  </span>
                  {subject.name}
                </div>
              ),
            )}
          </div>

          <PopButton href="#apply" fullWidth className="mt-6">
            無料体験に申し込む
          </PopButton>
        </FadeIn>
      ) : (
        <FadeIn delay={0.1}>
          <div className="mt-6 rounded-3xl border border-gray-200 bg-white px-5 py-14 text-center">
            <p className="text-sm leading-relaxed font-bold text-ink-muted">
              {pricingComingSoonMessage}
            </p>
          </div>
        </FadeIn>
      )}
    </SectionContainer>
  );
}
