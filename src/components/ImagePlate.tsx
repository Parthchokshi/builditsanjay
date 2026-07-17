import { ImageIcon } from "lucide-react";

export function ImagePlate({
  label,
  aspectRatio,
  className = "",
}: {
  label: string;
  aspectRatio: string;
  className?: string;
}) {
  return (
    <div
      className={`plate flex items-center justify-center ${className}`}
      style={{ aspectRatio }}
    >
      <div
        className="relative z-10 flex flex-col items-center gap-2 px-4 text-center"
        style={{ color: "color-mix(in srgb, var(--color-text) 45%, transparent)" }}
      >
        <ImageIcon size={28} strokeWidth={1.25} />
        <span className="text-xs tracking-wide">{label}</span>
      </div>
    </div>
  );
}
