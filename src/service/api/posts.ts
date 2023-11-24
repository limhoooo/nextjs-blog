import { FetchResponse, Options } from "@/util/HttpClient";
import { blogApi } from "../blogFetch";

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

type ReqPrams = {
  params?: any;
  reqOptions?: Options;
};
type PostApi = {
  getAllPosts: () => Promise<FetchResponse<Post[]>>;
  getPost: ({ params }: ReqPrams) => Promise<FetchResponse<PostData>>;
};

export const postApi: PostApi = {
  getAllPosts: () => blogApi.get({ url: "api/post/all-posts" }),
  getPost: ({ params }) => blogApi.get({ url: "api/post", params }),
};
