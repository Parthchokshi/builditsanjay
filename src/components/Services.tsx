import { Paintbrush, Flame, Hammer, Truck, Wrench, MessageCircle } from "lucide-react";

const services = [
  {
    kicker: "01 · Painting",
    icon: Paintbrush,
    title: "Interior & exterior painting",
    body: "Clean, precise coats inside and out — proper prep, crisp lines, tidy edges and no mess left behind.",
  },
  {
    kicker: "02 · Metal work",
    icon: Flame,
    title: "Custom fabrication & welding",
    body: "Railings, frames, brackets and one-off metal projects fabricated and welded to fit your space.",
  },
  {
    kicker: "03 · Carpentry",
    icon: Hammer,
    title: "Carpentry, repairs & assembly",
    body: "Repairs, furniture assembly, custom builds and light plumbing work — done right the first time.",
  },
  {
    kicker: "04 · Moving",
    icon: Truck,
    title: "Moving assistance",
    body: "Local and long-distance moving help — careful hands for the heavy lifting, from one room to a whole home.",
  },
  {
    kicker: "05 · Handyman",
    icon: Wrench,
    title: "Any handyman job",
    body: "Odd jobs, mounts, fixes and honey-do lists — big or small, if it needs doing I can help.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-24 pb-16">
      <span
        className="block text-[13px] tracking-[0.09em] uppercase mb-4"
        style={{ color: "var(--color-accent-700)" }}
      >
        What I do
      </span>
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <h2 className="font-normal text-[clamp(32px,4vw,48px)] leading-[1.05] tracking-[-0.008em] max-w-[16ch]">
          One trusted pair of hands, many trades.
        </h2>
        <p
          className="text-[15.5px] leading-relaxed max-w-[34ch]"
          style={{ color: "color-mix(in srgb, var(--color-text) 72%, transparent)" }}
        >
          No job too small, none too big — fixing up, freshening, building from
          scratch, or a heavy move.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-11">
        {services.map((s) => (
          <div key={s.title} className="card gap-3.5 p-6">
            <div className="flex items-center justify-between">
              <span className="card-kicker">{s.kicker}</span>
              <s.icon size={22} style={{ color: "var(--color-accent)" }} />
            </div>
            <h3 className="card-title text-[22px]">{s.title}</h3>
            <p className="card-body text-sm leading-relaxed text-justify" style={{ hyphens: "auto" }}>
              {s.body}
            </p>
          </div>
        ))}
        <a
          href="#contact"
          className="card gap-3.5 p-6 no-underline"
          style={{ borderStyle: "dashed", borderColor: "var(--color-accent)" }}
        >
          <div className="flex items-center justify-between">
            <span className="card-kicker">Not listed?</span>
            <MessageCircle size={22} style={{ color: "var(--color-accent)" }} />
          </div>
          <h3 className="card-title text-[22px]" style={{ color: "var(--color-accent)" }}>
            Just ask
          </h3>
          <p className="card-body text-sm leading-relaxed">
            If you don&apos;t see what you need, send a note — chances are I can
            take it on.
          </p>
        </a>
      </div>
    </section>
  );
}
