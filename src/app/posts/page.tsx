import FilterablePost from "@/components/post/FilterablePost";
import { getAllPosts } from "@/service/posts";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "All Post",
  description: "프론트엔드 개발 포스팅",
};

const Posts = async () => {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <FilterablePost posts={posts} categories={categories}>
      Posts
    </FilterablePost>
  );
};

export default Posts;
