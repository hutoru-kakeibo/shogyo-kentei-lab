import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Flag, Ticket, ChevronRight } from "lucide-react";
import {
  individualSubjects,
  siteMeta,
  courseTicketPricing,
  successProfilesComingSoonMessage,
} from "@/lib/content";
import { PopButton } from "@/components/ui/PopButton";
import { AccordionItem } from "@/components/ui/Accordion";
import { FadeIn } from "@/components/ui/FadeIn";

export function generateStaticParams() {
  return individualSubjects.map((subject) => ({ slug: subject.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const subject = individualSubjects.find((s) => s.slug === slug);
  if (!subject) return {};

  return {
    title: `${subject.name}講座 | ${siteMeta.name}`,
    description: subject.description,
  };
}

export default async function SubjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subject = individualSubjects.find((s) => s.slug === slug);
  if (!subject) notFound();

  return (
    <main>
      {/* ヘッダー */}
        <section className="bg-gradient-to-b from-brand-100 via-brand-50 to-canvas px-5 pt-8 pb-6">
          <Link
            href="/#pricing"
            className="inline-flex items-center gap-1 text-sm font-bold text-brand-700"
          >
            <ArrowLeft size={16} />
            料金プランに戻る
          </Link>
        </section>

        {/* 1. コースの詳細 */}
        <section className="bg-white px-5 py-10">
          <FadeIn>
            <div className="flex items-center gap-2">
              <Flag size={22} className="text-accent-500" fill="currentColor" />
              <h2 className="text-xl font-extrabold text-ink">コースの詳細</h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="mt-5 text-xl leading-snug font-extrabold text-brand-700">
              {subject.name}の取得を
              <br />
              目指すコース
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-6 overflow-hidden rounded-3xl border-4 border-highlight-400 bg-brand-50">
              <div className="flex items-center gap-2 bg-brand-500 px-4 py-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-highlight-400 text-[10px] font-extrabold text-brand-700">
                  P
                </span>
                <p className="text-sm font-bold text-white">まず押さえたいポイント</p>
              </div>
              <div className="flex items-center gap-4 p-4">
                <Image
                  src="/images/reason1-study.png"
                  alt=""
                  width={72}
                  height={72}
                  className="h-16 w-16 shrink-0 rounded-full border-2 border-white bg-white object-cover object-top"
                />
                <p className="text-sm leading-relaxed font-bold text-ink">{subject.points[0]}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-8 text-base leading-relaxed font-bold text-ink">
              基礎的な知識と実践的なスキルを身につけ、
              <br />
              それを証明する検定です。
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ul className="mt-4 space-y-2">
              {subject.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-ink">
                  <ChevronRight size={16} className="mt-0.5 shrink-0 text-brand-500" />
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>
        </section>

        {/* 2. 料金 */}
        <section className="bg-canvas px-5 py-10">
          <FadeIn>
            <div className="flex items-center justify-center gap-2">
              <span className="flex items-center gap-1 rounded-full bg-accent-400 px-2.5 py-1 text-[11px] font-bold text-white">
                <Ticket size={12} />
                Ticket
              </span>
              <h2 className="text-xl font-extrabold text-ink">料金</h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="relative mt-6 overflow-hidden rounded-2xl border-2 border-dashed border-brand-500 bg-white p-5">
              <p className="text-xs font-bold text-brand-700">{siteMeta.name}</p>
              <p className="mt-1 text-base font-extrabold text-ink">
                {subject.name} {courseTicketPricing.courseLabel}
              </p>
              <ul className="mt-4 divide-y divide-gray-100">
                {subject.gradePricing.map((tier) => (
                  <li key={tier.grade} className="flex items-baseline justify-between py-2.5">
                    <span className="text-sm font-bold text-ink">{tier.grade}</span>
                    <span className="flex items-baseline gap-1">
                      <span className="text-2xl font-extrabold text-ink">
                        ¥{tier.hourlyPrice}
                      </span>
                      <span className="text-xs text-ink-muted">/ 時間</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <PopButton href={`/apply?subject=${subject.slug}`} fullWidth className="mt-6">
              今すぐ利用
            </PopButton>
          </FadeIn>
        </section>

        {/* 3. サービス内容（トレーニング内容） */}
        <section className="bg-white px-5 py-10">
          <FadeIn>
            <div className="flex items-center gap-2">
              <Flag size={22} className="text-accent-500" fill="currentColor" />
              <h2 className="text-xl font-extrabold text-ink">トレーニング内容</h2>
            </div>
          </FadeIn>

          <div className="mt-6 space-y-3">
            {subject.trainingModules.map((step, i) => (
              <FadeIn key={step} delay={i * 0.04}>
                <AccordionItem question={`【${i + 1}】 ${step}`} answer={`${step}を学びます。`} />
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 4. 合格プロフィール */}
        <section className="bg-brand-500 px-5 py-10">
          <FadeIn>
            <h2 className="text-center text-xl font-extrabold text-white">合格プロフィール</h2>
          </FadeIn>

          {subject.successProfiles.length > 0 ? (
            <div className="mt-6 space-y-5">
              {subject.successProfiles.map((profile, i) => (
                <FadeIn key={profile.name} delay={i * 0.08}>
                  <div className="rounded-3xl border-2 border-white bg-white/95 p-5 shadow-lg">
                    <span className="inline-block rounded bg-highlight-400 px-2 py-0.5 text-sm font-extrabold text-ink underline decoration-accent-500 decoration-4">
                      {profile.tag}
                    </span>

                    <div className="mt-3 flex items-center gap-3">
                      <Image
                        src={profile.avatar}
                        alt=""
                        width={48}
                        height={48}
                        className="h-12 w-12 shrink-0 rounded-full border-2 border-brand-100 object-cover object-top"
                      />
                      <div>
                        <p className="text-sm font-extrabold text-ink">{profile.name}</p>
                        <p className="text-xs text-ink-muted">{profile.role}</p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-y-2 border-t border-gray-100 pt-4 text-sm text-ink">
                      <p>
                        合計時間{" "}
                        <span className="font-extrabold text-brand-700">{profile.totalHours}</span>h
                      </p>
                      <p>
                        模擬最高点{" "}
                        <span className="font-extrabold text-brand-700">
                          {profile.mockBestScore}
                        </span>
                        点
                      </p>
                      <p>
                        合計日数{" "}
                        <span className="font-extrabold text-brand-700">{profile.totalDays}</span>日
                      </p>
                      <p>
                        模擬試験回数{" "}
                        <span className="font-extrabold text-brand-700">{profile.mockCount}</span>回
                      </p>
                    </div>
                    <div className="mt-3 space-y-1 border-t border-gray-100 pt-3 text-xs text-ink-muted">
                      <p>スタイル：{profile.style}</p>
                      <p>学習教材：{profile.materials}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          ) : (
            <FadeIn delay={0.05}>
              <div className="mt-6 rounded-3xl border-2 border-white bg-white/95 px-5 py-14 text-center">
                <p className="text-sm leading-relaxed font-bold text-ink-muted">
                  {successProfilesComingSoonMessage}
                </p>
              </div>
            </FadeIn>
          )}
        </section>

        <section className="bg-canvas px-5 py-10">
          <PopButton href="/#apply" fullWidth>
            無料体験に申し込む
          </PopButton>
        </section>
    </main>
  );
}

