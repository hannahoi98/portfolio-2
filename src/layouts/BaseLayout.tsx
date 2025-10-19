import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
