import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { readdir } from "node:fs/promises";
import Article from "./components/Article";
import ArticleList from "./components/ArticleList";
import Home from "./components/Home";
import path from "node:path";

export interface ArticleMetadata {
  title: string;
  shortDescription: string;
  publishedOn: string;
  route: string
  tags: string[]
}

const app = new Hono();

app.use("/public/*", serveStatic({ root: "./" }));

app.get("/", (c) => {
  return c.html(<Home />);
});

app.get("/robots.txt", async (c) => {
  return c.text(`User-agent: *
Allow: /

Sitemap: https://awoldt.dev/sitemap.xml`);
});

app.get("/sitemap.xml", async (c) => {
  const sitemapPath = path.join(__dirname, "sitemap.xml");
  const file = Bun.file(sitemapPath);
  const text = await file.text();

  c.header("Content-Type", "text/xml; charset=utf-8");

  return c.body(text);
});

app.get("/articles", async (c) => {
  // look inside the articles folder inside src
  // grab the metadata.json for each article....

  const articles: ArticleMetadata[] = [];
  const articlesFolder = path.join(__dirname, "articles");
  const articlesDir = await readdir(articlesFolder, { withFileTypes: true });

  // each folder within src/articles is each individual article (contains the html and metadata within here)
  for (const articleFolder of articlesDir) {
    if (articleFolder.isDirectory()) {
      // get the metadata.json
      const metadataPath = path.join(
        __dirname,
        "articles",
        articleFolder.name,
        "metadata.json"
      );
      const metadataFile = Bun.file(metadataPath);
      if (await metadataFile.exists()) {
        const metadata = (await metadataFile.json()) as ArticleMetadata;
        articles.push(metadata);
      }
    }
  }

  return c.html(<ArticleList articles={articles} />);
});

app.get("/articles/:articlename", async (c) => {
  const name = c.req.param("articlename");
  const filePath = path.join(__dirname, "articles", name, "article.html");
  const file = Bun.file(filePath);
  const exists = await file.exists();
  if (!exists) {
    c.status(404);
    return c.text("this page doesn't exist :(");
  }

  const text = await file.text();

  // get the metadata for this specific article
  const metadataPath = path.join(__dirname, "articles", name, "metadata.json");
  const metadata = (await Bun.file(metadataPath).json()) as ArticleMetadata;

  return c.html(
    <Article
      html={text}
      title="My First Go Project - Database Migration CLI"
      description={metadata.shortDescription}
      url={`/articles/${name}`}
      thumbnail={null}
    />
  );
});

export default app;
