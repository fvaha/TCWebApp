# ------------ Stage 1: Build React frontend & backend TypeScript ------------
  FROM node:20.13.1-alpine AS builder
  WORKDIR /app
  
  # Copy env for Vite build-time variables
  COPY .env .env
  
  # Copy package configs early for install caching
  COPY package*.json ./
  COPY tsconfig*.json ./
  COPY vite.config.ts ./
  
  # Copy full source (frontend + backend)
  COPY public ./public
  COPY src ./src
  COPY backend ./backend
  
  # Install deps and build
  RUN npm install --force
  RUN npm run build
  
  # ------------ Stage 2: Final image with backend + NGINX frontend ------------
  FROM alpine:latest AS final
  WORKDIR /app
  
  # Install required packages
  RUN apk add --no-cache nginx nodejs npm
  
  # Copy compiled frontend to nginx web root
  COPY --from=builder /app/dist /var/www/html
  
  # Copy nginx config
  COPY nginx.conf /etc/nginx/nginx.conf
  
  # Copy backend (only JS after tsc build)
  COPY --from=builder /app/package*.json ./
  COPY --from=builder /app/dist/backend ./backend
  
  # Install only production deps for backend
  RUN npm install --omit=dev && npm cache clean --force
  
  # Ports: 8181 (frontend), 5174 (backend API)
  EXPOSE 8181
  EXPOSE 5174
  
  # Start backend + frontend
  CMD ["sh", "-c", "node backend/server.js & nginx -g 'daemon off;'"]
  