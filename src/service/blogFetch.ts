import Fetch from "@/util/HttpClient";

export const blogApi = new Fetch();
blogApi.setHeaders({
  "Content-Type": "application/json; charset=utf-8",
});
blogApi.setBaseUrl("http://localhost:3000/");
