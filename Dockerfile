# Stage 1: Build React frontend + TypeScript
FROM node:20.13.1-alpine AS builder
WORKDIR /app

# Copy only necessary files to install deps and build
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
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

# Copy backend build output and package files
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/backend/server.ts ./backend/server.ts

# Install only production dependencies
RUN npm install --omit=dev && npm cache clean --force

# Expose NGINX and backend ports
EXPOSE 8181
EXPOSE 5174

# Start both backend and frontend servers
CMD ["sh", "-c", "node dist/server.js & nginx -g 'daemon off;'"]
