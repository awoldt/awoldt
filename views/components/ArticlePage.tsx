import Nav from "./Nav";
import type { ArticleData } from "../../utils/functions";

/* 
    The html string being passed into dangerouslySetInnerHTML is coming 
    from this server and does not contain any dangerous html code.... 

    no need to be scared :)
*/

interface Data {
  content: string;
  head: string;
  relatedArticles: ArticleData[] | null;
}

export default function ArticlePage(props: Data) {
  return (
    <html lang="en">
      {/* HEAD TAG CONTENT */}
      <head dangerouslySetInnerHTML={{ __html: props.head }}></head>
      <body class="mb-5">
        <header>
          <Nav currentPage={"articles"} />
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
                  <h3 style="font-family: Silkscreen-Regular">Read more</h3>
                  {props.relatedArticles.map((x, index) => {
                    return (
                      <div>
                        <a href={x.path} key={index}>
                          {x.name}
                        </a>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
