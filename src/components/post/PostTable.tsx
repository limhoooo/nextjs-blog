import { Post } from "@/service/posts";
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
    <li className="mb-16">
      <Link href={`/posts/${path}`}>
        <article className="flex items-center">
          <Image
            className="h-44 mr-11"
            src={`/images/posts/${path}.png`}
            alt={title}
            width={176}
            height={176}
          />
          <div>
            <h3 className="w-full text-xl truncate font-bold mb-3">{title}</h3>
            <p className="w-full text-sm truncate text-center mb-3">
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
