import type { ArticleData } from "../../utils/functions";

interface PageProps {
  articles: ArticleData[];
}

export default function RecentArticles(props: PageProps) {
  return (
    <div class="row text-center">
      {props.articles.map((x) => {
        return (
          <div class="col-lg-4 mb-4" id="recent_article_links">
            <a href={`/articles/${x.file_name}`}>
              <img
                src={`/imgs/articles/${x.file_name}.png`}
                alt={`${x.name} thumbnail`}
                class="article-thumbnail"
              />
              <span>{x.name}</span>
            </a>
          </div>
        );
      })}
    </div>
  );
}
