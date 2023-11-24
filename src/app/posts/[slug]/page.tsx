import Utterances from "@/components/github/Utterances";
import AdjacentPostCard from "@/components/post/AdjacentPostCard";
import PostContent from "@/components/post/PostContent";
import { getFeaturedPosts, getPostData } from "@/service/posts";
import Image from "next/image";
import React from "react";
type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
  };
}

// Featured post 만 SSG 처리
export async function generateStaticParams() {
  const posts = await getFeaturedPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;
  return (
    <article className="rounded-2xl overflow-hidden w-[650px] m-auto  m-4 ">
      <PostContent post={post} />
      <Utterances />
      <section className="flex shadow-md overflow-hidden">
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
}
