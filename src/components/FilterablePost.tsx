"use client";
import { Post } from "@/service/posts";
import React, { useState } from "react";
import PostsGrid from "./PostsGrid";
import Categoires from "./Categories";

type Props = {
  posts: Post[];
  categories: string[];
  children: React.ReactNode;
};

const ALL_POSTS = "All Posts";
export default function FilterablePost({ posts, categories }: Props) {
  const [seleted, setSelected] = useState(ALL_POSTS);

  const filtered =
    seleted === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === seleted);

  return (
    <section className="flex m-4">
      <PostsGrid posts={filtered} />
      <Categoires
        categories={[ALL_POSTS, ...categories]}
        selected={seleted}
        onClick={(seleted) => setSelected(seleted)}
      />
    </section>
  );
}
