"use client";

import { useState } from "react";
import { Mail, MapPin, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="grid grid-cols-1 lg:grid-cols-[6fr_5fr] gap-8 lg:gap-16 items-start py-20"
    >
      <div>
        <span
          className="block text-[13px] tracking-[0.09em] uppercase mb-4"
          style={{ color: "var(--color-accent-700)" }}
        >
          Get a quote
        </span>
        <h2 className="font-normal text-[clamp(32px,4vw,48px)] leading-[1.05] tracking-[-0.008em] max-w-[14ch]">
          Tell me about your project.
        </h2>
        <p
          className="text-base leading-[1.7] mt-6 mb-8 max-w-[42ch]"
          style={{ color: "color-mix(in srgb, var(--color-text) 78%, transparent)" }}
        >
          Free, no-pressure estimates. Send a few details and I&apos;ll get
          back to you, usually the same day.
        </p>
        <div className="flex flex-col gap-3.5">
          <a
            href="mailto:builditsanjay@outlook.com"
            className="flex items-center gap-4 rounded-[var(--radius-md)] px-5 py-4.5 no-underline"
            style={{ border: "1px solid var(--color-divider)", color: "var(--color-text)" }}
          >
            <Mail size={22} style={{ color: "var(--color-accent)" }} />
            <span>
              <span
                className="block text-xs tracking-[0.06em] uppercase"
                style={{ color: "color-mix(in srgb, var(--color-text) 60%, transparent)" }}
              >
                Email
              </span>
              <span className="font-semibold text-[19px]" style={{ fontFamily: "var(--font-heading)" }}>
                builditsanjay@outlook.com
              </span>
            </span>
          </a>
          <div
            className="flex items-center gap-4 rounded-[var(--radius-md)] px-5 py-4.5"
            style={{ border: "1px solid var(--color-divider)" }}
          >
            <MapPin size={22} style={{ color: "var(--color-accent)" }} />
            <span>
              <span
                className="block text-xs tracking-[0.06em] uppercase"
                style={{ color: "color-mix(in srgb, var(--color-text) 60%, transparent)" }}
              >
                Service area
              </span>
              <span className="font-semibold text-[19px]" style={{ fontFamily: "var(--font-heading)" }}>
                Toronto &amp; the GTA
              </span>
            </span>
          </div>
        </div>
      </div>

      <div
        className="rounded-[var(--radius-lg)] p-8"
        style={{ border: "1px solid var(--color-divider)", background: "var(--color-surface)" }}
      >
        {submitted ? (
          <div className="text-center py-9 px-2">
            <CheckCircle2
              size={52}
              className="inline-flex"
              style={{ color: "var(--color-accent)" }}
            />
            <h3 className="font-semibold text-[26px] mt-4.5 mb-2">
              Thanks — request sent
            </h3>
            <p
              className="text-[15px] leading-relaxed"
              style={{ color: "color-mix(in srgb, var(--color-text) 72%, transparent)" }}
            >
              Sanjay will get back to you shortly, usually the same day.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="field">
                <label>Name</label>
                <input className="input" required placeholder="Your name" />
              </div>
              <div className="field">
                <label>Phone</label>
                <input className="input" placeholder="(optional)" />
              </div>
            </div>
            <div className="field">
              <label>Email</label>
              <input className="input" type="email" required placeholder="you@email.com" />
            </div>
            <div className="field">
              <label>Service needed</label>
              <select className="input">
                <option>Painting</option>
                <option>Custom metal work</option>
                <option>Carpentry &amp; repairs</option>
                <option>Moving help</option>
                <option>General handyman</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="field">
              <label>Project details</label>
              <textarea
                className="input"
                rows={4}
                placeholder="Tell Sanjay what you need done..."
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block min-h-[46px] text-[15px] mt-1">
              Request free quote
            </button>
            <p
              className="text-center text-[12.5px]"
              style={{ color: "color-mix(in srgb, var(--color-text) 55%, transparent)" }}
            >
              No spam. Sanjay replies personally.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
