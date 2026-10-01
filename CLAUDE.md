# crazee-burger

Application React (Vite) de commande de burgers, avec un mode client et un mode admin (gestion du menu).

## Commandes

- `yarn dev` — serveur de dev
- `yarn build` — build de production
- `yarn lint` — ESLint
- `yarn preview` — prévisualiser le build

Gestionnaire de paquets : **yarn** (présence de `yarn.lock`, ne pas utiliser `npm install`).

## Stack

- React 19 + React Router 7
- styled-components pour le style (fichiers `XyzStyled.jsx` à côté du composant)
- react-toastify pour les notifications
- react-icons

## Architecture

- `src/App.jsx` — routes principales (`/`, `/order`, fallback erreur)
- `src/components/pages/` — pages, organisées par route (`login`, `order`, `error`)
  - `order/Main/Admin/` — panneau d'administration du menu (ajout/édition de produits)
  - `order/Main/Menu/` — affichage du menu côté client
  - `order/Navbar/` — barre de navigation
- `src/components/reusable-ui/` — composants génériques réutilisables (Button, Card, TextInput, Tab, ToggleButton...)
- `src/context/OrderContext.jsx` — contexte React partagé : état admin/collapsed/tabs, menu, ajout/suppression de produit
- `src/fakeData/fakeMenu.jsx` — données de menu mockées (pas de backend)
- `src/theme/index.js` — thème (couleurs, styles partagés)
- `src/utils/` — fonctions utilitaires (maths, window)

## Conventions

- Composants stylés séparés du composant logique quand le fichier grossit (`Foo.jsx` + `FooStyled.jsx`)
- Formatage via Prettier (`.prettierrc` : quotes simples, points-virgules, largeur 80)
- Pas de TypeScript — projet en JS/JSX pur
