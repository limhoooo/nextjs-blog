import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

function readJsonData() {
  const filePath = path.resolve("data/posts.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
}

export async function GET(req: Request) {
  const posts = readJsonData();
  return NextResponse.json([...posts]);
}
