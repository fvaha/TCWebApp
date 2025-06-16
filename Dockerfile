FROM node:20.13.1-alpine AS builder
WORKDIR /app

COPY package*.json ./
COPY package-lock.json ./
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
RUN ls -lh /app/dist/assets && (cat /app/dist/assets/index-*.css | head -20 || echo "No CSS found!")

FROM node:20.13-alpine
WORKDIR /app

COPY --from=builder /app/backend/dist ./backend
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/package-lock.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist /app/frontend

EXPOSE 5174
CMD ["node", "backend/server.js"]
