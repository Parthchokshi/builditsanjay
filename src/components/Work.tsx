import { ImagePlate } from "./ImagePlate";

const gallery = [
  { id: "bis-w1", label: "Interior repaint" },
  { id: "bis-w2", label: "Custom steel railing" },
  { id: "bis-w3", label: "Kitchen refresh" },
  { id: "bis-w4", label: "Deck & carpentry" },
  { id: "bis-w5", label: "Furniture assembly" },
  { id: "bis-w6", label: "Exterior painting" },
];

export function Work() {
  return (
    <section id="work" className="py-20 pb-16">
      <span
        className="block text-[13px] tracking-[0.09em] uppercase mb-4"
        style={{ color: "var(--color-accent-700)" }}
      >
        Recent work
      </span>
      <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
        <h2 className="font-normal text-[clamp(32px,4vw,48px)] leading-[1.05] tracking-[-0.008em] max-w-[16ch]">
          A few jobs from around the GTA.
        </h2>
        <p
          className="text-[15px] max-w-[30ch]"
          style={{ color: "color-mix(in srgb, var(--color-text) 68%, transparent)" }}
        >
          Drop your own project photos into the frames below.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {gallery.map((g) => (
          <figure key={g.id} className="m-0">
            <ImagePlate label={g.label} aspectRatio="4/3" />
            <figcaption
              className="text-[13px] tracking-[0.04em] uppercase mt-3"
              style={{ color: "color-mix(in srgb, var(--color-text) 60%, transparent)" }}
            >
              {g.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
