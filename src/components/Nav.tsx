"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "background", label: "Background" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Toolkit" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "color-mix(in srgb, var(--color-bg) 82%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-rule)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 sm:px-10">
        <a href="#top" className="mono text-sm font-medium">
          MM<span className="text-acid">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {items.map((i) => (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                className="mono text-xs transition-colors"
                style={{ color: active === i.id ? "var(--color-acid)" : "var(--color-muted)" }}
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="mono rounded-full border border-rule px-3.5 py-1.5 text-xs transition-colors hover:border-acid hover:text-acid"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}
