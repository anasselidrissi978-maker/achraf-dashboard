"use client";

import { useState } from "react";
import { BrandHeader } from "@/components/BrandHeader";
import { BottomNav } from "@/components/BottomNav";
import { ControlBanner } from "@/components/ControlBanner";
import { OverviewScreen } from "@/components/screens/OverviewScreen";
import { ProposalsScreen } from "@/components/screens/ProposalsScreen";
import { CampaignsScreen } from "@/components/screens/CampaignsScreen";
import { RecommendationsScreen } from "@/components/screens/RecommendationsScreen";
import { HistoryScreen } from "@/components/screens/HistoryScreen";
import { proposals } from "@/lib/mock-data";
import type { TabId } from "@/lib/nav";

export default function Home() {
  const [tab, setTab] = useState<TabId>("overview");
  const pendingCount = proposals.filter((p) => p.status === "en_attente").length;

  return (
    <div className="mx-auto min-h-screen max-w-2xl bg-cream-50 pb-24">
      <BrandHeader />
      <ControlBanner />

      {tab === "overview" && <OverviewScreen />}
      {tab === "proposals" && <ProposalsScreen />}
      {tab === "campaigns" && <CampaignsScreen />}
      {tab === "recommendations" && <RecommendationsScreen />}
      {tab === "history" && <HistoryScreen />}

      <BottomNav active={tab} onChange={setTab} pendingCount={pendingCount} />
    </div>
  );
}
