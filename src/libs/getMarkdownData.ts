import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface MarkdownData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
  content: string;
}

export function getMarkdownData(filePath: string): MarkdownData {
  const absolutePath = path.join(process.cwd(), filePath); // ファイルの絶対パスを生成
  const fileContents = fs.readFileSync(absolutePath, "utf8"); // ファイルの中身をUTF-8で読み込む
  const { data, content } = matter(fileContents); // Markdownファイルのfrontmatterと本文を抽出
  return { data, content };
}
