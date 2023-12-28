import express from "express";
import path from "path";

const app = express();
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

app.get(`/articles/:NAME`, (req, res) => {
  res.sendFile(
    path.join(process.cwd(), "pages", "articles", `${req.params.NAME}.html`)
  );
});

// PERMENENT REDIRECT
app.get("/blogs", (req, res) => {
  res.redirect(301, `/articles`);
});
app.get("/blogs/:ANYHTING", (req, res) => {
  res.redirect(301, `/articles/${req.params.ANYHTING}`);
});
//

app.listen(8080, () => {
  console.log("\nserver listening on port 8080");
});
