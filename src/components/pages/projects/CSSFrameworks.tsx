import ProjectLayout from "../../projects/ProjectLayout";
import { projects } from "../../../data/projects";

/**
 * Project page for the **CSS Frameworks** assignment.
 * Looks up the project data by its `id` ("css-fw") and renders the shared ProjectLayout.
 * Returns `null` if the project entry is missing from `data/projects`.
 *
 * @returns {JSX.Element | null} The CSS Frameworks project page or `null` if not found.
 */
export default function CSSFrameworks() {
  const project = projects.find((p) => p.id === "css-fw");
  if (!project) return null;

  return (
    <ProjectLayout
      title={project.title}
      description={project.description}
      image={project.image}
      links={project.links}
      backHref="/"
    />
  );
}
