import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

/**
 * BaseLayout
 * Wraps every page with:
 * - Site chrome (Header + Footer)
 * - A themed background (light/dark)
 * - A <main> area where the current route is rendered via <Outlet />
 *
 * Notes:
 * - <Outlet /> is where child routes (Home, Project pages, etc.) appear.
 * - Header/Footer stay the same across pages.
 * - Small top margin on <main> for breathing room at different breakpoints.
 */
export default function BaseLayout() {
  return (
    <div className="min-h-screen bg-bg-light text-text-light dark:bg-bg-dark dark:text-text-dark">
      <div className="mx-auto w-full">
        <Header />
        <main className="mt-4 md:mt-6 lg:mt-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
