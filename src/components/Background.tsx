import { certifications, education, leadership } from "@/lib/data";
import { SectionHead } from "./SectionHead";

export function Background() {
  return (
    <div id="background" className="rise mt-16 scroll-mt-24" style={{ animationDelay: "300ms" }}>
      <SectionHead index="01" title="Background" />

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="label mb-5">Education</h3>
          {education.map((e) => (
            <div key={e.degree} className="rounded-lg border border-rule bg-surface p-6">
              <h4 className="display text-xl leading-snug">{e.degree}</h4>
              <p className="mt-2 text-muted">{e.school}</p>
              <div className="mono mt-4 flex items-center gap-3 border-t border-rule pt-4 text-xs">
                <span className="text-muted">{e.period}</span>
                <span className="text-rule">·</span>
                <span className="text-acid">{e.detail}</span>
              </div>
            </div>
          ))}

          <h3 className="label mt-10 mb-5">Leadership</h3>
          <div className="flex flex-col gap-3">
            {leadership.map((l) => (
              <div key={l.role} className="rounded-lg border border-rule bg-surface p-5">
                <p className="font-medium">{l.role}</p>
                <p className="mono mt-1 text-xs text-acid">{l.org}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{l.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="label mb-5">Certifications</h3>
          <ul className="overflow-hidden rounded-lg border border-rule">
            {certifications.map((c) => {
              const inProgress = c.status.toLowerCase().includes("progress");
              return (
                <li
                  key={c.name}
                  className="flex flex-wrap items-center justify-between gap-3 border-b border-rule bg-surface p-5 last:border-b-0"
                >
                  <div className="min-w-0">
                    <p className="font-medium">{c.name}</p>
                    <p className="mono mt-1 text-xs text-muted">{c.issuer}</p>
                  </div>
                  <span
                    className="mono shrink-0 rounded-full border px-2.5 py-0.5 text-[0.65rem]"
                    style={{
                      color: inProgress ? "var(--color-azure)" : "var(--color-acid)",
                      borderColor: inProgress
                        ? "color-mix(in srgb, var(--color-azure) 40%, transparent)"
                        : "color-mix(in srgb, var(--color-acid) 40%, transparent)",
                    }}
                  >
                    {c.status}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
