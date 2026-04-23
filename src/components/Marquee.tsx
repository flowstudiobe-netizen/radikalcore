type Props = {
  items: string[];
  className?: string;
  separator?: string;
};

export function Marquee({ items, className = "", separator = "✦" }: Props) {
  const repeated = Array.from({ length: 2 }, (_, i) => i);
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="marquee-track inline-flex">
        {repeated.map((rep) => (
          <ul
            key={rep}
            className="inline-flex shrink-0 items-center gap-8 pr-8"
            aria-hidden={rep === 1}
          >
            {items.map((item, idx) => (
              <li
                key={`${rep}-${idx}`}
                className="font-display text-5xl tracking-[0.04em] inline-flex items-center gap-8"
              >
                <span>{item}</span>
                <span className="text-hazard text-3xl">{separator}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
