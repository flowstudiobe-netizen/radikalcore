type Props = {
  index: string;
  title: string;
  className?: string;
};

export function SectionLabel({ index, title, className = "" }: Props) {
  return (
    <div className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] ${className}`}>
      <span className="text-hazard">{index}</span>
      <span className="h-px flex-1 max-w-12 bg-white/20" />
      <span className="text-muted">{title}</span>
    </div>
  );
}
