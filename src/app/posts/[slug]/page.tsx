import Utterances from "@/components/github/Utterances";
import AdjacentPostCard from "@/components/post/AdjacentPostCard";
import PostContent from "@/components/post/PostContent";
import { Post, PostData, postApi } from "@/service/api/posts";
import Image from "next/image";
import React from "react";
type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const { response } = await postApi.getPost({ params: slug });
  const { title, description } = response as PostData;
  return {
    title,
    description,
  };
}

export async function generateStaticParams() {
  const { response } = await postApi.getAllPosts({ params: undefined });
  if (!response) {
    console.error("Error fetching posts:", response);
    return [];
  }
  const posts = response as Post[];
  return posts.map((post) => ({
    slug: post.path,
  }));
}

export default async function PostPage({ params: { slug } }: Props) {
  const { response: post } = await postApi.getPost({ params: slug });
  const { next, prev } = post as PostData;
  return (
    <article className="rounded-2xl overflow-hidden w-[650px] m-auto  m-4 max-md:w-full">
      {post && <PostContent post={post} />}
      <Utterances />
      <section className="flex shadow-md overflow-hidden">
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
}
