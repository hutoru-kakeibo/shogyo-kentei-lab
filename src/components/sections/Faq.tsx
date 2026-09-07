import { faqs } from "@/lib/content";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { AccordionItem } from "@/components/ui/Accordion";
import { FadeIn } from "@/components/ui/FadeIn";

export function Faq() {
  return (
    <SectionContainer background="brandDark">
      <FadeIn>
        <p className="text-center text-xs font-bold text-brand-100">FAQ</p>
        <h2 className="mt-1 text-center text-xl font-bold text-white">
          よくある質問
        </h2>
      </FadeIn>

      <div className="mt-7 space-y-3">
        {faqs.map((faq, i) => (
          <FadeIn key={faq.question} delay={i * 0.05}>
            <div className="flex items-start gap-2.5">
              <span className="mt-3.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs font-extrabold text-white">
                Q
              </span>
              <div className="flex-1">
                <AccordionItem question={faq.question} answer={faq.answer} variant="dark" />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionContainer>
  );
}
