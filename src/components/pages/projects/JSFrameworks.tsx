import ProjectLayout from "../../projects/ProjectLayout";
import { projects } from "../../../data/projects";

/**
 * Project page for the **JavaScript Frameworks** assignment.
 * Finds the project by `id` ("js-frameworks") and renders ProjectLayout.
 * Returns `null` if the project entry is missing.
 *
 * @returns {JSX.Element | null} The JS Frameworks project page or `null` if not found.
 */
export default function JSFrameworks() {
  const project = projects.find((p) => p.id === "js-frameworks");
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
