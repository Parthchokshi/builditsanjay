"use client";

import { useEffect, useRef } from "react";
import { Camera } from "lucide-react";

const postUrls = [
  "https://www.instagram.com/p/DXUHbNkiDhE/",
  "https://www.instagram.com/p/DTaNcb6CEzM/",
  "https://www.instagram.com/p/DMsdaGQxX4X/",
  "https://www.instagram.com/p/DIj5jG7SR1x/",
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export function Instagram() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const process = () => window.instgrm?.Embeds.process();

    if (window.instgrm) {
      process();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.instagram.com/embed.js"]'
    );
    if (existing) {
      existing.addEventListener("load", process);
      return () => existing.removeEventListener("load", process);
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = process;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="instagram" className="py-20">
      <div className="flex items-center justify-between gap-6 flex-wrap mb-9">
        <div>
          <span
            className="block text-[13px] tracking-[0.09em] uppercase mb-3.5"
            style={{ color: "var(--color-accent-700)" }}
          >
            From the site
          </span>
          <h2 className="font-normal text-[clamp(30px,3.6vw,44px)] leading-[1.05] m-0">
            Follow along{" "}
            <a
              href="https://www.instagram.com/builditsanjay/"
              target="_blank"
              rel="noopener noreferrer"
              className="bis-link"
            >
              @builditsanjay
            </a>
          </h2>
        </div>
        <a
          href="https://www.instagram.com/builditsanjay/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary min-h-11 px-6 text-[15px]"
        >
          <Camera size={17} />
          Follow on Instagram
        </a>
      </div>
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center"
      >
        {postUrls.map((url) => (
          <blockquote
            key={url}
            className="instagram-media"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "3px",
              margin: 0,
              maxWidth: "100%",
              minWidth: "270px",
              width: "100%",
            }}
          />
        ))}
      </div>
    </section>
  );
}
