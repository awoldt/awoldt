FROM oven/bun:latest
WORKDIR /app
COPY package.json package-lock.json bun.lockb ./
RUN bun install
COPY . .
EXPOSE 8080
CMD ["bun", "run", "app.tsx"]
