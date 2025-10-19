import Hero from "../sections/Hero";
import ProjectTeaserCard from "../projects/ProjectTeaserCards";
import { projects } from "../../data/projects";

/**
 * Home page.
 * - Renders the opening Hero section.
 * - Lists recent projects using `ProjectTeaserCard`, fed by `data/projects`.
 * - Uses `aria-labelledby` so screen readers announce the “My Latest Projects” heading for the section.
 *
 * @returns {JSX.Element} The portfolio homepage.
 */
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
