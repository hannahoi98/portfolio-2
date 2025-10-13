import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <h2
            id="hero-title"
            className="border-b border-current font-display text-2xl md:text-3xl lg:text-4xl"
          >
            About Me
          </h2>

          <div className="space-y-4 text-base md:text-lg">
            <p>
              My name is <strong className="font-semibold">Hanna Høidahl</strong>, a front-end
              developer based in Oslo, Norway. I’m currently finishing the Front-End Development
              program at Noroff, where I’m building the skills to create{" "}
              <strong className="font-semibold">user-friendly</strong> and{" "}
              <strong className="font-semibold">responsive</strong> web experiences.
            </p>

            <p>
              My interests lean toward the analytical side — what makes a site or app successful —
              and ensuring a seamless user experience from first load to last interaction. I
              especially enjoy working with <strong className="font-semibold">React</strong> and
              modern UI frameworks (e.g. Material Design) to create clear, accessible interfaces.
            </p>

            <p className="font-semibold">Tech Stack:</p>
            <ul className="flex flex-wrap items-center gap-4">
              <li aria-label="React">
                <Icon icon="logos:react" className="h-10 w-10" />
              </li>
              <li aria-label="TypeScript">
                <Icon icon="logos:typescript-icon" className="h-10 w-10" />
              </li>
              <li aria-label="JavaScript">
                <Icon icon="logos:javascript" className="h-10 w-10" />
              </li>
              <li aria-label="HTML">
                <Icon icon="logos:html-5" className="h-10 w-10" />
              </li>
              <li aria-label="CSS">
                <Icon icon="logos:css-3" className="h-10 w-10" />
              </li>
              <li aria-label="Tailwind CSS">
                <Icon icon="logos:tailwindcss-icon" className="h-10 w-10" />
              </li>
            </ul>
          </div>
        </div>
        <figure className="order-first justify-self-center md:order-none md:justify-self-end">
          <img
            src="/imgMe.jpg"
            alt="Portrait of Hanna Høidahl"
            className="card-shadow block h-auto max-h-[480px] w-full max-w-[420px] border border-elev object-cover"
          />
          <figcaption className="sr-only">Portrait of Hanna Høidahl</figcaption>
        </figure>
      </div>
    </section>
  );
}
