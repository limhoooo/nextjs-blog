import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tooltip from "../tooltip/Tooltip";
const LINKS = [
  {
    iconPath: "github_icon",
    url: "https://github.com/limhoooo",
    target: "_blank",
    desc: "GitHub 로 이동",
  },
  // {
  //   iconPath: "notion_icon",
  //   url: "https://few-tarragon-4ce.notion.site/fd8122d6b1ee44fd89016b1bf807d5f2",
  //   target: "_blank",
  //   desc: "Notion 이력서로 이동",
  // },
  {
    iconPath: "tistory_icon",
    url: "https://limhoooo.tistory.com/",
    target: "_blank",
    desc: "Tistory 로 이동",
  },
  {
    iconPath: "gmail_icon",
    url: "/contact",
    target: "",
    desc: "메일쓰기로 이동",
  },
];

export default function ContactIcons() {
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
          data-tooltip-id={item.iconPath}
          aria-label={item.desc}
        >
          <Image
            src={`/images/${item.iconPath}.png`}
            alt={item.iconPath}
            width={36}
            height={36}
          />
          <Tooltip id={item.iconPath} place="bottom" content={item.desc} />
        </Link>
      ))}
    </ul>
  );
}
