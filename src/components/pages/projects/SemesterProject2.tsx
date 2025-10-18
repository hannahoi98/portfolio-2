import ProjectLayout from "../../projects/ProjectLayout";
import { projects } from "../../../data/projects";

export default function SemesterProject2() {
  const project = projects.find((p) => p.id === "semester-project2");
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
