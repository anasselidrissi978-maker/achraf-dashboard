import type { AdProposal, Campaign, Recommendation, HistoryEntry } from "./types";

export const budgetMensuel = {
  autorise: 8000,
  depense: 4120,
  devise: "MAD",
};

export const statsGlobales = {
  campagnesActives: 3,
  ventesAttribuees: 41,
  roasMoyen: 3.8,
};

export const proposals: AdProposal[] = [
  {
    id: "prop-1",
    score: 87,
    source: "Instagram",
    postType: "Reel",
    postExcerpt:
      "Nouveau Reel : \"Oud Al Malik — le raffinement à l'état pur\" — 3 200 vues en 6h, fort engagement.",
    postImage: "🎬",
    detectedAt: "Aujourd'hui, 09:14",
    objectif: "Ventes sur WhatsApp",
    audience: "Hommes & femmes, 22–45 ans, Maroc, intérêt parfums de luxe",
    budgetJour: 120,
    duree: 7,
    budgetMax: 840,
    justification:
      "Ce Reel dépasse de 4x l'engagement moyen des 30 derniers jours et met en avant un produit à forte marge. Le format vidéo courte performe historiquement bien en conversion WhatsApp pour cette audience.",
    status: "en_attente",
  },
  {
    id: "prop-2",
    score: 74,
    source: "Facebook",
    postType: "Photo",
    postExcerpt:
      "Photo du coffret \"Collection Niche — Édition Ambre\" publiée hier soir, bonne réaction en commentaires.",
    postImage: "🖼️",
    detectedAt: "Hier, 21:40",
    objectif: "Notoriété + trafic profil",
    audience: "Femmes, 25–50 ans, grandes villes marocaines",
    budgetJour: 80,
    duree: 5,
    budgetMax: 400,
    justification:
      "Les coffrets cadeaux génèrent historiquement un bon taux de partage en période de fêtes. Score légèrement plus bas car le post est récent, peu de données de performance organique encore disponibles.",
    status: "en_attente",
  },
  {
    id: "prop-3",
    score: 63,
    source: "Instagram",
    postType: "Story",
    postExcerpt: "Story \"Behind the scenes\" atelier de mise en flacon.",
    postImage: "📷",
    detectedAt: "Il y a 2 jours",
    objectif: "Notoriété de marque",
    audience: "Abonnés + audience similaire (Lookalike 3%)",
    budgetJour: 50,
    duree: 3,
    budgetMax: 150,
    justification:
      "Contenu \"coulisses\" apprécié pour la confiance de marque mais génère historiquement moins de ventes directes. Proposé en petit budget test.",
    status: "modifiee",
  },
];

export const campaigns: Campaign[] = [
  {
    id: "camp-1",
    nom: "Oud Al Malik — Reel Ventes",
    statut: "active",
    depense: 1860,
    budgetMax: 2400,
    impressions: 128500,
    clics: 3120,
    ventes: 24,
    roas: 4.6,
    dateDebut: "2 août 2026",
  },
  {
    id: "camp-2",
    nom: "Collection Niche — Notoriété",
    statut: "active",
    depense: 940,
    budgetMax: 1500,
    impressions: 64200,
    clics: 980,
    ventes: 9,
    roas: 2.1,
    dateDebut: "6 août 2026",
  },
  {
    id: "camp-3",
    nom: "Dupes Été — Trafic WhatsApp",
    statut: "active",
    depense: 1320,
    budgetMax: 1320,
    impressions: 51300,
    clics: 1440,
    ventes: 8,
    roas: 3.4,
    dateDebut: "28 juillet 2026",
  },
  {
    id: "camp-4",
    nom: "Coffrets Ramadan — Ventes",
    statut: "terminee",
    depense: 2600,
    budgetMax: 2600,
    impressions: 210400,
    clics: 5200,
    ventes: 61,
    roas: 5.2,
    dateDebut: "10 mars 2026",
  },
];

export const recommendations: Recommendation[] = [
  {
    id: "rec-1",
    type: "alerte",
    campagne: "Collection Niche — Notoriété",
    message:
      "Le coût par vente de cette campagne (104 MAD) est nettement supérieur à votre moyenne habituelle (58 MAD).",
    suggestion:
      "Je recommande de couper cette campagne ou de réduire son budget de moitié.",
    createdAt: "Il y a 3 heures",
  },
  {
    id: "rec-2",
    type: "optimisation",
    campagne: "Oud Al Malik — Reel Ventes",
    message:
      "Cette campagne convertit très bien (ROAS 4.6) et n'a pas encore atteint son budget maximum.",
    suggestion:
      "Je recommande d'augmenter le budget quotidien de 120 à 180 MAD pour les 3 prochains jours.",
    createdAt: "Il y a 5 heures",
  },
  {
    id: "rec-3",
    type: "info",
    campagne: "Dupes Été — Trafic WhatsApp",
    message: "Cette campagne a atteint son budget maximum autorisé.",
    suggestion:
      "Aucune action requise pour l'instant, la campagne s'arrêtera automatiquement.",
    createdAt: "Hier",
  },
];

export const history: HistoryEntry[] = [
  {
    id: "hist-1",
    action: "validee",
    proposalTitle: "Oud Al Malik — Reel Ventes",
    utilisateur: "Achraf",
    date: "2 août 2026, 10:32",
    detail: "Validée telle que proposée par l'IA — budget 840 MAD / 7 jours.",
  },
  {
    id: "hist-2",
    action: "modifiee",
    proposalTitle: "Story coulisses atelier",
    utilisateur: "Achraf",
    date: "31 juillet 2026, 18:05",
    detail: "Budget réduit de 300 MAD à 150 MAD avant validation.",
  },
  {
    id: "hist-3",
    action: "refusee",
    proposalTitle: "Photo produit générique",
    utilisateur: "Achraf",
    date: "29 juillet 2026, 08:47",
    detail: "Refusée — visuel jugé pas assez qualitatif pour une pub payante.",
  },
  {
    id: "hist-4",
    action: "validee",
    proposalTitle: "Coffrets Ramadan — Ventes",
    utilisateur: "Achraf",
    date: "10 mars 2026, 09:12",
    detail: "Validée telle que proposée par l'IA — budget 2600 MAD / 14 jours.",
  },
];
