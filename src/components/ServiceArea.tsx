import { Mail, Clock, MapPin } from "lucide-react";

const MAPS_URL = "https://share.google/MWAsumM1L1OUcQRH1";

export function ServiceArea() {
  return (
    <section
      id="area"
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-20"
    >
      <div>
        <span
          className="block text-[13px] tracking-[0.09em] uppercase mb-4"
          style={{ color: "var(--color-accent-700)" }}
        >
          Where I work
        </span>
        <h2 className="font-normal text-[clamp(30px,3.6vw,44px)] leading-[1.08] tracking-[-0.008em] max-w-[16ch]">
          Serving Toronto &amp; the Greater Toronto Area.
        </h2>
        <p
          className="text-base leading-[1.7] mt-6 mb-7 max-w-[44ch]"
          style={{ color: "color-mix(in srgb, var(--color-text) 78%, transparent)" }}
        >
          Toronto · Mississauga · Brampton · Vaughan · Markham · Etobicoke ·
          Scarborough — and the surrounding area.
        </p>
        <div className="flex flex-col gap-3.5 mb-7">
          <span className="flex items-center gap-3 text-[15.5px]">
            <Mail size={18} style={{ color: "var(--color-accent)" }} />
            <a href="mailto:builditsanjay@outlook.com" className="bis-link">
              builditsanjay@outlook.com
            </a>
          </span>
          <span className="flex items-center gap-3 text-[15.5px]">
            <Clock size={18} style={{ color: "var(--color-accent)" }} />
            Flexible scheduling, seven days a week
          </span>
        </div>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary min-h-11 px-6 text-[15px]"
        >
          <MapPin size={17} />
          View on Google Maps
        </a>
      </div>
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)]"
        style={{ border: "1px solid var(--color-divider)" }}
      >
        <iframe
          title="Map of Toronto & the Greater Toronto Area"
          src="https://www.google.com/maps?q=Toronto,+Ontario,+Canada&output=embed"
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
