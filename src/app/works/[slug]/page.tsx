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
  const appStoreUrl = data.appStoreUrl; // App Storeリンク
  const webUrl = data.webUrl; // Webアプリリンク
  const delisted = data.delisted; // ストアから削除済みフラグ
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

        {/* アプリへのリンクセクション */}
        <div className="mt-8 mb-4">
          {appStoreUrl && !delisted && (
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/images/AppStoreBadge.svg"
                alt="Download on the App Store"
                width={135}
                height={45}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
          )}

          {webUrl && (
            <a
              href={webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-6 py-3 rounded-lg ${glassmorphism} hover:bg-white/20 transition-all font-medium`}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Webアプリを開く
            </a>
          )}

          {delisted && (
            <div className={`inline-flex items-center px-6 py-3 rounded-lg ${glassmorphism} text-gray-400`}>
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              このアプリは現在ストアから削除されています
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
