import { HashRouter, Route, Routes } from "react-router-dom";
import Air from "../Components/Air";
import Movie from "../Components/Movie";
import TV from "../Components/TV";
import Contents from "../Components/Contents";
import Home from "../Components/Home";
import Header from "./Header";
import Trailer from "../Components/Trailer";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/air" element={<Air />} />
        <Route path="/tV" element={<TV />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/contents/:id" element={<Contents />} />
        <Route path="/contents/trailer/:id" element={<Trailer />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
