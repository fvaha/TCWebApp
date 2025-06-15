# ------------ Stage 1: Build React frontend & backend TypeScript ------------
  FROM node:20.13.1-alpine AS builder
  WORKDIR /app
  
  # Copy .env for Vite build-time variables
  COPY .env .env
  
  # Copy package configs early for better install caching
  COPY package*.json ./
  COPY tsconfig*.json ./
  COPY vite.config.ts ./
  COPY index.html ./index.html 
  
  # Copy frontend + backend source
  COPY public ./public
  COPY src ./src
  COPY backend ./backend
  
  # Install all dependencies (frontend + backend)
  RUN npm install --force
  
  # Build backend and frontend
  RUN npm run build
  
  # ------------ Stage 2: Final image with backend API & NGINX frontend ------------
  FROM alpine:latest AS final
  WORKDIR /app
  
  # Install required runtime tools
  RUN apk add --no-cache nginx nodejs npm
  
  # Copy built frontend to nginx web root
  COPY --from=builder /app/dist /var/www/html
  
  # Copy nginx config
  COPY nginx.conf /etc/nginx/nginx.conf
  
  # Copy backend compiled JS and package info
  COPY --from=builder /app/package*.json ./
  COPY --from=builder /app/dist/backend ./backend
  
  # Install only production dependencies for backend
  RUN npm install --omit=dev && npm cache clean --force
  
  # Expose ports: 8181 = frontend, 5174 = backend API
  EXPOSE 8181
  EXPOSE 5174
  
  # Start backend server and NGINX together
  CMD ["sh", "-c", "node backend/server.js & nginx -g 'daemon off;'"]
  