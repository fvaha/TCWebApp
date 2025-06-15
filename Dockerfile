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
  
  # Install nginx only
  RUN apk add --no-cache nginx
  
  # Copy built frontend to nginx web root
  COPY --from=builder /app/dist /var/www/html
  COPY nginx.conf /etc/nginx/nginx.conf
  
  # Correct backend path: Copy compiled backend JS
  COPY --from=builder /app/build/backend ./backend
  
  # Expose ports
  EXPOSE 8181
  EXPOSE 5174
  
  # Start backend + NGINX together
  CMD ["sh", "-c", "node backend/server.js & nginx -g 'daemon off;'"]
  