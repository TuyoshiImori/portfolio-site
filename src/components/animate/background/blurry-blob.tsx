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
    <div className="min-h-52 min-w-52 items-center justify-center">
      <div className="relative w-full max-w-lg">
        <div
          className={cn(
            "absolute h-72 w-72 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter left-1/2 top-1/2 -translate-x-1/4 -translate-y-1/4 ",
            className,
            firstBlobColor
          )}
        />
        <div
          className={cn(
            "absolute h-72 w-72 animate-pop-blob rounded-sm bg-purple-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter left-1/2 top-1/2 -translate-x-3/4 -translate-y-3/4",
            className,
            secondBlobColor
          )}
        />
      </div>
    </div>
  );
}
