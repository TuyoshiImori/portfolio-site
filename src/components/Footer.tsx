"use client";
import { config } from "@/config";
import { FunctionComponent } from "react";

export const Footer: FunctionComponent = () => {
  return (
    <section className="mt-8 md:mt-16 mb-12">
      <div className="flex items-center justify-center">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} - {config.blog.copyright}
        </div>
      </div>
    </section>
  );
};
