export function ScoreBadge({ score }: { score: number }) {
  const level =
    score >= 80 ? "excellent" : score >= 60 ? "bon" : "modere";

  const styles: Record<string, string> = {
    excellent: "bg-ink-900 text-gold-300 border-gold-400/50",
    bon: "bg-gold-100 text-ink-800 border-gold-400/60",
    modere: "bg-cream-200 text-ink-600 border-ink-900/10",
  };

  const labels: Record<string, string> = {
    excellent: "Fort potentiel",
    bon: "Bon potentiel",
    modere: "Potentiel modéré",
  };

  return (
    <div
      className={`flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold ${styles[level]}`}
    >
      <span className="font-display text-sm">{score}/100</span>
      <span className="hidden xs:inline">{labels[level]}</span>
    </div>
  );
}
