import Utterances from "@/components/github/Utterances";
import AdjacentPostCard from "@/components/post/AdjacentPostCard";
import PostContent from "@/components/post/PostContent";
import { PostData, postApi } from "@/service/api/posts";
import Image from "next/image";
import React from "react";
type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const { response } = await postApi.getPost({ params: slug });
  if (response) {
    const { title, description } = response;
    return {
      title,
      description,
    };
  }
}

export async function generateStaticParams() {
  const { response: posts } = await postApi.getAllPosts();
  return (
    posts &&
    posts.map((post) => ({
      slug: post.path,
    }))
  );
}

export default async function PostPage({ params: { slug } }: Props) {
  const { response: post } = await postApi.getPost({ params: slug });
  const { next, prev } = post as PostData;
  return (
    <article className="rounded-2xl overflow-hidden w-[650px] m-auto  m-4 ">
      {post && <PostContent post={post} />}
      <Utterances />
      <section className="flex shadow-md overflow-hidden">
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
}
