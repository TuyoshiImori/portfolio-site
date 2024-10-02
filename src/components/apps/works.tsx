import getWorks from "@/libs/getWorks";
import FlipCard from "@/components/animate/card/flip-card";

export default async function Works() {
  const works = await getWorks;

  return (
    <section>
      <div className="">Works</div>
      <div className="grid grid-cols-4 gap-12">
        {works.map((post) => {
          const imagePath = post.frontmatter.image?.startsWith("/")
            ? post.frontmatter.image
            : "/works/" + post.frontmatter.image;
          return (
            <FlipCard
              key={post.slug}
              image={imagePath}
              title={post.frontmatter.title}
              description={post.frontmatter.description}
            />
          );
        })}
      </div>
    </section>
  );
}
