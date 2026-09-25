import { marquee, profile } from "@/lib/data";
import { Background } from "./Background";

export function Hero() {
  return (
    <section id="top" className="relative overflow-x-clip">
      <div className="absolute inset-0 -z-10 grid-field" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-6 pt-20 pb-12 sm:px-10 sm:pt-28">
        <div className="rise flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-2 rounded-full border border-acid/30 bg-acid/10 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-acid" />
            <span className="mono text-xs text-acid">Open to opportunities</span>
          </span>
          <span className="label">{profile.location}</span>
        </div>

        <h1
          className="rise display mt-7 text-[clamp(2.75rem,11vw,7.5rem)]"
          style={{ animationDelay: "60ms" }}
        >
          Monish
          <br />
          <span className="text-muted">Mudaliar</span>
        </h1>

        <div
          className="rise mt-6 flex flex-wrap items-center gap-x-3 gap-y-2"
          style={{ animationDelay: "120ms" }}
        >
          <span className="display text-xl sm:text-2xl">{profile.role}</span>
          <span className="h-4 w-px bg-rule" />
          <span className="display text-xl text-acid sm:text-2xl">{profile.roleAlt}</span>
        </div>

        <p
          className="rise mt-8 max-w-[58ch] text-lg leading-8 text-muted sm:text-xl"
          style={{ animationDelay: "180ms" }}
        >
          {profile.statement}
        </p>

        <div
          className="rise mt-10 flex flex-wrap gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#work"
            className="rounded-full bg-acid px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            See the work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-rule px-5 py-2.5 text-sm transition-colors hover:border-fg"
          >
            Get in touch
          </a>
        </div>

        <Background />
      </div>

      <div className="marquee-mask overflow-hidden border-y border-rule py-3.5">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
              {marquee.map((m) => (
                <span key={m} className="mono flex items-center px-5 text-sm text-muted">
                  {m}
                  <span className="ml-5 text-acid">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
