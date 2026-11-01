# MEDAR STUDIO — Site Web & Portfolio Officiel

Portfolio officiel de **MEDAR STUDIO** (Graphic Design & Poster Art), conçu en noir profond (`#000000`), rouge carmin (`#E91F29`) et blanc pur, avec typographie *Syne*, carrousel 3D en rotation continue, visionneuse de projets interactive et formulaire de brief créatif sur-mesure.

---

## 📁 Architecture des Fichiers

```text
├── index.html            # Page principale du site
├── index.css             # Feuille de styles complète & responsive (Mobile / Tablette / Desktop)
├── index.js              # Logique interactive (Carrousel 3D, visionneuse, formulaire, newsletter)
├── public/
│   └── images/           # Affiches, visuels et icône officielle du studio
│       ├── iconemedar.webp
│       ├── MATCHDAY_HUSA_RAJA.webp
│       ├── launchloyalis.webp
│       ├── lineup.webp
│       ├── goal.webp
│       ├── halftime.webp
│       └── fulltime.webp
├── server.ts             # Serveur Express optionnel (API /api/contact et /api/newsletter)
├── package.json          # Dépendances et scripts de développement/build
├── vite.config.ts        # Configuration du bundler Vite
├── tsconfig.json         # Configuration TypeScript
└── dist/                 # Dossier de production généré par 'npm run build'
```

---

## 🚀 Options d'Hébergement

### Option 1 : Hébergement Statique (Le plus simple & gratuit)
*Recommandé pour : Vercel, Netlify, GitHub Pages, Cloudflare Pages, Hostinger, OVH, cPanel, Apache, Nginx.*

1. **Via Build (Optimisé & Minifié)** :
   - Lancez `npm run build`.
   - Téléversez simplement le contenu du dossier **`dist/`** chez votre hébergeur.

2. **Sans Build (Direct)** :
   - Déposez directement à la racine de votre hébergement :
     - `index.html`
     - `index.css`
     - `index.js`
     - Le dossier `images/` (copiez le contenu de `public/images/` vers `images/`).
   - Le formulaire de contact transmettra directement les briefs à **contact@medarstudio.com** via le service de messagerie intégré.

---

### Option 2 : Hébergement Full-Stack Node.js
*Recommandé pour : Render, Railway, Google Cloud Run, Heroku, VPS.*

1. Installez les dépendances :
   ```bash
   npm install
   ```
2. Lancez le serveur :
   ```bash
   npm start
   ```
Le serveur Express démarre sur le port configuré (`PORT` ou `3000`) et gère le routage ainsi que les endpoints `/api/contact` et `/api/newsletter`.

---

## 🛠️ Développement Local

Pour lancer le serveur de développement avec rechargement à chaud :
```bash
npm run dev
```
Ouvrez ensuite `http://localhost:3000` dans votre navigateur.

---

© 2026 **MEDAR STUDIO**. Tous droits réservés.
