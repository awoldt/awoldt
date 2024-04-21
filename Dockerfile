FROM oven/bun:latest
WORKDIR /app
COPY package.json package-lock.json ./
RUN bun install
COPY . .
EXPOSE 8080
CMD ["bun", "run", "index.tsx"]
