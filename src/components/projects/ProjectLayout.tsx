import { ArrowArcLeftIcon, CodeIcon, RocketLaunchIcon } from "@phosphor-icons/react";

type Image = { src: string; alt: string };
type Links = { live?: string; repo?: string };

type ProjectLayoutProps = {
  title: string;
  description: string;
  image: Image;
  links?: Links;
  backHref?: string;
};

export default function ProjectLayout({
  title,
  description,
  image,
  links = {},
  backHref = "/",
}: ProjectLayoutProps) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-10 md:max-w-4xl md:px-8 lg:max-w-5xl lg:px-10">
      <div className="mb-4 flex justify-end">
        <a href={backHref} className="btn btn-butter btn-pop" aria-label="Back home">
          <ArrowArcLeftIcon size={18} />
          Back
        </a>
      </div>
      <figure>
        <div className="card-shadow">
          <img src={image.src} alt={image.alt} />
        </div>
      </figure>
      <h2 className="mt-6 border-b border-current pb-3 font-display text-3xl md:text-4xl">
        {title}
      </h2>
      <div className="mt-6">
        <p className="text-lg">{description}</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-5">
        {links.live && (
          <a href={links.live} target="_blank" rel="noreferrer" className="btn btn-teal btn-pop">
            <RocketLaunchIcon size={18} />
            Live demo
          </a>
        )}
        {links.repo && (
          <a href={links.repo} target="_blank" rel="noreferrer" className="btn btn-teal btn-pop">
            <CodeIcon size={18} weight="bold" />
            GitHub Repo
          </a>
        )}
      </div>
    </article>
  );
}
