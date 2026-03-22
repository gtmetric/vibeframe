FROM oven/bun:1-alpine AS build
WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

# Production — clean image with only what's needed
FROM oven/bun:1-alpine
WORKDIR /app

COPY --from=build /app/package.json /app/tsconfig.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/src ./src
COPY --from=build /app/bin ./bin
COPY --from=build /app/routes ./routes
COPY --from=build /app/dist ./dist
COPY --from=build /app/middleware.ts* ./

EXPOSE 3000
ENV PORT=3000
CMD ["bun", "run", "start"]
