import { HashRouter, Route, Routes } from "react-router-dom";
import Air from "../Components/Air";
import Home from "../Components/Home";
import Movie from "../Components/Movie";
import TV from "../Components/TV";
import Header from "./Header";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Air" element={<Air />} />
        <Route path="/TV" element={<TV />} />
        <Route path="/Movie" element={<Movie />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
