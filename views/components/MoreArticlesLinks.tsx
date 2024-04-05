import type { ArticleData } from "../../utils/functions";

interface PageProps {
  moreArticles: {
    relatedArticles: ArticleData[];
    otherArticles: ArticleData[];
  } | null;
}

export default function MoreArticlesLinks(props: PageProps) {
  return (
    <>
      {props.moreArticles && (
        <div style="margin: 50px 0px 50px 0px">
          {props.moreArticles.relatedArticles.length > 0 && (
            <div class="mb-4">
              <div style="color: white" class="mb-3">
                Related Articles
              </div>
              <div class="row">
                {props.moreArticles.relatedArticles.map((x, index) => {
                  return (
                    <div class="more-article-div col-6 col-md-4 col-lg-3 mb-4 mb-4">
                      <a href={x.file_name} key={index}>
                        <img
                          class="img-fluid"
                          src={`/imgs/articles/${x.file_name}.png`}
                          alt={`${x.name} article thumbnail`}
                        />
                        <span class="text-center">{x.name}</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {props.moreArticles.otherArticles.length > 0 && (
            <div class="mb-4">
              <div style="color: white" class="mb-3">
                More Articles
              </div>
              <div class="row">
                {props.moreArticles.otherArticles.map((x, index) => {
                  return (
                    <div class="more-article-div col-6 col-md-4 col-lg-3 mb-4 mb-4">
                      <a href={x.file_name} key={index}>
                        <img
                          class="img-fluid"
                          src={`/imgs/articles/${x.file_name}.png`}
                          alt={`${x.name} article thumbnail`}
                        />
                        <span class="text-center">{x.name}</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
