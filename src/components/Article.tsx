import Navbar from "./Navbar";

interface ArticleProps {
  html: string;
  title: string;
}

export default function Article({ html, title }: ArticleProps) {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>{title}</title>
          <link rel="stylesheet" href="/public/styles/global.css" />
          <link rel="stylesheet" href="/public/styles/article.css" />
          <link rel="icon" type="image/png" href="/public/imgs/code.png" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id="fcb7ec96-c1a5-4f43-b563-16ed74fbea63"
          ></script>
        </head>
        <body>
          <Navbar />
          <main class="container">
            <article dangerouslySetInnerHTML={{ __html: html }}></article>
          </main>
        </body>
      </html>
    </>
  );
}
