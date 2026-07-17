"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm border-b"
      style={{
        background: "color-mix(in srgb, var(--color-bg) 92%, transparent)",
        borderColor: "var(--color-divider)",
      }}
    >
      <nav className="max-w-[1200px] mx-auto flex items-center gap-4 sm:gap-6 px-5 py-3 sm:px-[clamp(20px,5vw,72px)]">
        <span className="nav-brand shrink-0 text-base sm:text-lg">Build It Sanjay</span>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="btn btn-primary ml-auto md:ml-0 hidden sm:inline-flex"
        >
          Get a Quote
        </a>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden ml-auto sm:ml-0 inline-flex items-center justify-center w-9 h-9 -mr-1.5"
          style={{ color: "var(--color-text)" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          className="md:hidden border-t px-5 py-4 flex flex-col gap-4"
          style={{ borderColor: "var(--color-divider)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-base"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary btn-block mt-1 sm:hidden"
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
