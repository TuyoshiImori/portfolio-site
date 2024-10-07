import About from "@/components/apps/about";
import Works from "@/components/apps/works";

export default function Home() {
  return (
    <div className="flex justify-center items-center justify-items-center">
      <main className="flex flex-col gap-8 row-start-2 items-center md:items-start w-200">
        <About />
        <Works />
      </main>
    </div>
  );
}
