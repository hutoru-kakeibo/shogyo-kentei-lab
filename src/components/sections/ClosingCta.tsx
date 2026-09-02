import { closing } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { PopButton } from "@/components/ui/PopButton";

export function ClosingCta() {
  return (
    <section
      id="apply"
      className="bg-gradient-to-b from-brand-300 to-brand-500 px-5 py-16 text-center"
    >
      <FadeIn>
        <h2 className="whitespace-pre-line text-2xl leading-snug font-extrabold text-white">
          {closing.headline}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/85">
          {closing.subCopy}
        </p>

        <PopButton href="#apply-form" fullWidth className="mt-7">
          {closing.ctaLabel}
        </PopButton>
      </FadeIn>
    </section>
  );
}
