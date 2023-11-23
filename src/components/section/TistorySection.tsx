import React from "react";
import SectionHeader from "../text/SectionHeader";

export default function TistorySection() {
  return (
    <article className="my-4">
      <SectionHeader
        sectionTitle="Tistory Blog"
        descTitle={[
          "기억보다 기록을, 그리고 지식공유를 위해 꾸준히 포스팅중 입니다.",
          "Next.js 로 개발한 블로그로 이전 작업을 진행중입니다.",
        ]}
        moveLink="https://limhoooo.tistory.com/"
      />

      <iframe
        title={"tistory blog"}
        src="https://limhoooo.tistory.com/"
        width={"100%"}
        height={"100%"}
        className="mt-4 border border-gray-200 h-96"
      />
    </article>
  );
}
