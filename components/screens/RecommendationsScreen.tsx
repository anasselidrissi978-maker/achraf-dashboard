import { recommendations } from "@/lib/mock-data";
import type { Recommendation } from "@/lib/types";

const ICONS: Record<Recommendation["type"], string> = {
  alerte: "⚠️",
  optimisation: "📈",
  info: "ℹ️",
};

const STYLES: Record<Recommendation["type"], string> = {
  alerte: "border-l-4 border-l-gold-500",
  optimisation: "border-l-4 border-l-ink-700",
  info: "border-l-4 border-l-ink-200",
};

export function RecommendationsScreen() {
  return (
    <div className="space-y-4 px-4 pb-6 pt-4">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">
          Recommandations de l&apos;IA
        </h2>
        <p className="text-[12px] text-ink-500">
          Des suggestions à étudier — aucune action n&apos;est automatique.
        </p>
      </div>

      <div className="space-y-3">
        {recommendations.map((r) => (
          <div
            key={r.id}
            className={`rounded-xl2 border border-ink-900/10 bg-white p-4 shadow-card ${STYLES[r.type]}`}
          >
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-400">
                {ICONS[r.type]} {r.campagne}
              </p>
              <span className="text-[11px] text-ink-300">{r.createdAt}</span>
            </div>
            <p className="mt-2 text-sm text-ink-800">{r.message}</p>
            <div className="mt-3 rounded-lg bg-cream-100 p-3">
              <p className="text-[11px] font-semibold text-ink-500">
                💡 Suggestion de l&apos;IA
              </p>
              <p className="mt-0.5 text-[12.5px] text-ink-700">{r.suggestion}</p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button className="rounded-lg border border-ink-900/15 py-2 text-[12px] font-semibold text-ink-500 active:scale-[0.97]">
                Ignorer
              </button>
              <button className="rounded-lg bg-ink-900 py-2 text-[12px] font-semibold text-gold-300 shadow-soft active:scale-[0.97]">
                Étudier &amp; décider
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
