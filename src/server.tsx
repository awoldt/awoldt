import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import Article from "./components/Article";
import BlogsList from "./components/BlogsList";
import Home from "./components/Home";

const app = new Hono();

app.use("/public/*", serveStatic({ root: "./" }));

app.get("/", (c) => {
  return c.html(<Home />);
});

app.get("/blogs", (c) => {
  return c.html(<BlogsList />);
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
  return c.html(
    <Article html={text} title="My First Go Project - Database Migration CLI" />
  );
});

export default app;
