# ------------ Stage 1: Build React frontend & TypeScript backend ------------
  FROM node:20.13.1-alpine AS builder
  WORKDIR /app
  
  # Copy env for Vite build-time variables
  COPY .env .env
  
  # Copy project config files early for better cache
  COPY package*.json ./
  COPY tsconfig*.json ./
  COPY vite.config.ts ./
  COPY index.html ./
  
  # Copy all sources
  COPY public ./public
  COPY src ./src
  COPY backend ./backend
  
  # Install all dependencies
  RUN npm install --force
  
  # Build backend and frontend
  RUN npm run build
  
  # ------------ Stage 2: Final image with backend API & NGINX frontend ------------
  FROM alpine:latest AS final
  WORKDIR /app
  
  # Install NGINX + Node.js to serve frontend and run backend
  RUN apk add --no-cache nginx nodejs npm
  
  # Copy compiled frontend output to NGINX web root
  COPY --from=builder /app/dist /var/www/html
  
  # Copy NGINX config
  COPY nginx.conf /etc/nginx/nginx.conf
  
  # Copy only compiled backend JS and package info
  COPY --from=builder /app/package*.json ./
  COPY --from=builder /app/dist/backend ./backend
  
  # Install only production deps for backend
  RUN npm install --omit=dev && npm cache clean --force
  
  # Expose frontend (8181) and backend API (5174)
  EXPOSE 8181
  EXPOSE 5174
  
  # Run backend server and NGINX together
  CMD ["sh", "-c", "node backend/server.js & nginx -g 'daemon off;'"]
  