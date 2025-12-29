import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import Article from "./components/Article";
import ArticleList from "./components/ArticleList";
import Home from "./components/Home";

const app = new Hono();

app.use("/public/*", serveStatic({ root: "./" }));

app.get("/", (c) => {
  return c.html(<Home />);
});

app.get("/articles", (c) => {
  return c.html(<ArticleList />);
});

app.get("/articles/:articlename", async (c) => {
  const name = c.req.param("articlename");
  const file = Bun.file(`./articles/${name}.html`);
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
