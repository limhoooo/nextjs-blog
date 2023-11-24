"use client";
import { Post } from "@/service/api/posts";
import React, { useState } from "react";
import PostsGrid from "./PostsGrid";
import Categoires from "../layout/Categories";

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = "All Posts";
export default function FilterablePost({ posts, categories }: Props) {
  const [seleted, setSelected] = useState(ALL_POSTS);

  const filtered =
    seleted === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === seleted);

  return (
    <div>
      {/* <Categoires
        categories={[ALL_POSTS, ...categories]}
        selected={seleted}
        onClick={(seleted) => setSelected(seleted)}
      /> */}
      <PostsGrid posts={filtered} />
    </div>
  );
}
