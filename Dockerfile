# Stage 1: Builder
FROM node:20.13.1-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install --force && npm run build

# Stage 2: Final image
FROM node:20.13-alpine
WORKDIR /app

# Install nginx
RUN apk add --no-cache nginx

# Create directories
RUN mkdir -p /var/www/html && mkdir -p ./backend

# Copy frontend
COPY --from=builder /app/dist /var/www/html

# Copy backend (use find to handle missing files gracefully)
RUN if [ -d "/app/dist-backend" ]; then \
      mkdir -p ./backend && \
      cp /app/dist-backend/server.js ./backend/; \
    fi

# Copy backend dependencies if they exist
RUN if [ -f "/app/backend/package.json" ]; then \
      mkdir -p ./backend && \
      cp /app/backend/package.json ./backend/ && \
      cd backend && npm install --production; \
    fi

# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8181 5174
CMD ["sh", "-c", "if [ -f \"./backend/server.js\" ]; then node backend/server.js & fi; nginx -g 'daemon off;'"]