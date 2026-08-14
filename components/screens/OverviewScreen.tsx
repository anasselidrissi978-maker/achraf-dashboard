import { budgetMensuel, statsGlobales, proposals } from "@/lib/mock-data";
import { StatCard } from "@/components/StatCard";

export function OverviewScreen() {
  const pct = Math.round((budgetMensuel.depense / budgetMensuel.autorise) * 100);
  const pending = proposals.filter((p) => p.status === "en_attente").length;

  return (
    <div className="space-y-4 px-4 pb-6 pt-4">
      <div className="rounded-xl2 border border-ink-900/10 bg-white p-5 shadow-card">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-500">
            Budget mensuel autorisé
          </p>
          <span className="font-display text-sm font-semibold text-gold-600">
            {pct}% utilisé
          </span>
        </div>
        <p className="mt-1.5 font-display text-3xl font-semibold text-ink-900">
          {budgetMensuel.depense.toLocaleString("fr-FR")}{" "}
          <span className="text-lg font-normal text-ink-400">
            / {budgetMensuel.autorise.toLocaleString("fr-FR")} {budgetMensuel.devise}
          </span>
        </p>
        <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-cream-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-ink-700 to-gold-500"
            style={{ width: `${Math.min(pct, 100)}%` }}
          />
        </div>
        <p className="mt-2 text-[11px] text-ink-400">
          Ce budget est fixé par vous. L&apos;IA ne peut jamais le dépasser ni le modifier.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <StatCard label="Campagnes actives" value={String(statsGlobales.campagnesActives)} />
        <StatCard
          label="Ventes attribuées"
          value={String(statsGlobales.ventesAttribuees)}
          hint="30 derniers jours"
        />
        <StatCard
          label="ROAS moyen"
          value={`${statsGlobales.roasMoyen}x`}
          hint="Retour sur dépense pub"
          accent="gold"
        />
        <StatCard
          label="Propositions en attente"
          value={String(pending)}
          hint="Nécessitent votre décision"
          accent="gold"
        />
      </div>

      <div className="rounded-xl2 border border-dashed border-gold-400/70 bg-gold-50/60 p-4">
        <p className="text-[13px] font-semibold text-ink-800">
          ✨ {pending} nouvelle{pending > 1 ? "s" : ""} proposition{pending > 1 ? "s" : ""} de l&apos;IA
        </p>
        <p className="mt-1 text-[12px] text-ink-500">
          Consultez l&apos;onglet « Propositions » pour valider, modifier ou refuser.
        </p>
      </div>
    </div>
  );
}
