import { history } from "@/lib/mock-data";
import type { HistoryEntry } from "@/lib/types";

const CONFIG: Record<HistoryEntry["action"], { label: string; cls: string; icon: string }> = {
  validee: { label: "Validée", cls: "text-ink-700 bg-ink-50 border-ink-600", icon: "✅" },
  refusee: { label: "Refusée", cls: "text-ink-400 bg-cream-100 border-ink-900/15", icon: "✖️" },
  modifiee: { label: "Modifiée puis validée", cls: "text-gold-700 bg-gold-50 border-gold-500", icon: "✏️" },
};

export function HistoryScreen() {
  return (
    <div className="space-y-4 px-4 pb-6 pt-4">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">
          Historique des validations
        </h2>
        <p className="text-[12px] text-ink-500">
          Journal de toutes les décisions humaines prises sur les propositions de l&apos;IA.
        </p>
      </div>

      <div className="relative space-y-4 pl-4">
        <div className="absolute bottom-2 left-[7px] top-2 w-px bg-ink-900/10" />
        {history.map((h) => {
          const c = CONFIG[h.action];
          return (
            <div key={h.id} className="relative">
              <span
                className={`absolute -left-4 top-1 h-3 w-3 rounded-full border-2 border-cream-50 ${
                  h.action === "refusee" ? "bg-ink-300" : "bg-gold-500"
                }`}
              />
              <div className="rounded-xl2 border border-ink-900/10 bg-white p-4 shadow-card">
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10.5px] font-semibold ${c.cls}`}>
                    {c.icon} {c.label}
                  </span>
                  <span className="text-[11px] text-ink-300">{h.date}</span>
                </div>
                <p className="mt-2 text-[13px] font-semibold text-ink-900">
                  {h.proposalTitle}
                </p>
                <p className="mt-0.5 text-[12px] text-ink-500">{h.detail}</p>
                <p className="mt-1.5 text-[11px] text-ink-400">
                  Décision par <span className="font-medium text-ink-600">{h.utilisateur}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
