import { Check } from "lucide-react";
import { ImagePlate } from "./ImagePlate";

const points = ["Clean & reliable", "Honest, upfront pricing", "GTA-wide"];

export function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8 lg:gap-16 items-center py-20"
    >
      <figure className="m-0 w-full max-w-[440px] mx-auto lg:mx-0">
        <ImagePlate label="Photo of Sanjay / a finished job" aspectRatio="4/5" />
      </figure>
      <div>
        <span
          className="block text-[13px] tracking-[0.09em] uppercase mb-4"
          style={{ color: "var(--color-accent-700)" }}
        >
          About Sanjay
        </span>
        <h2 className="font-normal text-[clamp(30px,3.6vw,44px)] leading-[1.08] tracking-[-0.008em] max-w-[18ch]">
          The person behind Build It Sanjay.
        </h2>
        <p
          className="text-base leading-[1.7] mt-6 text-justify"
          style={{ color: "color-mix(in srgb, var(--color-text) 82%, transparent)", hyphens: "auto" }}
        >
          I&apos;m Sanjay — the hands behind Build It Sanjay, a small contractor
          business based in the GTA. I take on home improvement, painting,
          custom metal work, carpentry, moving help and all-around handyman
          services. I work with homeowners, tenants and small businesses —
          anyone who needs quality work done.
        </p>
        <p
          className="text-base leading-[1.7] mt-4 text-justify"
          style={{ color: "color-mix(in srgb, var(--color-text) 82%, transparent)", hyphens: "auto" }}
        >
          My focus is simple: clean, reliable work and a practical, honest
          approach on every job. Whether it&apos;s fixing up your space, a
          fresh coat of paint, building something from scratch, or help with a
          heavy move — I&apos;m here to make life easier, one project at a
          time.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-7 sm:flex-wrap mt-7">
          {points.map((p) => (
            <span key={p} className="flex items-center gap-2.5 text-[15px]">
              <Check size={18} style={{ color: "var(--color-accent)" }} />
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
