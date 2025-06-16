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

COPY --from=builder /app/dist /app/frontend
COPY --from=builder /app/backend/dist ./backend

EXPOSE 5173 5174 8181
CMD ["sh", "-c", "node backend/server.js & vite preview --host 0.0.0.0 --port 5173"]