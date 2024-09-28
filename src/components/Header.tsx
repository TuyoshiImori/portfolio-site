"use client";
import { config } from "@/config";
import { cn, glassmorphism } from "@/libs/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
}

const menuItems: MenuItem[] = [
  { name: "blog", href: "/" },
  { name: "about", href: "/about" },
  { name: "works", href: "/works" },
  { name: "contact", href: "/contact" },
];
export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="hidden md:flex items-center">
        {menuItems.map((item) => (
          <div key={item.href} className="ml-4 md:ml-8">
            <a
              href={item.href}
              target={item.openInNewTab ? "_blank" : "_self"}
              className={cn(
                "hover:text-gray-900",
                pathname === item.href && "font-semibold"
              )}
            >
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export const Header: FunctionComponent = () => {
  return (
    <header className="absolute z-10 w-full top-0 px-20 py-4">
      <section
        className={`flex items-center justify-between px-12 py-4 rounded-full ${glassmorphism}`}
      >
        <Link href="/">
          <h1 className="text-4xl font-bold tracking-tighter leading-tight">
            {config.blog.name}
          </h1>
        </Link>
        <Navigation />
      </section>
    </header>
  );
};
