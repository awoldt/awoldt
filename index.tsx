import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import path from "path";

import Articles from "./views/Articles.tsx";
import ArticlePage from "./views/components/ArticlePage.tsx";
import { GetRelatedArticleLinks } from "./utils/functions.ts";
import Projects from "./views/Projects.tsx";

const app = new Hono();

app.use("/*", serveStatic({ root: "./public" }));

app.get("/", async (c) => {
  const homepage = Bun.file(path.join(process.cwd(), "views", "index.html"));
  return c.html(homepage.text());
});

app.get("/articles", async (c) => {
  const articles = Bun.file(path.join(process.cwd(), "articles_data.json"));

  return c.html(<Articles articles={await articles.json()} />);
});

app.get("/articles/:article_title", async (c) => {
  const articleTitle = c.req.param("article_title");
  const articleContent = Bun.file(
    path.join(process.cwd(), "article_content", `${articleTitle}.html`)
  );
  const articlesHeaders = Bun.file(
    path.join(
      process.cwd(),
      "article_content",
      "head_metadata",
      `${articleTitle}.html`
    )
  );

  const relatedArticles = await GetRelatedArticleLinks(articleTitle);

  return c.html(
    <ArticlePage
      content={await articleContent.text()}
      head={await articlesHeaders.text()}
      relatedArticles={relatedArticles}
    />
  );
});

app.get("/projects", (c) => {
  return c.html(<Projects />);
});

Bun.serve({
  fetch: app.fetch,
  port: 8080,
});
