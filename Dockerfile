# ------------ Stage 1: Build React frontend & TypeScript backend ------------
  FROM node:20.13.1-alpine AS builder
  WORKDIR /app
  
  # Copy config and package files
  COPY .env ./
  COPY package*.json ./
  COPY tsconfig*.json ./
  COPY vite.config.ts ./
  COPY index.html ./
  
  # Copy source files
  COPY public ./public
  COPY src ./src
  COPY backend ./backend
  
  # Install dependencies and build both backend and frontend
  RUN npm install --force
  RUN npm run build
  
  # ------------ Final Image: NGINX + Node runtime ------------
  FROM node:20.13-alpine AS final
  WORKDIR /app
  
  # Install nginx only
  RUN apk add --no-cache nginx
  
  # Copy frontend (Vite) build to nginx web root
  COPY --from=builder /app/dist /var/www/html
  COPY nginx.conf /etc/nginx/nginx.conf
  
  # Copy compiled backend JavaScript from TypeScript output
  COPY --from=builder /app/dist/backend ./backend
  
  # Expose ports
  EXPOSE 8181    
  EXPOSE 5174   
  
  # Start backend (Node) and frontend (NGINX)
  CMD ["sh", "-c", "node backend/server.js & nginx -g 'daemon off;'"]
  