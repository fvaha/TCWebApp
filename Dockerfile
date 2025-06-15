# Build stage (secure, small, LTS)
FROM node:20.13.1-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build

# Production stage (secure NGINX)
FROM nginx:1.27.0-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
