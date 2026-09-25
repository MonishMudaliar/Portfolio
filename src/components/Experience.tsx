import { experience } from "@/lib/data";
import { SectionHead } from "./SectionHead";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <SectionHead index="02" title="Experience" />

      <div className="flex flex-col gap-4">
        {experience.map((e) => (
          <article
            key={e.company}
            className="group rounded-lg border border-rule bg-surface p-6 transition-colors hover:border-acid/40 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="display text-2xl">{e.company}</h3>
                  {e.current && (
                    <span className="flex items-center gap-1.5 rounded-full border border-acid/30 bg-acid/10 px-2.5 py-0.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-acid" />
                      <span className="mono text-[0.65rem] text-acid">Current</span>
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-lg text-acid">{e.role}</p>
                <p className="mono mt-1 text-xs text-muted">{e.location}</p>
              </div>
              <span className="mono shrink-0 text-sm text-muted">{e.period}</span>
            </div>

            <ul className="mt-6 flex flex-col gap-3">
              {e.points.map((p) => (
                <li key={p} className="flex gap-3.5 text-[0.975rem] leading-7 text-muted">
                  <span className="mt-3 h-px w-4 shrink-0 bg-acid" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {e.tags.map((t) => (
                <span
                  key={t}
                  className="mono rounded-full border border-rule px-3 py-1 text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
