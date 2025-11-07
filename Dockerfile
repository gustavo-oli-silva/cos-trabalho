# Dockerfile for development: runs Next.js in dev mode

FROM node:20-slim
WORKDIR /app

# Install dependencies (including devDependencies so next dev works)
COPY package*.json ./
RUN npm ci --silent

# Copy app source
COPY . .

# Expose Next.js default dev port
EXPOSE 3000

# Start Next.js in development mode (watch mode)
CMD ["npm", "run", "dev"]

# # Multi-stage Dockerfile for Next.js production

# # Builder stage
# FROM node:20-slim AS builder
# WORKDIR /app

# # Install dependencies
# COPY package*.json ./
# RUN npm ci --silent

# # Copy source and build
# COPY . .
# RUN npm run build

# # Runner stage
# FROM node:20-slim AS runner
# WORKDIR /app
# ENV NODE_ENV=production

# # Copy necessary files from builder
# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/next.config.* ./

# EXPOSE 3000
# CMD ["npm", "start"]
