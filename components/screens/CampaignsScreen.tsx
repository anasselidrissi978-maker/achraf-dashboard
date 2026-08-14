import { campaigns } from "@/lib/mock-data";
import { CampaignCard } from "@/components/CampaignCard";

export function CampaignsScreen() {
  return (
    <div className="space-y-4 px-4 pb-6 pt-4">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">
          Campagnes
        </h2>
        <p className="text-[12px] text-ink-500">
          Toutes les campagnes validées par vous, en cours ou terminées.
        </p>
      </div>
      <div className="space-y-3">
        {campaigns.map((c) => (
          <CampaignCard key={c.id} campaign={c} />
        ))}
      </div>
    </div>
  );
}
