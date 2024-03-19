import type { ArticleData } from "../utils/functions";
import Nav from "./components/Nav";

export default function Articles({ articles }: { articles: ArticleData[] }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Articles</title>
        <meta name="description" content="Read development articles" />
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
            <h1 style="font-size: 50px;">Articles ({articles.length})</h1>

            <p class="mb-5">
              Check out these articles if you're looking to get the hang of
              different tech stuff. They've got examples and bits of code to
              make things easier to understand. I've tried to keep everything
              simple and clear, so even if you're just starting out in coding,
              you'll find these pretty helpful.
            </p>
            <div style="padding-bottom: 50px">
              {articles.map((x) => {
                return (
                  <div
                    style="background-color: #012745; padding: 20px; border-radius: 10px;"
                    class="article-div"
                  >
                    <a
                      href={`/articles/${x.file_name}`}
                      style="text-decoration: none"
                    >
                      <div>
                        <div
                          style="display: inline-block"
                          class="article-info-div"
                        >
                          <h2 style="font-size: 30px; color: white; font-weight: 900">
                            {x.name}
                          </h2>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
