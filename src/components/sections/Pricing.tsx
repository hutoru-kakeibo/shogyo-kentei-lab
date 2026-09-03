"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  pricingModes,
  individualSubjects,
  pricingComingSoonMessage,
  type PricingModeKey,
} from "@/lib/content";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { FadeIn } from "@/components/ui/FadeIn";
import { PopButton } from "@/components/ui/PopButton";

export function Pricing() {
  const [mode, setMode] = useState<PricingModeKey>(pricingModes[0].key);

  return (
    <SectionContainer background="gray" id="pricing">
      <FadeIn>
        <p className="text-center text-xs font-bold text-brand-700">PRICE</p>
        <h2 className="mt-1 text-center text-xl font-bold text-ink">料金プラン</h2>
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
                  className="flex items-center justify-between gap-1 rounded-2xl border border-gray-200 bg-white p-4 text-sm font-bold text-ink transition-colors active:bg-brand-50"
                >
                  {subject.name}
                  <ChevronRight size={16} className="shrink-0 text-brand-500" />
                </Link>
              ) : (
                <div
                  key={subject.slug}
                  aria-disabled="true"
                  className="flex flex-col items-start gap-1 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm font-bold text-gray-400"
                >
                  {subject.name}
                  <span className="rounded-full bg-gray-200 px-2 py-0.5 text-[10px] font-bold text-gray-500">
                    準備中
                  </span>
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
