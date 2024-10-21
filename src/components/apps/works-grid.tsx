import getWorks from "@/libs/getWorks";
import AppCard from "@/components/animate/card/app-card";

export default async function WorksGrid() {
  const works = await getWorks;

  return (
    <section>
      <div className="text-3xl font-bold mb-4">作品一覧</div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {works.map((post) => {
          const imagePath = post.frontmatter.image?.startsWith("/")
            ? post.frontmatter.image
            : "/works/" + post.frontmatter.image;
          return (
            <AppCard
              key={post.slug}
              image={imagePath}
              title={post.frontmatter.title}
              description={post.frontmatter.description}
              slug={post.slug}
            />
          );
        })}
      </div>
    </section>
  );
}
