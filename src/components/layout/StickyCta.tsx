"use client";

import { PopButton } from "@/components/ui/PopButton";

export function StickyCta({ label, href = "#apply" }: { label: string; href?: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 pb-safe backdrop-blur">
      <div className="mx-auto max-w-md px-5 py-3">
        <PopButton href={href} size="md" fullWidth>
          {label}
        </PopButton>
      </div>
    </div>
  );
}
