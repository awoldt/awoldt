import Navbar from "./Navbar";

export default function ArticleList() {
  const blogs = [
    {
      title: "My First Go Project - Database Migration CLI",
      slug: "first-go-project",
      description:
        "A deep dive into building a database migration CLI tool using Go.",
      date: "2023-10-27", // Approximate date or placeholder
    },
  ];

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Articles | awoldt</title>
        <link rel="stylesheet" href="/public/styles/global.css" />
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
          <section>
            <h1 style="font-size: 2.5rem; margin-bottom: 2rem;">Articles</h1>
            <p>
              I just write random stuff about programming. Might read like a 3rd
              grader wrote it but I'm not using AI to write these!
            </p>
            <div class="blog-list">
              {blogs.map((blog) => (
                <div
                  class="blog-preview"
                  style="margin-bottom: 2rem; padding: 1.5rem; background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 12px;"
                >
                  <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem;">
                    <a
                      href={`/articles/${blog.slug}`}
                      style="color: var(--accent); text-decoration: none;"
                    >
                      {blog.title}
                    </a>
                  </h2>
                  <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">
                    {blog.date}
                  </p>
                  <p>{blog.description}</p>
                  <a
                    href={`/articles/${blog.slug}`}
                    style="display: inline-block; margin-top: 1rem; color: var(--text-color); text-decoration: underline;"
                  >
                    Read more →
                  </a>
                </div>
              ))}
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
