import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

function readJsonData() {
  const filePath = path.resolve("data/posts.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const count = Number(searchParams.get("count"));
  const maxCount = count + 5;
  const posts: Post[] = readJsonData();
  const filterPosts = posts.filter((item, index) => maxCount > index);

  return NextResponse.json([...filterPosts]);
}
