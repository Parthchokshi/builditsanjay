import { Camera, MapPin, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://www.instagram.com/builditsanjay/", icon: Camera, label: "Instagram" },
  { href: "https://share.google/MWAsumM1L1OUcQRH1", icon: MapPin, label: "Google Maps" },
  { href: "mailto:builditsanjay@outlook.com", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="max-w-[1200px] mx-auto px-5 sm:px-[clamp(20px,5vw,72px)] pt-14 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-9 items-start">
        <div>
          <div className="font-semibold text-xl" style={{ fontFamily: "var(--font-heading)" }}>
            Build It Sanjay
          </div>
          <p
            className="text-[14.5px] leading-relaxed mt-3.5 mb-4.5 max-w-[36ch]"
            style={{ color: "color-mix(in srgb, var(--color-text) 68%, transparent)" }}
          >
            Home improvement, painting, custom metal work, carpentry and
            moving help across Toronto and the GTA.
          </p>
          <div className="flex gap-3.5">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-[var(--radius-md)] inline-flex items-center justify-center"
                style={{ border: "1px solid var(--color-divider)", color: "var(--color-accent)" }}
              >
                <s.icon size={19} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div
            className="text-xs tracking-[0.08em] uppercase mb-4"
            style={{ color: "color-mix(in srgb, var(--color-text) 55%, transparent)" }}
          >
            Services
          </div>
          <div className="flex flex-col gap-2.5 text-[14.5px]">
            <a href="#services" className="no-underline" style={{ color: "var(--color-text)" }}>
              Painting
            </a>
            <a href="#services" className="no-underline" style={{ color: "var(--color-text)" }}>
              Metal work
            </a>
            <a href="#services" className="no-underline" style={{ color: "var(--color-text)" }}>
              Carpentry
            </a>
            <a href="#services" className="no-underline" style={{ color: "var(--color-text)" }}>
              Moving help
            </a>
          </div>
        </div>
        <div>
          <div
            className="text-xs tracking-[0.08em] uppercase mb-4"
            style={{ color: "color-mix(in srgb, var(--color-text) 55%, transparent)" }}
          >
            Contact
          </div>
          <div className="flex flex-col gap-2.5 text-[14.5px]">
            <a
              href="mailto:builditsanjay@outlook.com"
              className="no-underline"
              style={{ color: "var(--color-text)" }}
            >
              builditsanjay@outlook.com
            </a>
            <span style={{ color: "color-mix(in srgb, var(--color-text) 68%, transparent)" }}>
              Toronto &amp; the GTA
            </span>
            <a href="#contact" className="no-underline" style={{ color: "var(--color-text)" }}>
              Get a quote
            </a>
          </div>
        </div>
      </div>
      <div
        className="flex justify-between flex-wrap gap-2.5 text-[13px] mt-9 pt-5"
        style={{
          borderTop: "1px solid var(--color-divider)",
          color: "color-mix(in srgb, var(--color-text) 55%, transparent)",
        }}
      >
        <span>© 2026 Build It Sanjay. All rights reserved.</span>
        <span>Serving Toronto &amp; the Greater Toronto Area</span>
      </div>
    </footer>
  );
}
