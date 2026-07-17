import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Fixed a dozen little things around the house in one afternoon — mounts, a wobbly door, furniture assembly. Straightforward and fairly priced.",
    author: "David K., Toronto",
  },
  {
    quote:
      "Helped us with a long-distance move and assembled everything at the new place. Careful with our things and genuinely kind. Highly recommend.",
    author: "Sarah R., Brampton",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20">
      <span
        className="block text-[13px] tracking-[0.09em] uppercase mb-10"
        style={{ color: "var(--color-accent-700)" }}
      >
        Kind words
      </span>

      <figure className="max-w-[40ch]">
        <blockquote className="font-normal text-[clamp(26px,3vw,38px)] leading-[1.25] tracking-[-0.005em] m-0">
          &ldquo;Sanjay repainted our whole main floor and built a steel
          railing for the stairs. Clean, on time, and he treated the place
          like his own.&rdquo;
        </blockquote>
        <figcaption
          className="text-[15px] mt-6"
          style={{ color: "color-mix(in srgb, var(--color-text) 68%, transparent)" }}
        >
          — Priya M., Mississauga
        </figcaption>
      </figure>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-14">
        {testimonials.map((t) => (
          <div key={t.author} className="card p-6 gap-3.5">
            <div className="flex gap-0.5" style={{ color: "var(--color-accent)" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
            <p className="text-[15.5px] leading-relaxed m-0">{t.quote}</p>
            <p
              className="text-sm m-0"
              style={{ color: "color-mix(in srgb, var(--color-text) 60%, transparent)" }}
            >
              {t.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
