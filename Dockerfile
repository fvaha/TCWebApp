# Stage 1: Build React frontend + TypeScript
FROM node:20.13.1-alpine AS builder
WORKDIR /app

# Copy package and lock files first for better caching
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./

# Copy .env for Vite build-time variables
COPY .env .env

# Copy rest of the code
COPY ./index.html ./index.html
COPY public ./public
COPY src ./src
COPY backend ./backend

# Install all dependencies and build
RUN npm install --force
RUN npm run build

# Stage 2: Final image with backend and NGINX for frontend
FROM alpine:latest AS final
WORKDIR /app

# Install only necessary system tools
RUN apk add --no-cache nginx nodejs npm

# Copy built frontend to NGINX path
COPY --from=builder /app/dist /var/www/html

# Copy NGINX config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy backend and dependencies
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/backend ./backend

# Install only production dependencies (if you have prod-only deps)
RUN npm install --omit=dev && npm cache clean --force

# Expose frontend (NGINX) and backend (Hono) ports
EXPOSE 8181
EXPOSE 5174

# Start both backend and frontend servers
CMD ["sh", "-c", "node backend/server.js & nginx -g 'daemon off;'"]
