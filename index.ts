import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import path from "path";

const app = new Hono();

app.use("/*", serveStatic({ root: "./public" }));

app.get("/", async (c) => {
  const file = Bun.file(path.join(process.cwd(), "index.html"));
  const txt = await file.text();
  return c.html(txt);
});

Bun.serve({
  fetch: app.fetch,
  port: 8080,
});
