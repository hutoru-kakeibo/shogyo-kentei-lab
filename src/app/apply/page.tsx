import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { applyPage, siteMeta } from "@/lib/content";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { PopButton } from "@/components/ui/PopButton";

export const metadata: Metadata = {
  title: `${applyPage.headline} | ${siteMeta.name}`,
};

export default function ApplyPage() {
  return (
    <main>
      <SectionContainer background="gray" className="pt-8 pb-6">
        <Link href="/" className="inline-flex items-center gap-1 text-sm font-bold text-brand-700">
          <ArrowLeft size={16} />
          トップに戻る
        </Link>
      </SectionContainer>

      <SectionContainer background="white" className="flex flex-col items-center text-center">
        <h1 className="text-xl font-extrabold text-ink">{applyPage.headline}</h1>
        <p className="mt-6 text-sm leading-relaxed font-bold text-ink-muted">
          {applyPage.message}
        </p>
        <PopButton href="/" className="mt-8">
          {applyPage.backLabel}
        </PopButton>
      </SectionContainer>
    </main>
  );
}
