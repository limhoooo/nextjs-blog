import FilterablePost from "@/components/post/FilterablePost";
import SectionHeader from "@/components/text/SectionHeader";
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
    <section className="w-[1000px] m-auto">
      <SectionHeader sectionTitle="Posts" descTitle="기억보단 기록을..📚" />
      <div className="mt-6">
        <FilterablePost posts={posts} categories={categories} />
      </div>
    </section>
  );
};

export default Posts;
