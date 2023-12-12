import { FetchResponse } from "@/util/HttpClient";
import { blogApi } from "../blogFetch";

export type Article = {
  no: number;
  title: string;
  summary: string;
  link: string;
  tags: string;
};
type ArticleApi = {
  getAllArticle: () => Promise<FetchResponse<Article[]>>;
};

export const articleApi: ArticleApi = {
  getAllArticle: () =>
    blogApi.get({
      url: "api/article/all-article",
    }),
};
