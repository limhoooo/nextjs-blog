import TableView from "@/components/table/TableView";
import SectionHeader from "@/components/text/SectionHeader";
import { getArticle } from "@/service/article";
import React from "react";

const tableHeader = ["No", "Title", "Summary", "Tags"];
export default async function Article() {
  const articles = await getArticle();

  return (
    <section>
      <SectionHeader
        sectionTitle="Article"
        descTitle="두고두고 읽으면 좋을 기술 아티클 모음 📚"
      />

      <TableView tableHeader={tableHeader} tableBody={articles} />
    </section>
  );
}
