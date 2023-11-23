import React, { useEffect, useState } from "react";
import SectionHeader from "../text/SectionHeader";
import GithubCalendar from "../github/GithubCalendar";

export default function GithubSection() {
  return (
    <article className="my-4">
      <SectionHeader
        sectionTitle="Github"
        descTitle={["코딩 여행의 흔적을 기록하는 GitHub 저장소입니다."]}
        moveLink="https://github.com/limhoooo"
      />

      <div className="mt-4 py-5 flex justify-center border border-gray-200">
        <GithubCalendar id={"limhoooo"} />
      </div>
    </article>
  );
}
