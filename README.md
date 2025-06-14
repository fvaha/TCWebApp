# TerraCrypt Web App

[![vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)]()
[![react](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)]()
[![ts](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)]()
[![tailwind](https://img.shields.io/badge/TailwindCSS-3.x-38BDF8?logo=tailwindcss&logoColor=white)]()
[![three](https://img.shields.io/badge/3D-Three.js%20%2B%20R3F-000?logo=three.js)]()
[![turnstile](https://img.shields.io/badge/CAPTCHA-Turnstile-FF6A00)]()
[![formspree](https://img.shields.io/badge/Forms-Formspree-E46643)]()
[![i18n](https://img.shields.io/badge/i18n-8%20languages-green)]()
[![docker](https://img.shields.io/docker/image-size/vahanp/tcwebapp/latest?label=Docker%20image)]()
[![ci](https://github.com/YOUR_GH_USER/YOUR_REPO/actions/workflows/ci.yml/badge.svg)]()

**TerraCrypt** is a multilingual Vite + React front-end for our zero-trust encryption platform – featuring hardware-secured crypto, a 3-D hero scene, a Turnstile-protected Formspree contact form and a full Tailwind design system in **TerraCrypt gold**.

---

## 🛠 Tech Stack

| Layer / concern | What we use |
| --------------- | ----------- |
| Build tool      | **Vite** (ESBuild ⚡) |
| Framework       | React 18 • TypeScript 5 |
| Styling / UI    | Tailwind CSS 3 + custom gold component layer (`@layer components`) |
| 3-D graphics    | Three.js + @react-three/fiber |
| Forms           | Formspree **+** Cloudflare Turnstile |
| i18n            | Static locale maps – 8 languages (`en`, `de`, `fr`, `cr`, `ar`, `no`, `ru`, `sp`) |
| Animations      | Pure CSS keyframes (Framer Motion removed in Vite build) |
| Container       | Multi-stage **Dockerfile** → `node:18` builder → `nginx:alpine` |
| CI / CD         | GitHub Actions → Docker Hub / fly.io / *your host* |

---

## 📦 Getting Started

```bash
# 1 Clone
git clone https://github.com/YOUR_GH_USER/terracrypt-web.git
cd terracrypt-web

# 2 Install deps
npm install

# 3 Run dev server
npm run dev        # → http://localhost:5173
Production build
bash
Copy
Edit
npm run build      # tsc + vite build → dist/
npm run preview    # locally preview prod bundle
Docker
bash
Copy
Edit
docker pull vahanp/tcwebapp:latest
docker run -p 80:80 vahanp/tcwebapp:latest
Result: Nginx serves the pre-built dist/ bundle on port 80.

🌐 Internationalisation
Add a new language file in src/locales/xx.ts (same shape as en.ts) and register it in src/locales/index.ts. The language switcher (LanguageContext.tsx) autodetects the browser locale and falls back to English.
