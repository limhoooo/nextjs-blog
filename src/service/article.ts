import path from "path";
import { promises as fs, readFile } from "fs";
import { cache } from "react";

export type Post = {
  no: number;
  title: string;
  summary: string;
  link: string;
  tags: string;
};

export const getArticle = cache(async () => {
  const filePath = path.join(process.cwd(), "data", "article.json");
  const data = await fs
    .readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.no > b.no ? -1 : 1)));
  return data;
});
