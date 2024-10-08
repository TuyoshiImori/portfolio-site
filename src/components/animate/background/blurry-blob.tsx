import { cn } from "@/libs/utils";
interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function BlurryBlob({ className }: BlobProps) {
  return (
    <div className="flex items-center justify-center fixed w-full h-screen z-[-1] p-4">
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          className={cn(
            "rounded-full p-8 mix-blend-multiply filter",
            className
          )}
        />
      </div>
    </div>
  );
}
