import MarkdownRenderer from "@/components/apps/markdown";
import { getMarkdownData } from "@/libs/getMarkdownData";
import React from "react";

export default function TermCondition() {
  const filePath = `public/terms.md`;
  const { content } = getMarkdownData(filePath);
  return (
    <div className="flex flex-col justify-center items-center justify-items-center">
      <div className="px-8 md:w-160">
        <MarkdownRenderer content={content} />
      </div>
    </div>
  );
}
