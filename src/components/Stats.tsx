const stats = [
  { value: "15+", label: "Years hands-on" },
  { value: "5", label: "Trades, one contractor" },
  { value: "GTA", label: "Toronto & beyond" },
];

export function Stats() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-7 gap-y-10 justify-between">
        {stats.map((s) => (
          <div key={s.label}>
            <p
              className="font-normal text-[clamp(36px,3.6vw,52px)] leading-none m-0"
              style={{ fontFeatureSettings: "'tnum' 1" }}
            >
              {s.value}
            </p>
            <p
              className="text-[13px] tracking-[0.08em] uppercase mt-3.5"
              style={{ color: "color-mix(in srgb, var(--color-text) 68%, transparent)" }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
