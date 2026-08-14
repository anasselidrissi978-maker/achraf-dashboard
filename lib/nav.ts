export const TABS = [
  { id: "overview", label: "Aperçu", icon: "📊" },
  { id: "proposals", label: "Propositions", icon: "✨" },
  { id: "campaigns", label: "Campagnes", icon: "📣" },
  { id: "recommendations", label: "Conseils IA", icon: "💡" },
  { id: "history", label: "Historique", icon: "🕘" },
] as const;

export type TabId = (typeof TABS)[number]["id"];
