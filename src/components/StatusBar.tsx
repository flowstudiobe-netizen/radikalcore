export function StatusBar() {
  return (
    <div className="w-full border-b border-white/10 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
        <div className="flex items-center gap-3">
          <span className="size-1.5 rounded-full bg-hazard pulse-warning" aria-hidden />
          <span className="text-fg">REISSUE / 2026</span>
          <span className="hidden sm:inline">— SYSTEM ONLINE</span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span>BATCH 001</span>
          <span>EU / WORLDWIDE</span>
          <span className="text-hazard">IN STOCK</span>
        </div>
        <div className="flex items-center gap-2">
          <span>RADIKAL</span>
          <span className="text-hazard">●</span>
          <span>CORE</span>
        </div>
      </div>
    </div>
  );
}
