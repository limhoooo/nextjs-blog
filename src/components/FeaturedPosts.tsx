import { getFeaturedPosts } from "@/service/posts";
import React from "react";
import PostsGrid from "./PostsGrid";

const FeaturedPosts = async () => {
  const posts = await getFeaturedPosts();
  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
