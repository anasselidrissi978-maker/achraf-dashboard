export function StatCard({
  label,
  value,
  hint,
  accent = "ink",
}: {
  label: string;
  value: string;
  hint?: string;
  accent?: "ink" | "gold";
}) {
  return (
    <div className="rounded-xl2 border border-ink-900/10 bg-white/80 p-4 shadow-card">
      <p className="text-[11px] font-medium uppercase tracking-wide text-ink-500">
        {label}
      </p>
      <p
        className={`mt-1.5 font-display text-2xl font-semibold ${
          accent === "gold" ? "text-gold-600" : "text-ink-900"
        }`}
      >
        {value}
      </p>
      {hint && <p className="mt-1 text-[11px] text-ink-400">{hint}</p>}
    </div>
  );
}
