import fs from "fs/promises";
import path from "path";

export interface ArticleData {
  name: string;
  path: string;
  description: string;
}

export async function GetRelatedArticleLinks(currentArticleName: string) {
  /* 
        Gets a most 6 links from articles_data.json file to 
        display at the bottom of each article

        Will exclude the article currently being viewed
    */

  try {
    const jsonData = await fs.readFile(
      path.join(process.cwd(), "articles_data.json"),
      { encoding: "utf-8" }
    );
    const data: ArticleData[] = await JSON.parse(jsonData);

    const relatedAricles: ArticleData[] = [];

    for (let i = 0; i < data.length; i++) {
      if (relatedAricles.length === 6) break;
      if (data[i].path !== currentArticleName) {
        relatedAricles.push(data[i]);
      }
    }

    return relatedAricles;
  } catch (err) {
    console.log(err);
    return null;
  }
}
