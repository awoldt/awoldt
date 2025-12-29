import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import Article from "./components/Article";
import ArticleList from "./components/ArticleList";
import Home from "./components/Home";
import path from "node:path";

interface ArticleMetadata {
  route: string;
  title: string;
  shortDescription: string;
  publishedOn: string;
}

const app = new Hono();

app.use("/public/*", serveStatic({ root: "./" }));

app.get("/", (c) => {
  return c.html(<Home />);
});

app.get("/articles", async (c) => {
  // article metadata to show on articles list page
  const metadataPath = path.join(__dirname, "article_metadata.json");
  const file = Bun.file(metadataPath);
  const articleMetadata: ArticleMetadata[] = await file.json();

  return c.html(<ArticleList articles={articleMetadata} />);
});

app.get("/articles/:articlename", async (c) => {
  const name = c.req.param("articlename");
  const filePath = path.join(__dirname, "articles", `${name}.html`);
  const file = Bun.file(filePath);
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
