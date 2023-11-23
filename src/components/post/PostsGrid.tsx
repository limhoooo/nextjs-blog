import React from "react";
import { Post } from "@/service/posts";
import PostCard from "./PostCard";
import PostTable from "./PostTable";

export default function PostsGrid({ posts }: { posts: Post[] }) {
  return (
    <ul>
      {posts.map((item) => (
        <PostTable key={item.path} post={item} />
      ))}
    </ul>
  );
}
