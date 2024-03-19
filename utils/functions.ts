import fs from "fs/promises";
import path from "path";

export interface ArticleData {
  name: string;
  posted_on: string;
  file_name: string;
  tags: string[];
}

export async function GetRelatedArticleLinks(
  currentArticle: string,
  articleTags: string[]
): Promise<{
  relatedArticles: ArticleData[];
  otherArticles: ArticleData[];
} | null> {
  /* 
        Gets related and recent article links to showcase at bottom 
        of each article

        Related are articles with similar tags, while recent just goes in order
        from newest article posted

        MUST exclude the current article being viewed from being returned
    */

  try {
    const fileData = Bun.file(
      path.join(process.cwd(), "utils", "article_data.json")
    );

    // every article OTHER than the current one being viewed
    const articles: ArticleData[] = JSON.parse(await fileData.text()).filter(
      (x: ArticleData) => {
        return x.file_name !== currentArticle;
      }
    );

    // articles with the same tags as current one being viewed
    const relatedArticles = articles.filter((x) => {
      for (let i = 0; i < x.tags.length; i++) {
        if (articleTags.includes(x.tags[i])) {
          return x;
        }
      }
    });

    const otherArticles: ArticleData[] = [];
    for (let i = 0; i < articles.length; i++) {
      let a = true;
      for (let k = 0; k < relatedArticles.length; k++) {
        if (relatedArticles[k].file_name === articles[i].file_name) {
          a = false;
          break;
        }
      }
      if (a) {
        otherArticles.push(articles[i]);
      }
    }

    return {
      relatedArticles: relatedArticles,
      otherArticles: otherArticles,
    };
  } catch (err) {
    console.log(err);
    return null;
  }
}
