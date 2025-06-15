# Stage 1: Build React frontend & TypeScript backend
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

RUN npm install --force
RUN npm run build

# Final Image: NGINX + Node runtime
FROM node:20.13-alpine AS final
WORKDIR /app

RUN apk add --no-cache nginx

COPY --from=builder /app/dist /var/www/html
COPY nginx.conf /etc/nginx/nginx.conf

# THIS IS CORRECT FOR YOUR OUTPUT:
COPY --from=builder /app/dist/backend ./backend

EXPOSE 8181    
EXPOSE 5174   

CMD ["sh", "-c", "node backend/server.js & nginx -g 'daemon off;'"]
