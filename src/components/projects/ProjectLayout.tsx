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
    <article className="mx-auto max-w-3xl px-6 py-10 md:px-8 lg:px-10">
      <figure>
        <div className="card-shadow mx-auto">
          <img src={image.src} alt={image.alt} />
        </div>
      </figure>
      <h2 className="mt-6 border-b border-current pb-3 font-display text-3xl md:text-4xl">
        {title}
      </h2>
      <div className="mt-6">
        <p>{description}</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        {links.live && (
          <a
            href={links.live}
            target="_blank"
            rel="noreferrer"
            className="card-shadow inline-flex items-center gap-2 bg-teal px-4 py-2 text-text-dark hover:brightness-95"
          >
            <RocketLaunchIcon size={18} />
            Live demo
          </a>
        )}
        {links.repo && (
          <a
            href={links.repo}
            target="_blank"
            rel="noreferrer"
            className="border-line-light dark:border-line-dark card-shadow inline-flex items-center gap-2 border px-4 py-2 transition-transform hover:-translate-y-0.5"
          >
            <CodeIcon size={18} weight="bold" />
            GitHub repo
          </a>
        )}

        <div className="mt-10">
          <a
            href={backHref}
            className="inline-flex items-center gap-2 underline underline-offset-4"
          >
            <ArrowArcLeftIcon size={18} />
            Back home
          </a>
        </div>
      </div>
    </article>
  );
}
