import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useQuery } from "react-query";
import { getMovieUpcoming, IGetMoviesResult } from "../Api/Api";
import { makeImagePath, NothingPoster } from "../Api/utils";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
  const increaseIndex = () => {
    if (data) {
      const total = 5;
      setIndex((prev) => (prev === total ? 0 : prev + 1));
    }
  };
  console.log(index);
  const decreaseIndex = () => {
    if (data) {
      const total = 0;
      setIndex((prev) => (prev === total ? 5 : prev - 1));
    }
  };
  return (
    <div className="w-screen h-screen bg-black">
      {isLoading ? (
        "Loading"
      ) : (
        <div className="w-full h-[500px]">
          <div className=" w-full  relative flex justify-center ">
            <AnimatePresence initial={false}>
              <motion.div
                variants={rowVars}
                initial="start"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
                key={index}
                className="grid w-full absolute top-16 opacity-90 overflow-hidden"
              >
                {data?.results.slice(index, index + 1).map((movie) => {
                  return (
                    <div className="relative">
                      <motion.img
                        className=" w-full h-[calc(100vh-12rem)]"
                        key={index}
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
                          className="text-gray-700 z-10 w-1/2 h-full flex items-center justify-start opacity-70"
                        >
                          <ArrowBackIosIcon fontSize="large" />
                        </motion.div>
                        <motion.div
                          whileHover={{ color: "white" }}
                          onClick={increaseIndex}
                          className="text-gray-700 z-10 w-1/2 h-full flex items-center justify-end origin-right"
                        >
                          <ArrowForwardIosIcon fontSize="large" />
                        </motion.div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
