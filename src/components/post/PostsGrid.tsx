import React from "react";
import { Post } from "@/service/api/posts";
import PostCard from "./PostCard";
import PostTable from "./PostTable";

export default function PostsGrid({ posts }: { posts: Post[] }) {
  return (
    <ul>
      {posts.map((item, index) => (
        <PostTable key={index} post={item} />
      ))}
    </ul>
  );
}
