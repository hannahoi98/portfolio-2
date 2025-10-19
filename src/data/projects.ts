/**
 * Project metadata used to render teaser cards and detail pages.
 */
export type Project = {
  /** Stable id used for routing and lookups (e.g. "css-fw"). */
  id: string;
  /** Card and page title. */
  title: string;
  /** Short 2-line teaser shown on the home page cards (~120–130 chars). */
  teaser: string;
  /** Longer description for the project detail page. */
  description: string;
  /** Route to the project page (internal link). */
  href: string;
  /** Thumbnail image used on cards and the article header. */
  image: {
    /** Path to the thumbnail in /public. */
    src: string;
    /** Short, meaningful alt text for the image. */
    alt: string;
  };
  /** Optional external links for “Live demo” and “GitHub repo”. */
  links?: {
    live?: string;
    repo?: string;
  };
};

/** Portfolio projects shown on the home page and routed to detail pages. */
export const projects: Project[] = [
  {
    id: "js-frameworks",
    title: "Luxo - JavaScript Frameworks",
    teaser:
      "React + MUI + TypeScript webshop with product grid, details, reviews, search, cart, and a simple checkout—responsive, accessible.",
    description:
      "Luxo is a React + Material UI + TypeScript webshop featuring a product grid, detailed product pages with reviews and tags, a fully typed cart with quantity control, and search filtering. It uses React Router for pages, toast feedback for actions, and form validation where needed. Built with accessibility and responsiveness in mind, and deployed to Netlify.",
    href: "/projects/js-frameworks",
    image: {
      src: "/thumb-js-frameworks.jpg",
      alt: "Luxo webshop UI showing product cards and dark blue header.",
    },
    links: {
      live: "https://hannahoi98-js-frameworks.netlify.app",
      repo: "https://github.com/NoroffFEU/jsfw-2025-v1-hanna-jsframeworks/blob/main/README.md",
    },
  },
  {
    id: "semester-project2",
    title: "Eminence Listings - Semester Project 2",
    teaser:
      "Auction app to list items, place bids, and manage credits with profiles—built on the Noroff v2 API and styled with Tailwind.",
    description:
      "Eminence Listings is a front-end auction platform where registered users can create listings, upload images, set end dates, and place bids. The app integrates with the Noroff v2 Auction API for authentication, credits, and bidding. It focuses on clear, accessible UI with Tailwind, simple feedback states, and helpful validation. Profiles surface credits and let users update avatars. Built with vanilla JS + Tailwind and deployed on Netlify.",
    href: "/projects/semester-project2",
    image: {
      src: "/thumb-semester-project2.jpg",
      alt: "eminence listings feed mockup",
    },
    links: {
      live: "https://hannahoi98-semester-project2.netlify.app",
      repo: "https://github.com/hannahoi98/semester_project2/blob/main/README.md",
    },
  },
  {
    id: "css-fw",
    title: "Wanderly - CSS Frameworks Assignment",
    teaser:
      "Travel-feed mockup exploring Tailwind utilities, spacing, theming, and accessible components—includes login, feed, and profile UI.",
    description:
      "Wanderly is a small social media UI mock for travelers, built to practice Tailwind’s utility-first workflow. It includes a login screen (mock), feed with card layouts, user profile pages, and a consistent dark/light theme. The focus is on spacing, typography, and component reuse—not on a live backend—so forms like New Post and Edit Profile are non-functional demos. Clean semantics and responsive patterns keep the UI readable across breakpoints.",
    href: "/projects/css-frameworks",
    image: {
      src: "/thumb-css-frameworks.jpg",
      alt: "wanderly feed mockup",
    },
    links: {
      live: "https://hannahoi98-css-frameworks-ca.netlify.app",
      repo: "https://github.com/hannahoi98/css-frameworks-CA/blob/main/README.md",
    },
  },
];
