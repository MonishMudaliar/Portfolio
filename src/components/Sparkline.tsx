type Props = {
  points: number[];
  width?: number;
  height?: number;
  className?: string;
  color?: string;
  animate?: boolean;
  fill?: boolean;
};

export function Sparkline({
  points,
  width = 240,
  height = 60,
  className,
  color = "var(--color-acid)",
  animate = true,
  fill = true,
}: Props) {
  if (points.length < 2) return null;

  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const stepX = width / (points.length - 1);

  const coords = points.map((p, i) => {
    const x = i * stepX;
    const y = height - ((p - min) / range) * (height - 8) - 4;
    return [x, y] as const;
  });

  const line = coords
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");
  const area = `${line} L${width},${height} L0,${height} Z`;
  const [lx, ly] = coords[coords.length - 1];
  const id = `g${points.join("")}`.slice(0, 18);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.22" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {fill && <path d={area} fill={`url(#${id})`} />}
      <path
        d={line}
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animate ? "trend-draw" : undefined}
      />
      <circle cx={lx} cy={ly} r={3.5} fill={color} />
    </svg>
  );
}
