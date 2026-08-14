"use client";

import { useState } from "react";
import type { AdProposal } from "@/lib/types";
import { ScoreBadge } from "./ScoreBadge";
import { StatusPill } from "./StatusPill";

export function ProposalCard({
  proposal,
  onDecision,
}: {
  proposal: AdProposal;
  onDecision: (id: string, status: AdProposal["status"], budgetJour?: number) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [budgetJour, setBudgetJour] = useState(proposal.budgetJour);
  const isPending = proposal.status === "en_attente";
  const decided = proposal.status !== "en_attente";

  return (
    <div
      className={`rounded-xl2 bg-white p-4 shadow-card transition ${
        isPending
          ? "border-2 border-dashed border-gold-400/70"
          : "border border-ink-900/10"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">{proposal.postImage}</span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-gold-600">
              {isPending ? "Proposition IA" : "Proposition"} · {proposal.source} {proposal.postType}
            </p>
            <p className="text-[11px] text-ink-400">{proposal.detectedAt}</p>
          </div>
        </div>
        <ScoreBadge score={proposal.score} />
      </div>

      <p className="mt-3 text-sm leading-snug text-ink-800">{proposal.postExcerpt}</p>

      <div className="mt-3 grid grid-cols-2 gap-2 rounded-lg bg-cream-100 p-3 text-[12px]">
        <div>
          <p className="text-ink-400">Objectif</p>
          <p className="font-medium text-ink-800">{proposal.objectif}</p>
        </div>
        <div>
          <p className="text-ink-400">Durée</p>
          <p className="font-medium text-ink-800">{proposal.duree} jours</p>
        </div>
        <div className="col-span-2">
          <p className="text-ink-400">Audience ciblée</p>
          <p className="font-medium text-ink-800">{proposal.audience}</p>
        </div>
        <div>
          <p className="text-ink-400">Budget / jour</p>
          <p className="font-medium text-ink-800">
            {editing ? budgetJour : proposal.budgetJour} MAD
          </p>
        </div>
        <div>
          <p className="text-ink-400">Budget maximum</p>
          <p className="font-medium text-ink-800">
            {(editing ? budgetJour : proposal.budgetJour) * proposal.duree} MAD
          </p>
        </div>
      </div>

      <details className="mt-3 group">
        <summary className="cursor-pointer text-[12px] font-medium text-ink-600 marker:content-none">
          🧠 Pourquoi l&apos;IA propose cette campagne
        </summary>
        <p className="mt-1.5 text-[12px] leading-snug text-ink-500">
          {proposal.justification}
        </p>
      </details>

      {editing && (
        <div className="mt-4 rounded-lg border border-gold-400/50 bg-gold-50 p-3">
          <label className="text-[11px] font-semibold text-ink-700">
            Ajuster le budget quotidien
          </label>
          <div className="mt-2 flex items-center gap-3">
            <input
              type="range"
              min={30}
              max={300}
              step={10}
              value={budgetJour}
              onChange={(e) => setBudgetJour(Number(e.target.value))}
              className="h-2 w-full accent-gold-600"
            />
            <span className="w-16 shrink-0 text-right text-sm font-semibold text-ink-800">
              {budgetJour} MAD
            </span>
          </div>
        </div>
      )}

      {isPending ? (
        <div className="mt-4 grid grid-cols-3 gap-2">
          <button
            onClick={() => onDecision(proposal.id, "refusee")}
            className="rounded-lg border border-ink-900/15 py-2.5 text-[12.5px] font-semibold text-ink-500 active:scale-[0.97]"
          >
            Refuser
          </button>
          {editing ? (
            <button
              onClick={() => {
                onDecision(proposal.id, "modifiee", budgetJour);
                setEditing(false);
              }}
              className="rounded-lg border border-gold-500 bg-gold-50 py-2.5 text-[12.5px] font-semibold text-gold-700 active:scale-[0.97]"
            >
              Confirmer
            </button>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="rounded-lg border border-ink-900/15 py-2.5 text-[12.5px] font-semibold text-ink-600 active:scale-[0.97]"
            >
              Modifier
            </button>
          )}
          <button
            onClick={() => onDecision(proposal.id, "validee")}
            className="rounded-lg bg-ink-900 py-2.5 text-[12.5px] font-semibold text-gold-300 shadow-soft active:scale-[0.97]"
          >
            Valider
          </button>
        </div>
      ) : (
        <div className="mt-4 flex items-center justify-between">
          <StatusPill status={proposal.status} />
          <span className="text-[11px] text-ink-400">
            {decided ? "Décision enregistrée" : ""}
          </span>
        </div>
      )}
    </div>
  );
}
