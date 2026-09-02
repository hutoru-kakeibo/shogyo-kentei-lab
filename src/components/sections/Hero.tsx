import Image from "next/image";
import { hero } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { PopButton } from "@/components/ui/PopButton";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-brand-100 via-brand-50 to-canvas px-5 pt-10 pb-14">
      <FadeIn delay={0.1}>
        <div className="relative rounded-[2rem] border-4 border-white bg-white p-2 shadow-lg shadow-brand-900/10">
          <Image
            src="/images/hero-visual.png"
            alt="商業検定ラボ - 全商の検定をサクッとプロが対策"
            width={1080}
            height={1350}
            className="w-full rounded-3xl"
            priority
          />
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white px-4 py-3 text-center shadow-sm"
            >
              <p className="text-2xl font-extrabold text-accent-500">{stat.value}</p>
              <p className="mt-0.5 text-xs text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <PopButton href="#apply" fullWidth className="mt-7">
          {hero.ctaLabel}
        </PopButton>
      </FadeIn>
    </section>
  );
}
