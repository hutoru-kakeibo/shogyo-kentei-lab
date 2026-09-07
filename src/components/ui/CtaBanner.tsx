import { ChevronRight } from "lucide-react";

export function CtaBanner({
  href,
  eyebrow,
  label,
  className = "",
}: {
  href: string;
  eyebrow?: string;
  label: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`flex w-full items-center justify-between gap-3 rounded-2xl bg-accent-400 px-5 py-4 text-white shadow-[0_4px_0_0_var(--color-accent-700)] transition-transform active:translate-y-[3px] active:shadow-[0_1px_0_0_var(--color-accent-700)] ${className}`}
    >
      <span>
        {eyebrow ? <span className="block text-xs font-bold text-white/90">{eyebrow}</span> : null}
        <span className="block text-lg font-extrabold">{label}</span>
      </span>
      <ChevronRight size={24} className="shrink-0" />
    </a>
  );
}
