import getWorks from "@/libs/getWorks";
import FlipCard from "@/components/animate/card/flip-card";

export default async function Works() {
  const works = await getWorks;

  return (
    <section>
      <div className="">Works</div>
      <div>
        {works.slice(0, 4).map((post) => {
          const imagePath = post.frontmatter.image?.startsWith("/")
            ? post.frontmatter.image
            : "/works/" + post.frontmatter.image;
          return (
            <FlipCard
              key={post.slug}
              image={imagePath}
              title={"タイトル"}
              description={"説明文"}
            />
          );
        })}
      </div>
    </section>
  );
}
