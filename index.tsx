import { Hono } from "hono";
import { serveStatic } from "hono/bun";

import Index from "./views/Homepage.tsx";

const app = new Hono();

app.use("/*", serveStatic({ root: "./public" }));

app.get("/", async (c) => {
  return c.html(<Index />);
});

Bun.serve({
  fetch: app.fetch,
  port: 8080,
});
