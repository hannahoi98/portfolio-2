import { Routes, Route } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import Home from "./components/pages/Home";

export default function App() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
