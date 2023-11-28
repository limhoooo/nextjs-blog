import { postApi } from "@/service/api/posts";
import React from "react";
import PostCard from "../post/PostCard";
import MultiCarousel from "../carousel/MultiCarousel";
import SectionHeader from "../text/SectionHeader";

export default async function CarouselPosts() {
  const { response: posts } = await postApi.getAllPosts({
    params: { count: 0 },
  });

  return (
    <article className="my-4">
      <SectionHeader
        sectionTitle="Posting"
        descTitle="개발관련 내용들을 포스팅 합니다."
        moveLink="posts"
      />
      <MultiCarousel>
        {posts && posts.map((post) => <PostCard key={post.path} post={post} />)}
      </MultiCarousel>
    </article>
  );
}
