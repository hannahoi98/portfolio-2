import Hero from "../Hero";
import ProjectTeaserCard from "../ProjectTeaserCards";

export default function Home() {
  const projects = [
    {
      title: "Wanderly - CSS Frameworks Assignment",
      description:
        "A Tailwind-driven UI mockup focusing on utility-first design, theming, and accessible components.",
      href: "/projects/wanderly",
      imageSrc: "/public/thumb-css-frameworks.jpg",
      imageAlt: "Preview of the CSS Frameworks project UI",
    },
  ];
  return (
    <main>
      <Hero />;
      <section aria-labelledby="projects-title" className="mt-10">
        <h2 id="projects-title" className="mb-6 font-display text-2xl md:text-3xl lg:text-4xl">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectTeaserCard
              key={p.title}
              title={p.title}
              description={p.description}
              href={p.href}
              imageSrc={p.imageSrc}
              imageAlt={p.imageAlt}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
