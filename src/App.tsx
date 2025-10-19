import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import CSSFrameworks from "./components/pages/projects/CSSFrameworks";
import BaseLayout from "./layout/BaseLayout";
import SemesterProject2 from "./components/pages/projects/SemesterProject2";
import JSFrameworks from "./components/pages/projects/JSFrameworks";

/**
 * App routes
 * Sets up all public routes using React Router.
 * Layout:
 *   - BaseLayout wraps everything (Header + <Outlet> + Footer)
 *   - / → Home
 *   - /projects/css-frameworks
 *   - /projects/semester-project2
 *   - /projects/js-frameworks
 */
export default function App() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="/projects/css-frameworks" element={<CSSFrameworks />} />
        <Route path="/projects/semester-project2" element={<SemesterProject2 />} />
        <Route path="/projects/js-frameworks" element={<JSFrameworks />} />
      </Route>
    </Routes>
  );
}
