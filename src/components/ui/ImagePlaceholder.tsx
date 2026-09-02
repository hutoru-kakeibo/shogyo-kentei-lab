import { ImageIcon } from "lucide-react";

export function ImagePlaceholder({
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  label?: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex ${aspect} w-full flex-col items-center justify-center gap-2 rounded-2xl bg-gray-200 text-gray-400 ${className}`}
    >
      <ImageIcon size={28} strokeWidth={1.5} />
      {label ? <span className="text-xs">{label}</span> : null}
    </div>
  );
}
