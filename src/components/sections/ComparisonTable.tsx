import { comparisonTable } from "@/lib/content";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { RibbonHeading } from "@/components/ui/RibbonHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function ComparisonTable() {
  return (
    <SectionContainer background="gray">
      <FadeIn>
        <RibbonHeading>{comparisonTable.heading}</RibbonHeading>
      </FadeIn>

      <div className="mt-6 space-y-4">
        {comparisonTable.rows.map((row, i) => (
          <FadeIn key={row.item} delay={i * 0.05}>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-sm font-extrabold text-ink">{row.item}</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-gray-100 p-3">
                  <p className="text-[11px] font-bold text-ink-muted">{comparisonTable.freeLabel}</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink">{row.free}</p>
                </div>
                <div className="rounded-xl border-2 border-accent-400 bg-accent-100/60 p-3">
                  <p className="text-[11px] font-bold text-accent-700">{comparisonTable.paidLabel}</p>
                  <p className="mt-1 text-xs leading-relaxed font-bold text-ink">{row.paid}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionContainer>
  );
}
