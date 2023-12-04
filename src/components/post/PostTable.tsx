import { Post } from "@/service/api/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  post: Post;
};
export default function PostTable({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <li className="mb-16 group">
      <Link href={`/posts/${path}`}>
        <article className="flex items-center max-md:block max-md:text-center">
          <Image
            className="h-60 mr-11 rounded-lg transition group-hover:-translate-x-1  group-hover:-translate-y-1 group-hover:shadow-xl max-md:m-auto max-md:mb-4"
            src={`/images/posts/${path}.png`}
            alt={title}
            width={240}
            height={240}
          />
          <div>
            <h3 className="w-full text-3xl truncate font-bold mb-3 transition  group-hover:text-[#3182f6]">
              {title}
            </h3>
            <p className="w-full text-md text-gray-700 truncate text-center mb-3">
              {description}
            </p>
            <span className="text-sm rounded-lg bg-green-100 px-2 my-2">
              {category}
            </span>
          </div>
        </article>
      </Link>
    </li>
  );
}
