import Hero from "../Hero";
import ProjectTeaserCard from "../ProjectTeaserCards";
import { projects } from "../../data/projects";

export default function Home() {
  return (
    <main className="max-w4xl mx-auto px-4 md:px-7 lg:px-7">
      <Hero />
      <section aria-labelledby="projects-title" className="mt-20">
        <div className="mb-6 border-b border-current">
          <h2 id="projects-title" className="mb-6 font-display text-2xl md:text-3xl lg:text-4xl">
            My Latest Projects
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectTeaserCard
              key={p.title}
              title={p.title}
              teaser={p.teaser}
              href={p.href}
              image={p.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
