# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

-[poke Api](https://pokeapi.co/api/v2/pokemon?limit=8)


Voici une **palette de couleurs complète et moderne** pour votre projet **Pokédex** en React + Tailwind, incluant les couleurs pour :

1. 🔥 **Types de Pokémon**
2. 🧱 **Fond, composants, cartes, boutons**
3. 🎨 **Texte et icônes**
4. 🌈 **États interactifs (hover, active, etc.)**
5. 🪄 **Dégradé facultatif**

---

## 1. 🟩 Couleurs par type de Pokémon (badges)

Ces couleurs peuvent être utilisées comme `bg-...` et `text-...` :

| Type     | Couleur suggérée | Tailwind équivalent                   |
| -------- | ---------------- | ------------------------------------- |
| Grass    | `#8BBE8A`        | `bg-green-300` / `text-green-800`     |
| Poison   | `#A552CC`        | `bg-purple-300` / `text-purple-900`   |
| Fire     | `#FFA756`        | `bg-orange-300` / `text-orange-800`   |
| Water    | `#58ABF6`        | `bg-blue-300` / `text-blue-800`       |
| Bug      | `#8BD674`        | `bg-lime-300` / `text-lime-900`       |
| Flying   | `#748FC9`        | `bg-indigo-300` / `text-indigo-800`   |
| Ice      | `#91D8DF`        | `bg-cyan-200` / `text-cyan-900`       |
| Psychic  | `#FF6568`        | `bg-pink-300` / `text-pink-800`       |
| Electric | `#F2CB55`        | `bg-yellow-300` / `text-yellow-900`   |
| Ground   | `#F78551`        | `bg-amber-300` / `text-amber-800`     |
| Rock     | `#D4C294`        | `bg-yellow-200` / `text-yellow-900`   |
| Normal   | `#B5B9C4`        | `bg-gray-300` / `text-gray-700`       |
| Dark     | `#6F6E78`        | `bg-neutral-500` / `text-neutral-100` |
| Fairy    | `#EBA8C3`        | `bg-pink-200` / `text-pink-900`       |
| Dragon   | `#7383B9`        | `bg-indigo-400` / `text-indigo-900`   |
| Steel    | `#417D9A`        | `bg-sky-600` / `text-white`           |
| Ghost    | `#8571BE`        | `bg-violet-400` / `text-violet-900`   |
| Fighting | `#EB4971`        | `bg-rose-400` / `text-rose-900`       |

---

## 2. 🧱 Fond et composants

| Élément               | Couleur   | Tailwind class           |
| --------------------- | --------- | ------------------------ |
| Fond principal        | `#F5F7FA` | `bg-gray-100`            |
| Cartes Pokémon        | `#FFFFFF` | `bg-white` + `shadow-lg` |
| Header / Navbar       | `#FFFFFF` | `bg-white shadow-md`     |
| Recherche / Filtres   | `#E5E7EB` | `bg-gray-200`            |
| Bordure cartes        | `#E0E0E0` | `border-gray-200`        |
| Évolutions fond hover | `#F3F4F6` | `hover:bg-gray-200`      |

---

## 3. 🎨 Texte et typographie

| Élément          | Couleur   | Tailwind class  |
| ---------------- | --------- | --------------- |
| Titre principal  | `#111827` | `text-gray-900` |
| Sous-titres      | `#374151` | `text-gray-700` |
| Texte secondaire | `#6B7280` | `text-gray-500` |
| ID Pokémon       | `#9CA3AF` | `text-gray-400` |

---

## 4. 🌟 États interactifs

| État         | Couleur                                                 | Tailwind class |
| ------------ | ------------------------------------------------------- | -------------- |
| Hover carte  | `scale-105`, `shadow-xl`, `transition-all`              |                |
| Badge hover  | `brightness-110` / `opacity-90`                         |                |
| Bouton actif | `ring-2 ring-offset-2 ring-indigo-400`                  |                |
| Champ focus  | `focus:outline-none focus:ring-2 focus:ring-indigo-400` |                |

---

## 5. 🌈 Dégradés facultatifs

| Élément      | Dégradé                             | Tailwind suggestion                                  |
| ------------ | ----------------------------------- | ---------------------------------------------------- |
| Fond du site | `from-red-100 via-pink-50 to-white` | `bg-gradient-to-b from-red-100 via-pink-50 to-white` |
| Détails      | `from-green-100 to-green-50`        | `bg-gradient-to-r`                                   |

