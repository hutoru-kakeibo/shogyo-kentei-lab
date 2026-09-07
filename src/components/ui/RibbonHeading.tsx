import type { ReactNode } from "react";

const tones = {
  brand: "bg-brand-500 text-white",
  highlight: "bg-highlight-400 text-ink",
} as const;

export function RibbonHeading({
  children,
  tone = "brand",
  className = "",
}: {
  children: ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-fit ${className}`}>
      <div
        className={`px-7 py-2.5 text-center text-base leading-snug font-extrabold whitespace-pre-line ${tones[tone]}`}
        style={{
          clipPath:
            "polygon(10px 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 10px 100%, 0 50%)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
