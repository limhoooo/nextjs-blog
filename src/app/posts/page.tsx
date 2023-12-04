import FilterablePost from "@/components/post/FilterablePost";
import SectionHeader from "@/components/text/SectionHeader";
import { postApi } from "@/service/api/posts";
import { Metadata } from "next";
import React, { useState } from "react";

export const metadata: Metadata = {
  title: "All Post",
  description: "프론트엔드 개발 포스팅",
};

const Posts = async () => {
  return (
    <section className="w-[1000px] m-auto max-md:w-full">
      <SectionHeader sectionTitle="Posts" descTitle="기억보단 기록을..📚" />
      <div className="mt-6">
        <FilterablePost />
      </div>
    </section>
  );
};

export default Posts;
