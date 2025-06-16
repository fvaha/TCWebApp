FROM node:20.13.1-alpine AS builder
WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY backend/ ./backend
COPY src/ ./src
COPY public/ ./public
COPY index.html ./

RUN npm install && npm run build

FROM node:20.13-alpine
WORKDIR /app

COPY --from=builder /app/backend/dist ./backend
COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist /app/frontend

EXPOSE 5174
CMD ["node", "backend/server.js"]