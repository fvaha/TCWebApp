# Stage 1: Build React frontend and backend TypeScript
FROM node:20.13.1-alpine AS builder

WORKDIR /app
COPY . .

# Install dependencies and build both frontend + backend
RUN npm install --force
RUN npm run build

# Stage 2: Final image with nginx + node runtime
FROM alpine:latest AS final

# Install runtime dependencies: nginx and node
RUN apk add --no-cache nginx nodejs npm

# Set up working dir
WORKDIR /app

# Copy frontend build to nginx web root
COPY --from=builder /app/dist /var/www/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy backend files for runtime
COPY --from=builder /app /app

# Install only production dependencies
RUN npm install --omit=dev

# Expose frontend (nginx) and backend (Hono API) ports
EXPOSE 8181
EXPOSE 5174

# Start both backend and frontend (nginx)
CMD sh -c "node dist/server.js & nginx -g 'daemon off;'"
