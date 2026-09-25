import { profile } from "@/lib/data";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "/in/monish-mudaliar", href: profile.linkedin },
  { label: "GitHub", value: "@MonishMudaliar", href: profile.github },
];

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <p className="label">Contact</p>

        <h2 className="display mt-5 max-w-[14ch] text-[clamp(2.25rem,8vw,5rem)]">
          Let&apos;s build something with the data.
        </h2>

        <p className="mt-7 max-w-[52ch] text-lg leading-8 text-muted">
          Open to data analyst, business analyst, and data science roles — and
          always up for a conversation about forecasting, RAG systems, or
          analytics that changes a decision.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-rule bg-rule sm:grid-cols-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group bg-surface p-6 transition-colors hover:bg-surface-2"
            >
              <p className="label">{l.label}</p>
              <p className="mono mt-2.5 flex items-center gap-2 text-sm break-all">
                <span className="wipe">{l.value}</span>
                <span className="shrink-0 text-acid" aria-hidden="true">↗</span>
              </p>
            </a>
          ))}
        </div>

        <footer className="mono mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-rule pt-7 text-xs text-muted">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.location}</span>
        </footer>
      </div>
    </section>
  );
}
