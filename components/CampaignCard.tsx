import type { Campaign } from "@/lib/types";
import { StatusPill } from "./StatusPill";

export function CampaignCard({ campaign }: { campaign: Campaign }) {
  const pct = Math.round((campaign.depense / campaign.budgetMax) * 100);

  return (
    <div className="rounded-xl2 border border-ink-900/10 bg-white p-4 shadow-card">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[13px] font-semibold text-ink-900">{campaign.nom}</p>
          <p className="text-[11px] text-ink-400">Lancée le {campaign.dateDebut}</p>
        </div>
        <StatusPill status={campaign.statut} />
      </div>

      <div className="mt-3">
        <div className="flex items-center justify-between text-[11px] text-ink-500">
          <span>
            {campaign.depense.toLocaleString("fr-FR")} MAD dépensés
          </span>
          <span>{pct}% du budget</span>
        </div>
        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-cream-200">
          <div
            className={`h-full rounded-full ${
              campaign.statut === "terminee" ? "bg-ink-300" : "bg-ink-700"
            }`}
            style={{ width: `${Math.min(pct, 100)}%` }}
          />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-2 text-center">
        <div className="rounded-lg bg-cream-100 py-2">
          <p className="font-display text-sm font-semibold text-ink-900">
            {(campaign.impressions / 1000).toFixed(1)}k
          </p>
          <p className="text-[9.5px] text-ink-400">Impressions</p>
        </div>
        <div className="rounded-lg bg-cream-100 py-2">
          <p className="font-display text-sm font-semibold text-ink-900">
            {campaign.clics.toLocaleString("fr-FR")}
          </p>
          <p className="text-[9.5px] text-ink-400">Clics</p>
        </div>
        <div className="rounded-lg bg-cream-100 py-2">
          <p className="font-display text-sm font-semibold text-ink-900">
            {campaign.ventes}
          </p>
          <p className="text-[9.5px] text-ink-400">Ventes</p>
        </div>
        <div className="rounded-lg bg-gold-100 py-2">
          <p className="font-display text-sm font-semibold text-gold-700">
            {campaign.roas}x
          </p>
          <p className="text-[9.5px] text-ink-500">ROAS</p>
        </div>
      </div>
    </div>
  );
}
