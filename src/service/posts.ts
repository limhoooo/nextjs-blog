import path from "path";
import { promises as fs, readFile } from "fs";

export type TypePost = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = TypePost & { content: string };

export async function getFeaturedPosts(): Promise<TypePost[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}
export async function getNonFeaturedPosts(): Promise<TypePost[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<TypePost[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const data = await fs
    .readFile(filePath, "utf-8")
    .then<TypePost[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
  return data;
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const metadata = await getAllPosts().then((posts) =>
    posts.find((post) => post.path === fileName)
  );
  if (!metadata)
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  const content = await fs.readFile(filePath, "utf-8");

  return { ...metadata, content };
}
