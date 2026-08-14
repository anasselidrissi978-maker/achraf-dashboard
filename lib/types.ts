export type ProposalStatus = "en_attente" | "validee" | "refusee" | "modifiee";

export interface AdProposal {
  id: string;
  score: number; // 0-100 potentiel publicitaire
  source: "Instagram" | "Facebook";
  postType: "Reel" | "Photo" | "Story";
  postExcerpt: string;
  postImage: string; // emoji or short label used as visual placeholder
  detectedAt: string;
  objectif: string;
  audience: string;
  budgetJour: number; // MAD
  duree: number; // jours
  budgetMax: number; // MAD
  justification: string;
  status: ProposalStatus;
}

export interface Campaign {
  id: string;
  nom: string;
  statut: "active" | "en_pause" | "terminee";
  depense: number;
  budgetMax: number;
  impressions: number;
  clics: number;
  ventes: number;
  roas: number;
  dateDebut: string;
}

export interface Recommendation {
  id: string;
  type: "alerte" | "optimisation" | "info";
  campagne: string;
  message: string;
  suggestion: string;
  createdAt: string;
}

export interface HistoryEntry {
  id: string;
  action: "validee" | "refusee" | "modifiee";
  proposalTitle: string;
  utilisateur: string;
  date: string;
  detail: string;
}
