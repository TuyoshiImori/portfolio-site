import MarkdownRenderer from "@/components/apps/markdown";
import WorksGrid from "@/components/apps/works-grid";
import { getMarkdownData } from "@/libs/getMarkdownData";

export default function Home() {
  const filePath = `public/profile.md`;
  const { content } = getMarkdownData(filePath);

  return (
    <div className="flex justify-center items-center justify-items-center">
      <main className="flex flex-col space-y-8 row-start-2 items-center md:items-start w-200">
        <MarkdownRenderer content={content} />
        <WorksGrid />
      </main>
    </div>
  );
}
