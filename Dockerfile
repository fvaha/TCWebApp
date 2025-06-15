# Build stage
FROM node:20.13.1-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install --force
RUN npm run build

# Production stage with Node (not NGINX now)
FROM node:20.13.1-alpine
WORKDIR /app

COPY --from=builder /app /app
ENV NODE_ENV production

CMD ["node", "dist/server.js"]
