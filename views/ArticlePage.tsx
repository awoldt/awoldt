import Nav from "./components/Nav";
import type { ArticleData } from "../utils/functions";
import MoreArticlesLinks from "./components/MoreArticlesLinks";

/* 
    The html string being passed into dangerouslySetInnerHTML is coming 
    from this server and does not contain any dangerous html code.... 

    no need to be scared :)
*/

interface Data {
  content: string;
  head: string;
  moreArticles: {
    relatedArticles: ArticleData[];
    otherArticles: ArticleData[];
  } | null;
}

export default function ArticlePage(props: Data) {
  return (
    <html lang="en">
      {/* HEAD TAG CONTENT */}
      <head dangerouslySetInnerHTML={{ __html: props.head }}></head>
      <body class="mb-5">
        <header>
          <Nav />
        </header>
        <main class="article-page">
          <div
            class="container-fluid"
            style="background: linear-gradient(#001220 , #000509); padding-bottom: 75px"
          >
            <div
              class="container pt-5"
              style="background: linear-gradient(#001220 , #000509);"
            >
              {/* PAGE CONTENT */}
              <div dangerouslySetInnerHTML={{ __html: props.content }}></div>

              <MoreArticlesLinks moreArticles={props.moreArticles} />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
