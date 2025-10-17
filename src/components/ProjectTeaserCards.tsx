type ProjectTeaserProps = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
};

export default function ProjectTeaserCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
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
          <img src={imageSrc} alt={imageAlt} className="h-full w-full object-contain" />
          <figcaption className="sr-only">{title}</figcaption>
        </figure>
        <h3 className="mt-3 font-display text-2xl">{title}</h3>
        <p className="text-ml clamp-2 mt-2">{description}</p>
      </article>
    </a>
  );
}
