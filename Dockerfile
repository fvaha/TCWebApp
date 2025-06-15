# ------------ Stage 1: Build React frontend & TypeScript backend ------------
  FROM node:20.13.1-alpine AS builder
  WORKDIR /app
  
  # Copy files needed for installation and build
  COPY .env ./
  COPY package*.json ./
  COPY tsconfig*.json ./
  COPY vite.config.ts ./
  COPY index.html ./
  
  # Copy frontend and backend source files
  COPY public ./public
  COPY src ./src
  COPY backend ./backend
  
  # Install dependencies
  RUN npm install --force
  
  # Build backend (TypeScript) and frontend (Vite)
  RUN npm run build
  
  # ------------ Stage 2: Final runtime image with Node and NGINX ------------
  FROM node:20.13-alpine AS final
  WORKDIR /app
  
  # Install only NGINX (Node already included)
  RUN apk add --no-cache nginx
  
  # Copy built frontend files to nginx web root
  COPY --from=builder /app/dist /var/www/html
  COPY nginx.conf /etc/nginx/nginx.conf
  
  # Copy compiled backend JavaScript from build output
  COPY --from=builder /app/dist/backend /app/backend
  
  # Expose frontend (NGINX) and backend (Node API) ports
  EXPOSE 8181
  EXPOSE 5174
  
  # Start backend server and NGINX
  CMD ["sh", "-c", "node /app/backend/server.js & nginx -g 'daemon off;'"]
  