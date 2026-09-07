import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { applyPage, individualSubjects, siteMeta } from "@/lib/content";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ApplyForm } from "@/components/forms/ApplyForm";

export const metadata: Metadata = {
  title: `${applyPage.headline} | ${siteMeta.name}`,
};

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ subject?: string }>;
}) {
  const { subject } = await searchParams;
  const defaultSubject = individualSubjects.some((s) => s.slug === subject) ? subject! : "";

  return (
    <main>
      <SectionContainer background="gray" className="pt-8 pb-6">
        <Link href="/" className="inline-flex items-center gap-1 text-sm font-bold text-brand-700">
          <ArrowLeft size={16} />
          トップに戻る
        </Link>
      </SectionContainer>

      <SectionContainer background="white">
        <h1 className="text-center text-xl font-extrabold text-ink">{applyPage.headline}</h1>
        <p className="mt-3 text-center text-sm text-ink-muted">{applyPage.intro}</p>

        <div className="mt-8">
          <ApplyForm defaultSubject={defaultSubject} />
        </div>
      </SectionContainer>
    </main>
  );
}
