import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import path from "path";

import Articles from "./views/Articles.tsx";
import ArticlePage from "./views/components/ArticlePage.tsx";
import { GetRelatedArticleLinks, type ArticleData } from "./utils/functions.ts";
import Index from "./views/Homepage.tsx";

const app = new Hono();

app.use("/*", serveStatic({ root: "./public" }));

app.get("/", async (c) => {
  const articleFiles = Bun.file(
    path.join(process.cwd(), "utils", "article_data.json")
  );
  let articleData: ArticleData[] | null = JSON.parse(await articleFiles.text());

  if (articleData != null) {
    articleData = articleData.slice(0, 3);
  }

  return c.html(<Index articles={articleData} />);
});

app.get("/articles", async (c) => {
  const articleFiles = Bun.file(
    path.join(process.cwd(), "utils", "article_data.json")
  );
  const articleData: ArticleData[] | null = JSON.parse(
    await articleFiles.text()
  );

  if (articleData === null) {
    c.status(500);
    return c.text("There was an error while fetching articles :(");
  }

  return c.html(<Articles articles={articleData} />);
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

  const articleFiles = Bun.file(
    path.join(process.cwd(), "utils", "article_data.json")
  );
  const currentArticleData: ArticleData = JSON.parse(
    await articleFiles.text()
  ).find((x: ArticleData) => {
    return x.file_name === articleTitle;
  });

  const relatedArticles = await GetRelatedArticleLinks(
    articleTitle,
    currentArticleData.tags
  );

  return c.html(
    <ArticlePage
      content={await articleContent.text()}
      head={await articlesHeaders.text()}
      relatedArticles={relatedArticles}
    />
  );
});

Bun.serve({
  fetch: app.fetch,
  port: 8080,
});
