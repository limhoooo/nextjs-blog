import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
export type Article = {
  no: number;
  title: string;
  summary: string;
  link: string;
  tags: string;
};

function readJsonData() {
  const filePath = path.resolve("data/article.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
}

export async function GET(req: Request) {
  const articles: Article[] = readJsonData();
  const sortingArticles = articles.sort((a, b) => (a.no > b.no ? -1 : 1));
  return NextResponse.json([...sortingArticles]);
}
