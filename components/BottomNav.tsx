"use client";

import { TABS, type TabId } from "@/lib/nav";

export function BottomNav({
  active,
  onChange,
  pendingCount,
}: {
  active: TabId;
  onChange: (id: TabId) => void;
  pendingCount: number;
}) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-ink-900/10 bg-cream-50/95 backdrop-blur">
      <div className="mx-auto grid max-w-2xl grid-cols-5">
        {TABS.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`relative flex flex-col items-center gap-0.5 py-2.5 text-[10.5px] font-medium transition-colors ${
                isActive ? "text-ink-900" : "text-ink-400"
              }`}
            >
              <span className="relative text-base leading-none">
                {tab.icon}
                {tab.id === "proposals" && pendingCount > 0 && (
                  <span className="absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold-500 px-1 text-[9px] font-bold text-ink-900">
                    {pendingCount}
                  </span>
                )}
              </span>
              <span className="leading-none">{tab.label}</span>
              {isActive && (
                <span className="absolute -top-px h-0.5 w-8 rounded-full bg-gold-500" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
