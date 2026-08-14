const CONFIG = {
  en_attente: { label: "En attente de validation", cls: "border-gold-500 text-gold-700 bg-gold-50" },
  validee: { label: "Validée", cls: "border-ink-600 text-ink-700 bg-ink-50" },
  refusee: { label: "Refusée", cls: "border-ink-900/15 text-ink-400 bg-cream-100" },
  modifiee: { label: "Modifiée puis validée", cls: "border-ink-600 text-ink-700 bg-ink-50" },
  active: { label: "Active", cls: "border-ink-600 text-ink-700 bg-ink-50" },
  en_pause: { label: "En pause", cls: "border-gold-500 text-gold-700 bg-gold-50" },
  terminee: { label: "Terminée", cls: "border-ink-900/15 text-ink-400 bg-cream-100" },
} as const;

export function StatusPill({ status }: { status: keyof typeof CONFIG }) {
  const c = CONFIG[status];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10.5px] font-semibold ${c.cls}`}
    >
      {c.label}
    </span>
  );
}
