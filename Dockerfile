# Stage 1: Builder
FROM node:20.13.1-alpine AS builder
WORKDIR /app

# Copy all files
COPY . .

# Install and build
RUN npm install --force && npm run build

# Verify outputs
RUN echo "=== Backend Output ===" && ls -lR /app/dist-backend
RUN echo "=== Frontend Output ===" && ls -lR /app/dist

# Stage 2: Final image
FROM node:20.13-alpine AS final
WORKDIR /app

# Install nginx
RUN apk add --no-cache nginx

# Create directories
RUN mkdir -p /var/www/html && mkdir -p ./backend

# Copy frontend
COPY --from=builder /app/dist /var/www/html

# Copy backend
COPY --from=builder /app/dist-backend/server.js ./backend/

# Copy backend dependencies if they exist
COPY --from=builder /app/backend/package.json ./backend/ 2>/dev/null || echo "No package.json found"

# Install production dependencies if package.json exists
RUN if [ -f "./backend/package.json" ]; then \
      cd backend && npm install --production; \
    fi

# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost:8181 || exit 1

# Expose ports
EXPOSE 8181  
EXPOSE 5174  

# Start services
CMD ["sh", "-c", "node backend/server.js & nginx -g 'daemon off;'"]