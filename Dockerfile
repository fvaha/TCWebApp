FROM node:20.13.1-alpine AS builder
WORKDIR /app

COPY .env ./
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY index.html ./
COPY public ./public
COPY src ./src
COPY backend ./backend

RUN echo "=== Checking /app/backend contents ===" && ls -l /app/backend
RUN npm install --force
RUN npm run build
RUN echo "=== Checking /app/dist/backend contents after build ===" && ls -l /app/dist/backend || echo "No backend output"

FROM node:20.13-alpine AS final
WORKDIR /app

RUN apk add --no-cache nginx

COPY --from=builder /app/dist /var/www/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/backend ./backend

EXPOSE 8181
EXPOSE 5174

CMD ["sh", "-c", "node backend/server.js & nginx -g 'daemon off;'"]
