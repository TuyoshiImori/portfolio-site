import { cn } from "@/lib/utils";
interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor: string;
  secondBlobColor: string;
}

export default function BlurryBlob({
  className,
  firstBlobColor,
  secondBlobColor,
}: BlobProps) {
  return (
    <div className="min-h-52 min-w-52 flex items-center justify-center fixed top-0 left-0 w-full h-screen z-[-1]">
      <div className="relative w-full max-w-lg flex items-center justify-center">
        {/* 1つ目のblob */}
        <div
          className={cn(
            "absolute h-72 w-72 animate-pop-blob rounded-full bg-blue-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter",
            "bottom-0 left-0 translate-x-1/2 translate-y-1/2",
            className,
            firstBlobColor
          )}
        />
        {/* 2つ目のblob */}
        <div
          className={cn(
            "absolute h-72 w-72 animate-pop-blob rounded-full bg-purple-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter",
            "top-0 right-0 -translate-x-1/2 -translate-y-1/2",
            className,
            secondBlobColor
          )}
        />
      </div>
    </div>
  );
}
