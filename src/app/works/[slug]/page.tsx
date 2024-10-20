import { glassmorphism } from "@/libs/utils";
import Image from "next/image";
import imageSize from "image-size";
import MarkdownRenderer from "@/components/apps/markdown";
import { getMarkdownData } from "@/libs/getMarkdownData";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "public/works", `${slug}.md`); // ファイルの絶対パスを生成

  // ファイルの中身を取得
  const fileContents = fs.readFileSync(filePath, "utf8"); // ファイルの中身をUTF-8で読み込む
  const { data } = matter(fileContents); // Markdownファイルのfrontmatterと本文を抽出

  const title = data.title; // 記事のタイトル
  return {
    title: title,
  };
}
export default function WorkSlugCondition({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const filePath = `public/works/${slug}.md`;
  const { data, content } = getMarkdownData(filePath);
  const title = data.title; // タイトル
  const date = data.date; // 作成日
  const tags = data.tags ? data.tags.split(" ") : []; // タグ
  const image = data.image;
  const imagePath =
    process.env.NODE_ENV === "development"
      ? image?.startsWith("/")
        ? image
        : "/works/" + image
      : image;

  return (
    <div className="flex flex-col justify-center items-center justify-items-center">
      <div className="items-center">
        <div
          className={`h-44 w-44 rounded-3xl ${glassmorphism} flex justify-center items-center `}
        >
          <div className="h-40 w-40 ">
            <Image
              src={imagePath}
              alt="image"
              height={imageSize("public" + imagePath).height}
              width={imageSize("public" + imagePath).width}
              priority
              className="h-full w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="px-8 md:w-160">
        <div className="text-base font-bold mt-4">{title}</div>
        <div className="text-base font-bold mt-4">{date}</div>
        <div className="text-base font-bold mt-4">{tags}</div>
        <MarkdownRenderer content={content} />
      </div>
    </div>
  );
}
