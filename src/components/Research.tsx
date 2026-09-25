import { research } from "@/lib/data";
import { SectionHead } from "./SectionHead";

export function Research() {
  if (!research.length) return null;

  return (
    <section id="research" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <SectionHead index="03" title="Research" accent="var(--color-coral)" />

      {research.map((r) => (
        <article
          key={r.title}
          className="relative overflow-hidden rounded-lg border border-rule bg-surface p-6 sm:p-9"
        >
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-[0.07]"
            style={{ background: "var(--color-coral)", filter: "blur(60px)" }}
            aria-hidden="true"
          />

          <div className="flex flex-wrap items-center gap-3">
            <span className="mono rounded-full border border-coral/40 bg-coral/10 px-3 py-1 text-xs text-coral">
              {r.status}
            </span>
            <span className="mono text-xs text-muted">{r.venue}</span>
            <span className="mono text-xs text-muted">Paper ID {r.paperId}</span>
          </div>

          <h3 className="display mt-6 max-w-[24ch] text-2xl leading-tight sm:text-4xl">
            {r.title}
          </h3>

          <ul className="mt-7 flex max-w-[70ch] flex-col gap-3">
            {r.points.map((p) => (
              <li key={p} className="flex gap-3.5 text-[0.975rem] leading-7 text-muted">
                <span className="mt-3 h-px w-4 shrink-0 bg-coral" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-rule pt-5">
            <p className="label mb-2">Authors</p>
            <p className="text-sm leading-6 text-muted">
              {r.authors.map((a, i) => (
                <span key={a}>
                  <span className={a.includes("Monish") ? "text-fg" : undefined}>{a}</span>
                  {i < r.authors.length - 1 && <span className="text-rule"> · </span>}
                </span>
              ))}
            </p>
          </div>

          <a
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mono mt-7 inline-flex items-center gap-2 text-sm text-coral"
          >
            <span className="wipe">Read on IEEE Xplore</span>
            <span aria-hidden="true">↗</span>
          </a>
        </article>
      ))}
    </section>
  );
}
