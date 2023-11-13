import { getAllPosts } from "@/service/posts";
import React from "react";
import PostCard from "./PostCard";
import MultiCarousel from "./MultiCarousel";
import SectionHeader from "./text/SectionHeader";

export default async function CarouselPosts() {
  const posts = await getAllPosts();

  return (
    <section className="my-4">
      <SectionHeader
        sectionTitle="Posting"
        descTitle="개발관련 내용들을 포스팅 합니다."
      />
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
