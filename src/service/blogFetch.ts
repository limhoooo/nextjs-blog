import Fetch from "@/util/HttpClient";

export const blogApi = new Fetch();
blogApi.setHeaders({
  "Content-Type": "application/json; charset=utf-8",
});
blogApi.setBaseUrl(String(process.env.NEXT_PUBLIC_BASE_URL));
