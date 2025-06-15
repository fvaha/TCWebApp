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
  
  # --- Debug: Ensure backend was built ---
  RUN echo "=== /app/dist contents ===" && ls -l /app/dist && \
      echo "=== /app/dist/backend contents ===" && ls -l /app/dist/backend || echo "NO BACKEND DIR" && \
      if [ ! -f /app/dist/backend/server.js ]; then echo "ERROR: Backend server.js not built!"; exit 1; fi
  
  # ------------ Final Image: NGINX + Node runtime ------------
  FROM node:20.13-alpine AS final
  WORKDIR /app
  
  RUN apk add --no-cache nginx
  
  # Copy frontend (Vite build) to nginx web root
  COPY --from=builder /app/dist /var/www/html
  COPY nginx.conf /etc/nginx/nginx.conf
  
  # Copy compiled backend JavaScript from TypeScript output
  COPY --from=builder /app/dist/backend ./backend
  
  EXPOSE 8181
  EXPOSE 5174
  
  CMD ["sh", "-c", "node backend/server.js & nginx -g 'daemon off;'"]
  