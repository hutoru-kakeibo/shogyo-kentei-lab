import type { ReactNode } from "react";

const backgrounds = {
  white: "bg-surface text-ink",
  gray: "bg-canvas text-ink",
  brand: "bg-brand-500 text-white",
  brandDark: "bg-brand-700 text-white",
} as const;

export function SectionContainer({
  children,
  background = "white",
  className = "",
  id,
}: {
  children: ReactNode;
  background?: keyof typeof backgrounds;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`${backgrounds[background]} px-5 py-14 ${className}`}>
      {children}
    </section>
  );
}
