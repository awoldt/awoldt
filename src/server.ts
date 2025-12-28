import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.use("/public/*", serveStatic({ root: "./" }));

app.get("/", async (c) => {
  const file = Bun.file("./index.html");
  const text = await file.text();
  return c.html(text);
});

app.get("/blogs/:blogname", async (c) => {
  const name = c.req.param("blogname");
  const file = Bun.file(`./blogs/${name}.html`);
  const exists = await file.exists();
  if (!exists) {
    c.status(404);
    return c.text("Does not exist :(");
  }

  const text = await file.text();
  return c.html(text);
});

export default app;
