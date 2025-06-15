# Stage 1: Build React frontend + TypeScript
FROM node:20.13.1-alpine AS builder
WORKDIR /app

# Copy only what’s needed for install and build
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY public ./public
COPY src ./src
COPY backend ./backend

# Install all dependencies and build frontend + backend
RUN npm install --force
RUN npm run build

# Stage 2: Serve frontend with NGINX and backend with Node
FROM alpine:latest AS final
WORKDIR /app

# Install only runtime tools
RUN apk add --no-cache nginx nodejs npm

# Copy frontend build output to NGINX
COPY --from=builder /app/dist /var/www/html

# Copy NGINX config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy backend code and runtime files
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/backend ./backend

# Install only production dependencies (based on copied package.json)
RUN npm install --omit=dev && npm cache clean --force

# Expose NGINX (frontend) and backend (API) ports
EXPOSE 8181
EXPOSE 5174

# Start backend and NGINX together
CMD ["sh", "-c", "node dist/server.js & nginx -g 'daemon off;'"]
