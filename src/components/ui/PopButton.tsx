import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-transform active:translate-y-[3px]";

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-6 py-4 text-base",
} as const;

const variants = {
  primary:
    "bg-accent-400 text-white shadow-[0_4px_0_0_var(--color-accent-700)] active:shadow-[0_1px_0_0_var(--color-accent-700)]",
  secondary:
    "border border-brand-100 bg-white text-brand-700 shadow-[0_4px_0_0_var(--color-brand-100)] active:shadow-[0_1px_0_0_var(--color-brand-100)]",
} as const;

type PopButtonProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  fullWidth?: boolean;
  className?: string;
};

export function PopButton({
  href,
  children,
  variant = "primary",
  size = "lg",
  fullWidth = false,
  className = "",
}: PopButtonProps) {
  return (
    <a
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </a>
  );
}
