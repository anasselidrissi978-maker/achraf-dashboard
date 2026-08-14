# Achraf Parfum — Tableau de bord Agent IA (maquette)

Maquette fonctionnelle et navigable du dashboard de gestion de l'agent IA
pour Achraf Parfum. L'agent surveille les publications Instagram/Facebook,
propose des campagnes Meta Ads, et **n'engage jamais de dépense sans
validation humaine**.

Toutes les données affichées sont fictives (mock data en dur dans
`lib/mock-data.ts`). Aucune connexion Supabase ou Meta API réelle à ce stade.

## Écrans

1. **Aperçu** — budget mensuel autorisé vs dépensé, campagnes actives, ventes, ROAS.
2. **Propositions** — propositions IA en attente (score, audience, budget, justification) avec actions Refuser / Modifier / Valider.
3. **Campagnes** — campagnes en cours avec statut et performance.
4. **Conseils IA** — recommandations à étudier, jamais appliquées automatiquement.
5. **Historique** — journal des validations/refus humains.

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

## Déployer sur Vercel

```bash
npx vercel
```

ou via l'interface Vercel : importer ce dépôt, framework détecté
automatiquement (Next.js), aucune variable d'environnement requise.

## Structure du projet

```
app/                  Routes App Router (page.tsx, layout.tsx, globals.css)
components/           Composants réutilisables (cartes, nav, en-têtes)
components/screens/   Un composant par écran du dashboard
lib/mock-data.ts      Données factices (à remplacer plus tard par Supabase/Meta API)
lib/types.ts          Types TypeScript des entités (proposition, campagne, etc.)
```

Cette organisation prépare le branchement futur de Supabase (persistance)
et de l'API Meta Ads (données réelles), sans backend ni variables
d'environnement nécessaires pour cette étape de maquette.

## Identité visuelle

Palette reprise du site officiel achrafparfum.ma : vert profond (`#0b241c`)
et doré (`#c8a24d`) sur fond ivoire, typographie Playfair Display (titres)
+ Inter (texte), ambiance orientale-moderne haut de gamme.

Dans l'interface, les **propositions IA en attente** sont toujours entourées
d'un cadre doré en pointillés — pour bien les distinguer visuellement des
campagnes déjà validées par un humain.
