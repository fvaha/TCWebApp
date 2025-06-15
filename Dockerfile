# ------------ Stage 1: Build React frontend & TypeScript backend ------------
  FROM node:20.13.1-alpine AS builder
  WORKDIR /app
  
  COPY .env ./
  COPY package*.json ./
  COPY tsconfig*.json ./
  COPY vite.config.ts ./
  COPY index.html ./
  COPY public ./public
  COPY src ./src
  COPY backend ./backend
  
  RUN npm install --force
  RUN npm run build
  
  # ------------ Final Image: Smaller Node base with NGINX & backend runtime ------------
  FROM node:20.13-alpine AS final
  WORKDIR /app
  
  # Install nginx only
  RUN apk add --no-cache nginx
  
  # Copy frontend build
  COPY --from=builder /app/dist /var/www/html
  COPY nginx.conf /etc/nginx/nginx.conf
  
  # Copy only the compiled backend (no need for package.json if prebuilt)
  COPY --from=builder /app/dist/backend ./backend
  
  # Expose ports
  EXPOSE 8181
  EXPOSE 5174
  
  # Start backend + NGINX together
  CMD ["sh", "-c", "node backend/server.js & nginx -g 'daemon off;'"]
  