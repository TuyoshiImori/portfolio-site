import { cn, glassmorphism } from "@/libs/utils";
import Image from "next/image";
import imageSize from "image-size";
import Link from "next/link";

interface AppCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description: string;
  slug: string;
}

export default function AppCard({
  image,
  title,
  slug,
  className,
  ...props
}: AppCardProps) {
  return (
    <div className={cn(className)} {...props}>
      <div
        className={`h-36 w-36 rounded-3xl ${glassmorphism} flex justify-center items-center `}
      >
        <Link href={`/works/${slug}`}>
          <div className="h-32 w-32 hover:scale-95 duration-200">
            <Image
              src={image}
              alt="image"
              height={imageSize("public" + image).height}
              width={imageSize("public" + image).width}
              priority
              className="h-full w-full rounded-3xl"
            />
          </div>
        </Link>
      </div>
      <div className="text-base font-bold mt-4">{title}</div>
    </div>
  );
}
