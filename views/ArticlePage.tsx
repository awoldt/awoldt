import Nav from "./components/Nav";
import type { ArticleData } from "../utils/functions";

/* 
    The html string being passed into dangerouslySetInnerHTML is coming 
    from this server and does not contain any dangerous html code.... 

    no need to be scared :)
*/

interface Data {
  content: string;
  head: string;
  relatedArticles: {
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
              {props.relatedArticles && (
                <div style="margin: 50px 0px 50px 0px">
                  {props.relatedArticles.relatedArticles.length > 0 && (
                    <>
                      <span style="color: white">Related Articles</span>
                      {props.relatedArticles.relatedArticles.map((x, index) => {
                        return (
                          <div>
                            <a href={x.file_name} key={index}>
                              {x.name}
                            </a>
                          </div>
                        );
                      })}
                    </>
                  )}

                  {props.relatedArticles.otherArticles.length > 0 && (
                    <>
                      <span style="color: white; display: block; margin-top: 20px">
                        Other Articles
                      </span>
                      {props.relatedArticles.otherArticles.map((x, index) => {
                        return (
                          <div>
                            <a href={x.file_name} key={index}>
                              {x.name}
                            </a>
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
