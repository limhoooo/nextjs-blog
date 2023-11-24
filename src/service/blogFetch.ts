import Fetch from "@/util/HttpClient";

export const blogApi = new Fetch();
blogApi.setHeaders({
  "Content-Type": "application/json; charset=utf-8",
});
blogApi.setBaseUrl("https://limhoooo-nextjs-blog.vercel.app/");
