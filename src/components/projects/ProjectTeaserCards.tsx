/**
 * Public props for a teaser card shown on the homepage grid.
 * - `title`   – Project name shown as the card heading
 * - `teaser`  – Short 1–2 line description
 * - `href`    – Where the whole card links to (article page)
 * - `image`   – Thumbnail (src + alt)
 * - `className` – Optional extra classes for layout tweaks
 */
type ProjectTeaserProps = {
  title: string;
  teaser: string;
  href: string;
  image: { src: string; alt: string };
  className?: string;
};

/**
 * ProjectTeaserCard
 * Clickable card used on the home page.
 * The entire card is a link for easier tapping, includes a thumb,
 * title, short teaser, and a non-focusable “More about the project” hint.
 */
export default function ProjectTeaserCard({
  title,
  teaser,
  href,
  image,
  className = "",
}: ProjectTeaserProps) {
  return (
    <a
      href={href}
      className={[
        "card-shadow block border",
        "p-4 transition-transform duration-200",
        "hover:-translate-y-0.5 hover:scale-[1.01]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
        "focus-visible:ring-offset-bg-light dark:focus-visible:ring-offset-bg-dark",
        className,
      ].join(" ")}
      aria-label={`Read more about ${title}`}
    >
      <article>
        <figure>
          <div className="aspect-[20/12] w-full overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="object-fit block h-full w-full"
            />
          </div>
          <figcaption className="sr-only">{title}</figcaption>
        </figure>

        <h3 className="mt-3 font-display text-2xl">{title}</h3>
        <p className="text-ml clamp-2 mt-2">{teaser}</p>

        <span
          className={["btn btn-teal", "mt-4 inline-flex justify-center"].join(" ")}
          aria-hidden="true"
        >
          More about the project
        </span>
      </article>
    </a>
  );
}
