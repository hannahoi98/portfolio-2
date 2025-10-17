import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import CSSFrameworks from "./components/pages/projects/CSSFrameworks";
import BaseLayout from "./layouts/BaseLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="/projects/css-frameworks" element={<CSSFrameworks />} />
      </Route>
    </Routes>
  );
}
