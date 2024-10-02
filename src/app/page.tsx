import Works from "@/components/apps/works";

export default function Home() {
  return (
    <div className="flex justify-center items-center justify-items-center">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-200 h-full min-h-screen">
        <Works />
      </main>
    </div>
  );
}
