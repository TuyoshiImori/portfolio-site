import path from "path";
import fs from "fs"; // Node.jsのファイルシステムモジュールをインポート
import matter from "gray-matter";
import { glassmorphism } from "@/libs/utils";
import Image from "next/image";
import imageSize from "image-size";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import Markdown from "react-markdown";

export default function Home({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "public/works", `${slug}.md`); // ファイルの絶対パスを生成
  const fileContents = fs.readFileSync(filePath, "utf8"); // ファイルの中身をUTF-8で読み込む
  const { data, content } = matter(fileContents); // Markdownファイルのfrontmatterと本文を抽出
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
      <div className=" items-center">
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
      <div className="items-start">
        <div className="text-base font-bold mt-4">{title}</div>
        <div className="text-base font-bold mt-4">{date}</div>
        <div className="text-base font-bold mt-4">{tags}</div>
        <Markdown
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
          components={{
            h1: "h2",
            h2: "h3",
            h3: "h4",
            a(props) {
              const { href, children } = props;
              return href?.startsWith("/") ? (
                <Link href={href}>{children}</Link>
              ) : (
                <a href={href} rel="noreferrer" target="_blank">
                  {children}
                </a>
              );
            },
            img(props) {
              const { src, alt, width, height } = props;
              if (!src) return <span>src が指定されていません。</span>;

              const image =
                process.env.NODE_ENV === "development"
                  ? src?.startsWith("/")
                    ? src
                    : "/works/" + src
                  : src;

              return (
                <>
                  <Image
                    alt={alt ?? "alt なし"}
                    src={image}
                    height={
                      height
                        ? Number(height)
                        : imageSize(
                            process.env.NODE_ENV === "development"
                              ? "public" + imagePath
                              : imagePath
                          ).height
                    }
                    width={
                      width
                        ? Number(width)
                        : imageSize(
                            process.env.NODE_ENV === "development"
                              ? "public" + imagePath
                              : imagePath
                          ).width
                    }
                  />
                  {alt && <span>{alt}</span>}
                </>
              );
            },
          }}
        >
          {content}
        </Markdown>
      </div>
    </div>
  );
}
