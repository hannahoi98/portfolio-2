import { GithubLogoIcon, LinkedinLogoIcon, EnvelopeIcon } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="mt-8 px-6 py-6 md:py-8 lg:py-10">
      <div className="mx-auto border-t border-current px-4 pt-6 md:px-7 lg:px-7">
        <nav aria-label="Social links">
          <ul className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-6">
            <li>
              <a
                href="https://github.com/hannahoi98"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-light dark:hover:text-butter dark:focus-visible:ring-offset-bg-dark"
                aria-label="GitHub (opens in new tab)"
              >
                <GithubLogoIcon size={30} aria-hidden="true" />
                <span className="sr-only">GitHub</span>
                <p className="text-lg">Hannahoi98</p>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/hanna-høidahl-94b5b316b"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-light dark:hover:text-butter dark:focus-visible:ring-offset-bg-dark"
                aria-label="LinkedIn (opens in new tab)"
              >
                <LinkedinLogoIcon size={30} aria-hidden="true" />
                <span className="sr-only">LinkedIn</span>
                <p className="text-lg">Hanna Høidahl</p>
              </a>
            </li>

            <li>
              <a
                href="mailto:hannahoeidahl@gmail.com"
                className="inline-flex items-center gap-2 transition-colors hover:text-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-light dark:hover:text-butter dark:focus-visible:ring-offset-bg-dark"
                aria-label="Send email to hannahoeidahl@gmail.com"
              >
                <EnvelopeIcon size={30} aria-hidden="true" />
                <span className="sr-only">Email</span>
                <p className="text-lg">hannahoeidahl@gmail.com</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
