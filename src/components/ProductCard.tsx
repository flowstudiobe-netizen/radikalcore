import Image from "next/image";

export type Variant = "core" | "mass" | "prime";

type Props = {
  name: string;
  variant: Variant;
  image: string;
  tagline: string;
  description: string;
  spec: { label: string; value: string }[];
  index: number;
};

const accent: Record<Variant, { bar: string; tag: string; label: string }> = {
  core: {
    bar: "hazard-tape-fine",
    tag: "bg-hazard text-ink",
    label: "MAX INTENSITY",
  },
  mass: {
    bar: "stripes-mono",
    tag: "bg-fg text-ink",
    label: "STAMINA BUILD",
  },
  prime: {
    bar: "bg-gradient-to-r from-chrome-2 via-chrome-1 to-chrome-2",
    tag: "bg-chrome-1 text-ink",
    label: "REFINED HIT",
  },
};

export function ProductCard({
  name,
  variant,
  image,
  tagline,
  description,
  spec,
  index,
}: Props) {
  const a = accent[variant];
  const num = String(index).padStart(2, "0");
  return (
    <article className="group relative flex flex-col bg-bg-elev border border-white/10 overflow-hidden transition-all hover:border-hazard/60">
      <div className={`h-2 w-full ${a.bar}`} aria-hidden />

      <header className="flex items-center justify-between px-5 pt-4 font-mono text-[11px] uppercase tracking-widest text-muted">
        <span>FORMULA / {num}</span>
        <span className={`px-2 py-0.5 ${a.tag} font-bold tracking-wider`}>
          {a.label}
        </span>
      </header>

      <div className="relative mx-4 mt-4 mb-2 overflow-hidden border border-white/10">
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background:
              "linear-gradient(160deg, #f4f4f4 0%, #cfcfcf 35%, #9a9a9a 60%, #d8d8d8 85%, #ededed 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          aria-hidden
          style={{
            background:
              "repeating-linear-gradient(90deg, rgba(0,0,0,0.04) 0 2px, transparent 2px 6px)",
          }}
        />
        <div className="absolute top-2 left-2 font-mono text-[9px] uppercase tracking-[0.2em] text-ink/70 z-10">
          ● REC / 30ML
        </div>
        <div className="absolute top-2 right-2 font-mono text-[9px] uppercase tracking-[0.2em] text-ink/70 z-10">
          BATCH 001
        </div>
        <div className="relative z-10 flex items-center justify-center h-72 sm:h-80">
          <Image
            src={image}
            alt={`${name} bottle`}
            width={400}
            height={400}
            className="object-contain max-h-full transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)]"
            priority={index === 1}
          />
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 hazard-tape-fine opacity-90" aria-hidden />
      </div>

      <div className="px-6 pb-6 pt-2 flex flex-col gap-3 border-t border-white/5">
        <div>
          <h3 className="font-display text-4xl tracking-tight leading-none">
            {name}
          </h3>
          <p className="text-hazard text-xs font-mono uppercase tracking-[0.2em] mt-1">
            {tagline}
          </p>
        </div>

        <p className="text-sm text-muted leading-relaxed">{description}</p>

        <dl className="grid grid-cols-3 gap-2 pt-3 border-t border-white/5 text-[10px] font-mono uppercase tracking-wider">
          {spec.map((s) => (
            <div key={s.label} className="flex flex-col">
              <dt className="text-muted">{s.label}</dt>
              <dd className="text-fg font-bold">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
