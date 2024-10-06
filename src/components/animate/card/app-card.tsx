import { cn, glassmorphism } from "@/libs/utils";
import Image from "next/image";
import imageSize from "image-size";

interface AppCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description: string;
  rotate?: "x" | "y";
}

export default function AppCard({
  image,
  title,
  className,
  ...props
}: AppCardProps) {
  return (
    <div className={cn(className)} {...props}>
      <div
        className={`h-44 w-44 rounded-3xl ${glassmorphism} flex justify-center items-center`}
      >
        <div className="h-40 w-40">
          <Image
            src={image}
            alt="image"
            height={imageSize("public" + image).height}
            width={imageSize("public" + image).width}
            priority
            className="h-full w-full rounded-3xl"
          />
        </div>
      </div>
      <div className="text-base font-bold mt-4">{title}</div>
    </div>
  );
}
