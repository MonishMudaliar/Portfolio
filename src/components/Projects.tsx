import { projects } from "@/lib/data";
import { SectionHead } from "./SectionHead";
import { Sparkline } from "./Sparkline";

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <SectionHead index="04" title="Selected work" />

      <div className="flex flex-col gap-6">
        {projects.map((p) => (
          <article
            key={p.name}
            className="overflow-hidden rounded-lg border border-rule bg-surface transition-colors hover:border-acid/40"
          >
            {/* Header band */}
            <div className="flex flex-wrap items-start justify-between gap-6 border-b border-rule p-6 sm:p-8">
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className="mono text-sm text-acid">{p.index}</span>
                  <span className="mono rounded border border-rule px-2 py-0.5 text-xs text-muted">
                    {p.domain}
                  </span>
                </div>
                <h3 className="display mt-3 text-3xl sm:text-5xl">{p.name}</h3>
                <p className="mt-2 text-lg text-muted">{p.tagline}</p>
                <p className="mono mt-2 text-xs text-muted">
                  {p.role} · {p.period}
                </p>
              </div>

              <div className="w-full shrink-0 sm:w-56">
                <Sparkline points={p.trend} width={240} height={64} className="w-full" />
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8">
              <p className="max-w-[72ch] text-[1.05rem] leading-8">{p.summary}</p>

              <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {p.modules.map((m, i) => (
                  <div key={m.name} className="border-t border-rule pt-4">
                    <div className="flex items-baseline gap-2.5">
                      <span className="mono text-xs text-acid">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h4 className="font-medium">{m.name}</h4>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted">{m.detail}</p>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-md border border-rule bg-rule">
                {p.metrics.map((m) => (
                  <div key={m.label} className="bg-surface-2 p-4">
                    <p className="label">{m.label}</p>
                    <p className="display mt-1.5 text-xl text-acid">{m.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="mono rounded-full border border-rule px-2.5 py-1 text-xs text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-rule pt-6">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono inline-flex items-center gap-2 text-sm"
                >
                  <span className="wipe">View source</span>
                  <span aria-hidden="true" className="text-acid">↗</span>
                </a>
                {p.paper && (
                  <a
                    href={p.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono inline-flex items-center gap-2 text-sm"
                  >
                    <span className="wipe">Read the paper</span>
                    <span aria-hidden="true" className="text-coral">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
