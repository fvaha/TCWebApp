# --- Build Stage ---
  FROM node:20.13.1-alpine AS builder
  WORKDIR /app
  
  # Fast cache for npm install
  COPY package*.json ./
  COPY tsconfig*.json ./
  COPY vite.config.ts ./
  COPY tailwind.config.js ./
  COPY postcss.config.js ./
  COPY index.html ./
  COPY backend/ ./backend
  COPY src/ ./src
  COPY public/ ./public
  
  RUN npm install
  RUN npm run build
  
  # --- Frontend Stage ---
  FROM nginx:1.27-alpine AS frontend
  COPY --from=builder /app/dist /usr/share/nginx/html
  COPY nginx.conf /etc/nginx/conf.d/default.conf
  EXPOSE 80
  CMD ["nginx", "-g", "daemon off;"]
  
  # --- Backend Stage ---
  FROM node:20.13.1-alpine AS backend
  WORKDIR /app
  COPY --from=builder /app/backend/dist ./dist
  COPY --from=builder /app/package*.json ./
  RUN npm install --omit=dev && npm cache clean --force
  ENV NODE_ENV=production
  EXPOSE 5174
  CMD ["node", "dist/server.js"]
  