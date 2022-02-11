import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getMovieUpcoming, IGetMoviesResult } from "../Api/Api";
import { makeImagePath, NothingPoster } from "../Api/utils";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Dot from "../styles/Dot";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const rowVars = {
  start: {
    opacity: 0,
  },
  visible: { opacity: 1 },
  exit: {
    opacity: 0,
  },
};

const Home = () => {
  const { isLoading, data } = useQuery<IGetMoviesResult>("upcoming", () =>
    getMovieUpcoming(1)
  );
  const [index, setIndex] = useState(0);
  const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
    let num = Number((e.currentTarget as HTMLInputElement).value);
    setIndex(num);
  };
  const history = useNavigate();
  const [mouseMoved, setMouseMoved] = useState(false);
  const handleClick = (id: number) => {
    if (!mouseMoved) {
      history(`/contents/${id}`);
    }
  };
  const increaseIndex = () => {
    if (data) {
      const total = 4;
      setIndex((prev) => (prev === total ? 0 : prev + 1));
    }
  };
  const decreaseIndex = () => {
    if (data) {
      const total = 0;
      setIndex((prev) => (prev === total ? 4 : prev - 1));
    }
  };
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <div className="w-full h-[calc(100vh-11rem)] bg-black">
      {isLoading ? (
        "Loading"
      ) : (
        <React.Fragment>
          <div className="w-full h-[calc(100vh-11rem)]">
            <div className=" w-full  relative flex justify-center ">
              <AnimatePresence initial={false}>
                <motion.div
                  variants={rowVars}
                  initial="start"
                  animate="visible"
                  exit="exit"
                  transition={{ type: "tween", duration: 0.5 }}
                  key={index}
                  className="  grid w-full absolute overflow-hidden"
                >
                  {data?.results.slice(index, index + 1).map((movie) => {
                    return (
                      <div key={index} className=" relative">
                        <motion.img
                          className=" w-full h-[calc(100vh-11rem)] opacity-80"
                          initial="normal"
                          transition={{ type: "tween" }}
                          src={makeImagePath(
                            movie.backdrop_path === null
                              ? NothingPoster
                              : movie.backdrop_path
                          )}
                        />
                        <div className="w-full h-full absolute flex justify-between items-center top-0 ">
                          <motion.div
                            whileHover={{ color: "white" }}
                            onClick={decreaseIndex}
                            className="ml-3 text-gray-700 z-10 w-1/2 h-full flex items-center justify-start "
                          >
                            <ArrowBackIosIcon fontSize="large" />
                          </motion.div>
                          <motion.div
                            whileHover={{ color: "white" }}
                            onClick={increaseIndex}
                            className="mr-3 text-gray-700 z-10 w-1/2 h-full flex items-center justify-end origin-right"
                          >
                            <ArrowForwardIosIcon fontSize="large" />
                          </motion.div>
                        </div>
                        <div className=" w-96 h-12  absolute top-[71%] left-[10%]">
                          <span className="text-white font-bold sm:text-3xl text-2xl">
                            {movie.title}
                          </span>
                        </div>
                        <Link to={`/contents/${movie.id}`}>
                          <div className="z-20 absolute top-[74%] right-[10%] bg-black/30 mt-5 py-1 px-4  sm:py-4 sm:px-10 border-2 border-solid  border-gray-400 hover:border-white rounded-md">
                            <span className="text-white">자세히보기</span>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
              <Dot index={index} onClick={onClick} />
            </div>
          </div>
          <div className="bg-black w-full h-[50vh] flex flex-col  items-center justify-center">
            <div className="w-[93%] h-16 flex items-center">
              <span className="text-2xl font-bold text-cyan-100">
                찰리빙에서 꼭 봐야하는 콘텐츠
              </span>
            </div>
            <div className=" w-[93%]  h-full">
              <Slider className="w-full h-full flex " {...settings}>
                {data?.results.slice(6).map((movie) => {
                  return (
                    <div
                      onMouseMove={() => setMouseMoved(true)}
                      onMouseDown={() => setMouseMoved(false)}
                      onMouseUp={() => handleClick(movie.id)}
                      key={movie.id}
                      className="flex w-full h-[360px] relative top-4"
                    >
                      <motion.img
                        className="w-[225px] rounded-xl h-[350px]"
                        src={makeImagePath(
                          movie.poster_path === null
                            ? NothingPoster
                            : movie.poster_path
                        )}
                        whileHover={{ y: -10, transition: { delay: 0.1 } }}
                      />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Home;
