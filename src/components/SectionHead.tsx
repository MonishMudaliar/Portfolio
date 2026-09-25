export function SectionHead({
  index,
  title,
  accent = "var(--color-acid)",
}: {
  index: string;
  title: string;
  accent?: string;
}) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-b border-rule pb-4">
      <span className="mono text-sm" style={{ color: accent }}>
        {index}
      </span>
      <h2 className="display text-3xl sm:text-4xl">{title}</h2>
      <span className="ml-auto h-px flex-1 self-center bg-rule" />
    </div>
  );
}
