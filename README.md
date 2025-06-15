# TerraCrypt Web App

[![vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?logo=vite&logoColor=white)]()
[![react](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=black)]()
[![ts](https://img.shields.io/badge/TypeScript-5.4.3-3178C6?logo=typescript&logoColor=white)]()
[![tailwind](https://img.shields.io/badge/TailwindCSS-3.4.1-38BDF8?logo=tailwindcss&logoColor=white)]()
[![three](https://img.shields.io/badge/3D-Three.js%20%2B%20R3F-000?logo=three.js)]()
[![turnstile](https://img.shields.io/badge/CAPTCHA-Turnstile-FF6A00)]()
[![formspree](https://img.shields.io/badge/Forms-Formspree-E46643)]()
[![i18n](https://img.shields.io/badge/i18n-8%20languages-green)]()
[![docker](https://img.shields.io/docker/image-size/vahanp/tcwebapp/latest?label=Docker%20image)]()
[![Build & Deploy](https://github.com/fvaha/TCWebApp/actions/workflows/deploy.yml/badge.svg)](https://github.com/fvaha/TCWebApp/actions/workflows/deploy.yml)

**TerraCrypt** is a multilingual Vite + React front-end for our zero-trust encryption platform – featuring hardware-secured crypto, a 3-D hero scene, a Turnstile-protected Formspree contact form, and a full Tailwind design system in **TerraCrypt gold**.

---

## 🛠 Tech Stack

| Layer / Concern | Tool / Framework                                                                  |
| --------------- | --------------------------------------------------------------------------------- |
| Build Tool      | Vite 5.2.0                                                                        |
| Framework       | React 18.2.0 + TypeScript 5.4.3                                                   |
| Styling / UI    | Tailwind CSS 3.4.1 + custom gold component layer                                  |
| 3D Graphics     | Three.js + @react-three/fiber                                                     |
| Forms           | Formspree + Cloudflare Turnstile                                                  |
| i18n            | Static locale maps – 8 languages (`en`, `de`, `fr`, `cr`, `ar`, `no`, `ru`, `sp`) |
| Animations      | Pure CSS keyframes (Framer Motion removed in Vite build)                          |
| Container       | Docker: `node:20-alpine` builder → `nginx:alpine` production                      |
| CI / CD         | GitHub Actions → Docker Hub / fly.io / _your host_                                |

---

## 📦 Getting Started

```bash
# 1. Clone
git clone https://github.com/YOUR_GH_USER/terracrypt-web.git
cd terracrypt-web

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev        # → http://localhost:5173
```

### 🏗 Production Build

```bash
npm run build      # TypeScript compile + Vite build → dist/
npm run preview    # Locally preview prod bundle
```

### 🐳 Docker

```bash
docker pull vahanp/tcwebapp:latest
docker run -p 80:80 vahanp/tcwebapp:latest
# Result: Nginx serves the pre-built dist/ bundle on port 80.
```

---

## 🌐 Internationalisation

To add a new language:

1. Create a file `src/locales/xx.ts` (copy the shape from `en.ts`).
2. Register it in `src/locales/index.ts`.
3. The language switcher (`LanguageContext.tsx`) autodetects the browser locale and falls back to English.

---

## 💬 Support

For support, reach out via the contact form on our site or submit an issue on GitHub.
