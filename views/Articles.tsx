import type { ArticleData } from "../utils/functions";
import Nav from "./components/Nav";
import RecentArticles from "./components/RecentArticles";

export default function Articles({ articles }: { articles: ArticleData[] }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Articles</title>
        <meta name="description" content="Discover articles on web development and tech topics. Stay informed and empowered. Explore software development, programming languages, and more." />
        <link rel="canonical" href="https://awoldt.dev/articles" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="/styles/global.css" />
        <link rel="stylesheet" href="/styles/articles.css" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body>
        <header>
          <Nav />
        </header>
        <div class="container-fluid">
          <div class="container pt-5">
            <h1 style="font-size: 50px;">Articles</h1>
            <p><b>There are currently {articles.length} articles</b></p>

            <p class="mb-5">
              Explore these articles for insights into various tech topics. They
              include examples and code snippets to facilitate understanding.
              I've aimed for simplicity and clarity, making them accessible even
              for beginners in coding.
            </p>

            <RecentArticles articles={articles} />
          </div>
        </div>
      </body>
    </html>
  );
}
