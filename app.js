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
app.get("/blogs", (req, res) => {
  res.sendFile(path.join(process.cwd(), "pages", "blogs.html"));
});

app.get(`/blogs/:NAME`, (req, res) => {
  res.sendFile(
    path.join(process.cwd(), "pages", "blogs", `${req.params.NAME}.html`)
  );
});

app.listen(8080, () => {
  console.log("\nserver listening on port 8080");
});
