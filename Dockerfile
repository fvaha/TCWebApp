# Stage 1: Builder
FROM node:20.13.1-alpine AS builder
WORKDIR /app

# Copy files needed for installation
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./

# Install dependencies first for better caching
RUN npm install --force

# Copy remaining files
COPY .env ./
COPY index.html ./
COPY public ./public
COPY src ./src
COPY backend ./backend

# Verify backend files
RUN echo "=== Backend Structure ===" && ls -lR /app/backend

# Build application
RUN npm run build

# Verify build output
RUN echo "=== Build Output ===" && ls -lR /app/dist

# Stage 2: Final image
FROM node:20.13-alpine AS final
WORKDIR /app

# Install production dependencies and nginx
RUN apk add --no-cache nginx

# Copy only necessary files from builder
COPY --from=builder /app/dist /var/www/html
COPY --from=builder /app/dist/backend ./backend
COPY --from=builder /app/backend/package.json ./backend/package.json
COPY nginx.conf /etc/nginx/nginx.conf

# Install production dependencies for backend
RUN cd backend && npm install --production

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost:8181 || exit 1

# Expose ports
EXPOSE 8181  
EXPOSE 5174 

# Start services
CMD ["sh", "-c", "node backend/server.js & nginx -g 'daemon off;'"]