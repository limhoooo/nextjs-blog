import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";
type Params = {
  params: { slug: string };
};
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

export async function GET(req: Request, { params }: Params) {
  const { slug } = params;
  const posts: Post[] = readJsonData();
  const post = posts.find((post) => post.path === slug);

  if (!post) throw new Error(`${slug}에 해당하는 포스트를 찾을 수 없음`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;

  const filePath = path.resolve(`data/posts/${slug}.md`);
  const content = fs.readFileSync(filePath, { encoding: "utf-8" });
  return NextResponse.json({ ...post, content, next, prev });
}
