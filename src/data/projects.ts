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
    id: "js-frameworks",
    title: "Luxo - JavaScript Frameworks",
    teaser:
      "React + MUI + TypeScript webshop with product grid, details, reviews, cart, search, and a simple checkout flow.",
    description:
      "Eminence Listings is a front-end auction platform where registered users can create listings, upload images, set end dates, and place bids. The app integrates with the Noroff v2 Auction API for authentication, credits, and bidding. It focuses on clear, accessible UI with Tailwind, simple feedback states, and helpful validation. Profiles surface credits and let users update avatars. Built with vanilla JS + Tailwind and deployed on Netlify.",
    href: "/projects/js-frameworks",
    image: {
      src: "/thumb-js-frameworks.jpg",
      alt: "Luxo webshop UI showing product cards and dark blue header.",
    },
    links: {
      live: "https://hannahoi98-js-frameworks.netlify.app",
      repo: "https://github.com/NoroffFEU/jsfw-2025-v1-hanna-jsframeworks",
    },
  },
  {
    id: "semester-project2",
    title: "Eminence Listings - Semester Project 2",
    teaser:
      "A sleek auction app to list items, place bids, and manage credits—built on the Noroff v2 API",
    description:
      "Eminence Listings is a front-end auction platform where registered users can create listings, upload images, set end dates, and place bids. The app integrates with the Noroff v2 Auction API for authentication, credits, and bidding. It focuses on clear, accessible UI with Tailwind, simple feedback states, and helpful validation. Profiles surface credits and let users update avatars. Built with vanilla JS + Tailwind and deployed on Netlify.",
    href: "/projects/semester-project2",
    image: {
      src: "/thumb-semester-project2.jpg",
      alt: "eminence listings feed mockup",
    },
    links: {
      live: "https://hannahoi98-semester-project2.netlify.app",
      repo: "https://github.com/hannahoi98/semester_project2",
    },
  },
  {
    id: "css-fw",
    title: "Wanderly - CSS Frameworks Assignment",
    teaser: "Travel-feed mockup focused on Tailwind utilities, theming, and accessible components.",
    description:
      "Wanderly is a small social media UI mock for travelers, built to practice Tailwind’s utility-first workflow. It includes a login screen (mock), feed with card layouts, user profile pages, and a consistent dark/light theme. The focus is on spacing, typography, and component reuse—not on a live backend—so forms like New Post and Edit Profile are non-functional demos. Clean semantics and responsive patterns keep the UI readable across breakpoints.",
    href: "/projects/css-frameworks",
    image: {
      src: "/thumb-css-frameworks.jpg",
      alt: "wanderly feed mockup",
    },
    links: {
      live: "https://hannahoi98-css-frameworks-ca.netlify.app",
      repo: "https://github.com/hannahoi98/css-frameworks-CA",
    },
  },
];
