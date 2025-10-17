export type Project = {
  id: string;
  title: string;
  teaser: string;
  description: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
  links?: {
    live?: string;
    repo?: string;
  };
};

export const projects: Project[] = [
  {
    id: "css-fw",
    title: "Wanderly - CSS Frameworks Assignment",
    teaser: "Travel-feed mockup focused on Tailwind utilities, theming, and accessible components.",
    description: "",
    href: "/projects/css-frameworks",
    image: {
      src: "/thumb-css-frameworks.jpg",
      alt: "wanderly feed mockup",
    },
    links: {
      live: "https://hannahoi98-css-frameworks-ca.netlify.app/",
      repo: "https://github.com/hannahoi98/css-frameworks-CA",
    },
  },
];
