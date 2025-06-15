# ------------ Stage 1: Build React frontend & TypeScript backend ------------
  FROM node:20.13.1-alpine AS builder
  WORKDIR /app
  
  # Copy necessary files for dependency install and build
  COPY .env ./
  COPY package*.json ./
  COPY tsconfig*.json ./
  COPY vite.config.ts ./
  COPY index.html ./
  
  # Copy frontend and backend sources
  COPY public ./public
  COPY src ./src
  COPY backend ./backend
  
  # Install all dependencies
  RUN npm install --force
  
  # Build backend (TypeScript) and frontend (Vite)
  RUN npm run build
  
  # ------------ Final Image: Slim Node + NGINX + compiled backend ------------
  FROM node:20.13-alpine AS final
  WORKDIR /app
  
  # Install only nginx (Node already present from base image)
  RUN apk add --no-cache nginx
  
  # Copy built frontend to nginx web root
  COPY --from=builder /app/dist /var/www/html
  COPY nginx.conf /etc/nginx/nginx.conf
  
  # Copy compiled backend output (from tsc)
  COPY --from=builder /app/dist/backend ./backend
  
  # Expose frontend and backend ports
  EXPOSE 8181
  EXPOSE 5174
  
  # Run backend and NGINX together
  CMD ["sh", "-c", "node backend/server.js & nginx -g 'daemon off;'"]
  