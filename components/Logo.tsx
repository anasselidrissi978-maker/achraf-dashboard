export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/70 bg-ink-900">
        <span className="font-display text-sm font-semibold text-gold-300">
          إ
        </span>
        <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-gold-400" />
      </div>
      <div className="leading-tight">
        <p className="font-display text-[15px] font-semibold tracking-wide text-cream-50">
          Achraf Parfum
        </p>
        <p className="text-[10px] uppercase tracking-[0.18em] text-gold-300/80">
          Agent IA · Meta Ads
        </p>
      </div>
    </div>
  );
}
