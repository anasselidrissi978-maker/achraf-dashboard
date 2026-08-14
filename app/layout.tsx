import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Achraf Parfum — Tableau de bord Agent IA",
  description:
    "Tableau de bord de gestion des campagnes publicitaires Meta Ads pilotées par l'agent IA d'Achraf Parfum. L'IA propose, vous décidez.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0b241c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-sans text-ink-900 antialiased">
        {children}
      </body>
    </html>
  );
}
