# Stage 1: Build React frontend + TypeScript
FROM node:20.13.1-alpine AS builder
WORKDIR /app

# Copy source code
COPY . .

# Install all dependencies and build
RUN npm install --force
RUN npm run build

# Stage 2: Final image with backend and NGINX for frontend
FROM alpine:latest AS final
WORKDIR /app

# Install only what’s necessary
RUN apk add --no-cache nginx nodejs npm

# Copy only built frontend files to NGINX
COPY --from=builder /app/dist /var/www/html

# Copy NGINX config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy only needed backend files
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src/server.ts ./src/server.ts

# Install production dependencies only
RUN npm install --omit=dev && npm cache clean --force

# Expose ports
EXPOSE 8181
EXPOSE 5174

# Start both backend and frontend servers
CMD ["sh", "-c", "node dist/server.js & nginx -g 'daemon off;'"]
