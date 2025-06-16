FROM node:20.13.1-alpine AS builder
WORKDIR /app

# Copy ALL necessary files for build
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY backend/ ./backend
COPY src/ ./src
COPY public/ ./public
COPY index.html ./

# Install and build
RUN npm install && npm run build

FROM node:20.13-alpine
WORKDIR /app

# Install nginx
RUN apk add --no-cache nginx

# Copy production files
COPY --from=builder /app/dist /var/www/html
COPY --from=builder /app/backend/dist ./backend
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 5174
CMD ["sh", "-c", "node backend/server.js & nginx -g 'daemon off;'"]