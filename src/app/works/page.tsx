import WorksGrid from "@/components/apps/works-grid";

export default function WorksCondition() {
  return (
    <div className="flex justify-center items-center justify-items-center">
      <main className="flex flex-col gap-8 row-start-2 items-center md:items-start w-200">
        <WorksGrid />
      </main>
    </div>
  );
}
