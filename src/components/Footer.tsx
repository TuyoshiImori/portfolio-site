"use client";
import { config } from "@/config";
import Link from "next/link";
import { FunctionComponent } from "react";

const links = [
  { href: "/terms", label: "利用規約" },
  { href: "/privacy-policy", label: "プライバシーポリシー" },
];

export const Footer: FunctionComponent = () => {
  return (
    <section className="mt-8 md:mt-16 mb-12">
      <div className="flex flex-col items-center">
        <div className="text-base text-muted-foreground space-x-4 hidden lg:block">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <hr className="w-2/3 mt-4 mb-4" />
        <div className="text-base text-muted-foreground">
          © {new Date().getFullYear()} - {config.blog.copyright}
        </div>
      </div>
    </section>
  );
};
