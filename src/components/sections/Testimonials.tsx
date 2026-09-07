"use client";

import { useRef, useState } from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/content";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { FadeIn } from "@/components/ui/FadeIn";

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function handleScroll() {
    const el = scrollerRef.current;
    if (!el || el.children.length === 0) return;
    const first = el.children[0];
    if (!(first instanceof HTMLElement)) return;
    const step = first.offsetWidth + 16;
    const index = Math.round(el.scrollLeft / step);
    setActive(Math.min(testimonials.length - 1, Math.max(0, index)));
  }

  function scrollToIndex(index: number) {
    const el = scrollerRef.current;
    const card = el?.children[index];
    if (el && card instanceof HTMLElement) {
      el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
    }
  }

  return (
    <SectionContainer background="white" className="px-0">
      <FadeIn className="px-5">
        <p className="text-center text-xs font-bold text-brand-700">VOICE</p>
        <h2 className="mt-1 text-center text-xl font-bold text-ink">利用者の声</h2>
      </FadeIn>

      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        className="mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-hide px-5 pb-2"
      >
        {testimonials.map((t) => (
          <div key={t.name} className="w-64 shrink-0 snap-start rounded-3xl bg-canvas p-5">
            <Quote size={22} className="text-brand-300" />
            <p className="mt-3 text-sm leading-relaxed text-ink">{t.comment}</p>
            <p className="mt-4 text-sm font-bold text-ink">{t.name}</p>
            <p className="text-xs text-ink-muted">{t.role}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex justify-center gap-1.5">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            type="button"
            aria-label={`${i + 1}件目の声を表示`}
            onClick={() => scrollToIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              active === i ? "w-5 bg-brand-500" : "w-1.5 bg-brand-100"
            }`}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
