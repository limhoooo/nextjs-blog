import TableView from "@/components/table/TableView";
import SectionHeader from "@/components/text/SectionHeader";
import { articleApi } from "@/service/api/article";
import React from "react";

const tableHeader = ["No", "Title", "Summary", "Tags"];
export default async function Article() {
  const { response: articles } = await articleApi.getAllArticle();
  console.log(articles);

  return (
    <section>
      <SectionHeader
        sectionTitle="Article"
        descTitle="두고두고 읽으면 좋을 기술 아1티클 모음 📚"
      />
      <div className="mt-3">
        {articles && (
          <TableView tableHeader={tableHeader} tableBody={articles} />
        )}
      </div>
    </section>
  );
}
