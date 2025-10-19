import {
  ArrowArcLeftIcon,
  CodeIcon,
  RocketLaunchIcon,
  LinkSimpleIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";
import { useState } from "react";

/** Image meta used by the layout. */
type Image = { src: string; alt: string };
/** Optional links shown as buttons under the article. */
type Links = { live?: string; repo?: string };

/**
 * Props for the project article layout.
 * - `title`, `description`, `image` come from your `projects` data
 * - `links` (optional) shows "Live demo" / "GitHub repo" buttons when provided
 * - `backHref` controls the small "Back" button link
 */
type ProjectLayoutProps = {
  title: string;
  description: string;
  image: Image;
  links?: Links;
  backHref?: string;
};

/**
 * ProjectLayout
 * Renders a single project page: hero image, title with a copy-link action,
 * description, and optional action buttons.
 */
export default function ProjectLayout({
  title,
  description,
  image,
  links = {},
  backHref = "/",
}: ProjectLayoutProps) {
  const [copied, setCopied] = useState(false);

  /**
   * Copies the current URL to the clipboard.
   * Falls back to a prompt if clipboard access isn’t allowed.
   */
  async function handleCopyLink() {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.prompt("Copy this link:", url);
    }
  }

  return (
    <article className="mx-auto max-w-3xl px-6 pb-10 pt-4 md:max-w-4xl md:px-8 md:pt-8 lg:max-w-5xl lg:px-10 lg:pt-10">
      <div className="mb-4 flex justify-end">
        <a
          href={backHref}
          className="btn btn-butter btn-pop px-3 py-1.5 text-base md:px-4 md:py-2 md:text-xl"
          aria-label="Back home"
        >
          <ArrowArcLeftIcon size={18} />
          Back
        </a>
      </div>
      <figure>
        <div className="card-shadow">
          <img src={image.src} alt={image.alt} />
        </div>
      </figure>
      <div className="mt-6 flex items-center justify-between border-b border-current pb-3">
        <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
        <button
          type="button"
          onClick={handleCopyLink}
          className="-m-2 rounded bg-transparent p-2 text-current hover:text-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-light dark:hover:text-butter dark:focus-visible:ring-offset-bg-dark"
          aria-label={copied ? "Link copied" : "Copy article link"}
          title={copied ? "Copied!" : "Copy link"}
        >
          {copied ? <CheckCircleIcon size={24} /> : <LinkSimpleIcon size={24} />}
        </button>
      </div>
      <div className="mt-6">
        <p className="text-lg">{description}</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-5">
        {links.live && (
          <a
            href={links.live}
            target="_blank"
            rel="noreferrer"
            className="btn btn-teal btn-pop px-3 py-1.5 text-base md:px-4 md:py-2 md:text-xl"
          >
            <RocketLaunchIcon size={18} />
            Live Demo
          </a>
        )}
        {links.repo && (
          <a
            href={links.repo}
            target="_blank"
            rel="noreferrer"
            className="btn btn-teal btn-pop px-3 py-1.5 text-base md:px-4 md:py-2 md:text-xl"
          >
            <CodeIcon size={18} weight="bold" />
            GitHub Repo
          </a>
        )}
      </div>
    </article>
  );
}
