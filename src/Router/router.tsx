import { HashRouter, Route, Routes } from "react-router-dom";
import Air from "../Components/Air/Air";
import TV from "../Components/TV/TV";
import Home from "../Components/Home/Home";
import Header from "./Header";
import HomeContents from "../Components/Home/HomeContents";
import TVContents from "../Components/TV/TVContents";
import HomeTrailer from "../Components/Home/HomeTrailer";
import TVTrailer from "../Components/TV/TVTrailer";
import Search from "../Components/Search/Search";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/air" element={<Air />} />
        <Route path="/tV" element={<TV />} />
        <Route path="/contents/home/:id" element={<HomeContents />} />
        <Route path="/contents/tv/:id" element={<TVContents />} />
        <Route path="/contents/home/trailer/:id" element={<HomeTrailer />} />
        <Route path="/contents/tv/trailer/:id" element={<TVTrailer />} />
        <Route path="/search/*" element={<Search />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
