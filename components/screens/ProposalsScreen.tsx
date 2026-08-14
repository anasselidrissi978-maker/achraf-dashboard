"use client";

import { useState } from "react";
import { proposals as initialProposals } from "@/lib/mock-data";
import type { AdProposal } from "@/lib/types";
import { ProposalCard } from "@/components/ProposalCard";

export function ProposalsScreen() {
  const [items, setItems] = useState<AdProposal[]>(initialProposals);
  const [toast, setToast] = useState<string | null>(null);

  function handleDecision(id: string, status: AdProposal["status"], budgetJour?: number) {
    setItems((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, status, budgetJour: budgetJour ?? p.budgetJour }
          : p
      )
    );
    const messages: Record<string, string> = {
      validee: "Campagne validée — elle sera lancée avec le budget approuvé.",
      refusee: "Proposition refusée. L'IA n'ira pas plus loin.",
      modifiee: "Modification confirmée et campagne validée.",
    };
    setToast(messages[status] ?? null);
    setTimeout(() => setToast(null), 3200);
  }

  const pending = items.filter((p) => p.status === "en_attente");
  const decided = items.filter((p) => p.status !== "en_attente");

  return (
    <div className="space-y-4 px-4 pb-6 pt-4">
      {toast && (
        <div className="fixed left-1/2 top-3 z-40 w-[92%] max-w-md -translate-x-1/2 rounded-xl border border-gold-400/60 bg-ink-900 px-4 py-3 text-center text-[12.5px] font-medium text-cream-50 shadow-soft">
          {toast}
        </div>
      )}

      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">
          Propositions en attente
        </h2>
        <p className="text-[12px] text-ink-500">
          Chaque campagne détectée par l&apos;IA attend votre décision — rien n&apos;est publié sans vous.
        </p>
      </div>

      {pending.length === 0 ? (
        <div className="rounded-xl2 border border-ink-900/10 bg-white p-6 text-center text-sm text-ink-400">
          Aucune proposition en attente pour le moment.
        </div>
      ) : (
        <div className="space-y-4">
          {pending.map((p) => (
            <ProposalCard key={p.id} proposal={p} onDecision={handleDecision} />
          ))}
        </div>
      )}

      {decided.length > 0 && (
        <div className="pt-2">
          <h3 className="mb-2 text-[12px] font-semibold uppercase tracking-wide text-ink-400">
            Déjà traitées
          </h3>
          <div className="space-y-4">
            {decided.map((p) => (
              <ProposalCard key={p.id} proposal={p} onDecision={handleDecision} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
