import { ImagePlate } from "./ImagePlate";

export function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-10 lg:gap-16 items-center py-16 lg:py-24">
      <div>
        <span
          className="block text-[13px] tracking-[0.09em] uppercase mb-5"
          style={{ color: "var(--color-accent-700)" }}
        >
          Handyman &amp; home improvement · Toronto &amp; the GTA
        </span>
        <h1 className="font-normal text-[clamp(46px,6.4vw,88px)] leading-[1.04] tracking-[-0.01em]">
          Skilled hands
          <br />
          for the whole home.
        </h1>
        <p
          className="text-lg leading-relaxed max-w-[52ch] mt-7"
          style={{ color: "color-mix(in srgb, var(--color-text) 80%, transparent)" }}
        >
          I&apos;m Sanjay. Painting, custom metal work, carpentry, moving help and
          all-around handyman services — quality work done clean, and kept
          straightforward from quote to clean-up.
        </p>
        <div className="flex gap-3.5 flex-wrap mt-8">
          <a href="#contact" className="btn btn-primary min-h-11 px-6 text-[15px]">
            Get a free quote
          </a>
          <a href="#work" className="btn btn-secondary min-h-11 px-6 text-[15px]">
            See recent work
          </a>
        </div>
        <p
          className="text-sm mt-6"
          style={{ color: "color-mix(in srgb, var(--color-text) 65%, transparent)" }}
        >
          Serving homeowners, tenants &amp; small businesses across the GTA
        </p>
      </div>
      <figure className="m-0 w-full max-w-[430px] mx-auto lg:mx-0 lg:justify-self-end">
        <ImagePlate label="Photo of Sanjay on the job" aspectRatio="1093/1600" />
      </figure>
    </section>
  );
}
