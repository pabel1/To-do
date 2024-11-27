# Stage 1: Build React App
FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install -f
COPY . .
RUN npm run build

# Production Stage
FROM node:16-alpine AS production
WORKDIR /app

# Copy built files from builder stage
COPY --from=builder /app/dist ./dist
RUN npm install express
COPY server.online.js .
EXPOSE 3000
CMD ["node", "server.online.js"]


