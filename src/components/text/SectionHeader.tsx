import React from "react";

type Props = {
  sectionTitle: string;
  descTitle?: string | string[];
};

export default function SectionHeader({ sectionTitle, descTitle }: Props) {
  return (
    <span>
      <h2 className="section-title">{sectionTitle}</h2>
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
