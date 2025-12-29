import { ArticleMetadata } from "../server";
import Navbar from "./Navbar";

export default function ArticleList({
  articles,
}: {
  articles: ArticleMetadata[];
}) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Articles | awoldt</title>
        <link rel="stylesheet" href="/public/styles/global.css" />
        <link rel="stylesheet" href="/public/styles/blog.css" />
        <link rel="icon" type="image/png" href="/public/imgs/code.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="fcb7ec96-c1a5-4f43-b563-16ed74fbea63"
        ></script>
      </head>
      <body>
        <Navbar />
        <main class="container">
          <header class="blog-header">
            <h1>Articles</h1>
            <p>
              I just write random stuff about programming. Might read like a 3rd
              grader wrote it but I'm not using AI to write these!
            </p>
          </header>
          <div class="blog-list">
            {articles.map((article) => (
              <a href={`/articles${article.route}`} class="blog-preview">
                <h2>{article.title}</h2>
                <span class="publish-date">{article.publishedOn}</span>
                <p class="description">{article.shortDescription}</p>
                <div class="read-more">
                  Read more <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </main>
      </body>
    </html>
  );
}
