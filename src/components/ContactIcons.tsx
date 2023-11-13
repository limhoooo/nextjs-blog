import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ContactIcons() {
  const LINKS = [
    {
      iconPath: "github_icon",
      url: "https://github.com/limhoooo",
      target: "_blank",
    },
    {
      iconPath: "notion_icon",
      url: "https://few-tarragon-4ce.notion.site/fd8122d6b1ee44fd89016b1bf807d5f2",
      target: "_blank",
    },
    {
      iconPath: "tistory_icon",
      url: "https://limhoooo.tistory.com/",
      target: "_blank",
    },
    {
      iconPath: "gmail_icon",
      url: "/contact",
      target: "",
    },
  ];
  const iconLinkClass =
    "w-11 h-11 flex justify-center items-center  hover:bg-gray-200 rounded-full	";
  return (
    <ul className="flex gap-4 my-2 max-md:justify-center">
      {LINKS.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          target={item.target}
          className={iconLinkClass}
        >
          <Image
            src={`/images/${item.iconPath}.png`}
            alt={item.iconPath}
            width={36}
            height={36}
          />
        </Link>
      ))}
    </ul>
  );
}
