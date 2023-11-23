import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  sectionTitle: string;
  descTitle?: string | string[];
  moveLink?: string;
};

export default function SectionHeader({
  sectionTitle,
  descTitle,
  moveLink,
}: Props) {
  return (
    <span aria-label="section title box">
      <div className="flex items-center">
        <h2 className="section-title">{sectionTitle}</h2>
        {moveLink && (
          <Link href={moveLink} target="_blank">
            <Image
              className="mt-2 ml-1"
              src={"/images/move.png"}
              width={20}
              height={20}
              alt="move icon"
            />
          </Link>
        )}
      </div>
      {descTitle &&
        (typeof descTitle === "string" ? (
          <p className="desc-title">{descTitle}</p>
        ) : (
          descTitle.map((text) => (
            <p key={text} className="desc-title">
              {text}
            </p>
          ))
        ))}
    </span>
  );
}
