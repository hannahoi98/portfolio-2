import ProjectLayout from "../../projects/ProjectLayout";
import { projects } from "../../../data/projects";

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
