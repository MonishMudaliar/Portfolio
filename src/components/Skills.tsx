import { skillGroups } from "@/lib/data";
import { SectionHead } from "./SectionHead";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <SectionHead index="05" title="Toolkit" accent="var(--color-azure)" />

      <div className="grid gap-px overflow-hidden rounded-lg border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <div key={g.label} className="bg-surface p-6">
            <h3 className="label mb-4">{g.label}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li
                  key={s}
                  className="rounded-md border border-rule bg-surface-2 px-2.5 py-1 text-sm text-muted transition-colors hover:border-azure/40 hover:text-fg"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
