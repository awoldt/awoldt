import express from "express";
import path from "path";
import fs from "fs/promises";

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));
app.use(express.static(path.join(process.cwd(), "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "pages", "index.html"));
});
app.get("/projects", (req, res) => {
  res.sendFile(path.join(process.cwd(), "pages", "projects.html"));
});
app.get("/articles", (req, res) => {
  res.sendFile(path.join(process.cwd(), "pages", "articles.html"));
});
app.get(`/articles/:NAME`, async (req, res) => {
  const relatedArticles = await GetRelatedArticles(req.params.NAME);
  res.render(`articles/${req.params.NAME}`, {
    readMoreLinks: relatedArticles,
  });
});

// --- PERMENENT REDIRECT FROM OLD BLOGS ROUTE (NOW CALLED ARTICLES)
app.get("/blogs", (req, res) => {
  res.redirect(301, `/articles`);
});
app.get("/blogs/:ANYHTING", (req, res) => {
  res.redirect(301, `/articles/${req.params.ANYHTING}`);
});
// ---

app.listen(8080, () => {
  console.log("\nserver listening on port 8080");
});

async function GetRelatedArticles(currentPath) {
  /* 
    Will return other articles for reader OTHER than
    the current articles being viewed

    Used to show read more links at bottom of each article
  */

  try {
    const articles = await fs.readFile(
      path.join(process.cwd(), "articles_data.json"),
      { encoding: "utf-8" }
    );

    const articlesData = (await JSON.parse(articles)).filter((x) => {
      return x.path !== currentPath;
    });

    return articlesData;
  } catch (err) {
    console.log(err);
    return null;
  }
}
