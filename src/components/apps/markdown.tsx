import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

interface Props {
  content: string;
}

export default function MarkdownRenderer({ content }: Props) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={{
        h1: (props) => <h1 className="text-3xl font-bold" {...props} />,
        h2: (props) => <h2 className="text-2xl font-bold" {...props} />,
        h3: (props) => <h3 className="text-xl font-bold" {...props} />,
        p: (props) => <p className="my-4" {...props} />,
        a: (props) => <a className="text-blue-600 underline" {...props} />,
        ul: (props) => <ul className="list-disc list-inside" {...props} />,
        ol: (props) => <ol className="list-decimal list-inside" {...props} />,
        li: (props) => <li className="my-2" {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
