"use client";
import { Post, postApi } from "@/service/api/posts";
import React, { useCallback, useEffect, useState } from "react";
import PostsGrid from "./PostsGrid";
import Categoires from "../layout/Categories";
import useInfiniteScroll from "@/hook/useInfiniteScroll";

const ALL_POSTS = "All Posts";
export default function FilterablePost() {
  const [posts, setPosts] = useState<Post[]>();
  const [seleted, setSelected] = useState(ALL_POSTS);

  const getAllposts = useCallback(async () => {
    const postsLength = posts ? posts.length : 0;
    const { response } = await postApi.getAllPosts({
      params: { count: postsLength },
    });
    setPosts(response);
  }, [posts]);

  useInfiniteScroll(getAllposts);

  useEffect(() => {
    getAllposts();
  }, []);

  const categories = [...new Set(posts?.map((post) => post.category))];

  const filtered =
    seleted === ALL_POSTS
      ? posts
      : posts?.filter((post) => post.category === seleted);

  return (
    <div onScroll={getAllposts}>
      {/* <Categoires
        categories={[ALL_POSTS, ...categories]}
        selected={seleted}
        onClick={(seleted) => setSelected(seleted)}
      /> */}
      {filtered && <PostsGrid posts={filtered} />}
    </div>
  );
}
