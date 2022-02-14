import { motion, useAnimation, useViewportScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import Input from "@mui/material/Input";

const ariaLabel = { "aria-label": "description" };

const bodyVariants = {
  top: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  scroll: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 3000,
  },
};

interface IForm {
  query?: string;
}

const Header = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const { scrollY } = useViewportScroll();
  const scrollAnimation = useAnimation();
  const AirMatch = useMatch(`/air`);
  const TVMatch = useMatch(`/tv`);
  console.log(AirMatch, TVMatch);
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 30) {
        scrollAnimation.start("scroll");
      } else {
        scrollAnimation.start("top");
      }
    });
  }, [scrollY, scrollAnimation]);
  const onClickSearch = () => {
    setClick((prev) => !prev);
  };
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onVaild = (data: IForm) => {
    navigate(`/search/?query=${data.query}`);
    setValue("query", "");
    setClick(false);
  };
  const onSearchBtn = () => {
    setClick(false);
  };
  return (
    <React.Fragment>
      <motion.div
        variants={bodyVariants}
        initial="top"
        animate={scrollAnimation}
        className="w-full h-12 xl:h-20 fixed flex items-center justify-center text-white z-20"
      >
        <div className="w-[95%]  flex items-center justify-between">
          <div onClick={onSearchBtn} className="flex items-center ">
            <Link to="/">
              <span className="mr-5 xl:mr-10 font-bold text-lg sm:text-4xl">
                Charliving
              </span>
            </Link>
            <Link to="/air" className="flex items-center">
              <div className="w-8 h-8 bg-no-repeat bg-left bg-[url('https://www.tving.com/img/icon_menu_live.svg')]"></div>
              <span
                className={`${
                  AirMatch?.pathname === "/air"
                    ? "text-gray-200"
                    : "text-gray-400"
                } mr-5 font-bold sm:text-xl hover:text-gray-200 text-xs`}
              >
                실시간
              </span>
            </Link>
            <Link to="/tv">
              <span
                className={`${
                  TVMatch?.pathname === "/tv"
                    ? "text-gray-200"
                    : "text-gray-400"
                } mr-5 font-bold sm:text-xl hover:text-gray-200 text-xs`}
              >
                TV프로그램
              </span>
            </Link>
          </div>
          <div className="flex items-center cursor-pointer xl:space-x-8">
            <div onClick={onClickSearch}>
              {click ? (
                <CloseIcon fontSize="large" />
              ) : (
                <SearchIcon fontSize="large" />
              )}
            </div>
            <a href="https://github.com/jiho3894">
              <img
                className="w-10 h-10"
                alt=""
                src="https://avatars.githubusercontent.com/u/79081800?v=4"
              />
            </a>
          </div>
        </div>
      </motion.div>
      {click ? (
        <div className="w-full h-[35vh] xl:h-[40vh] space-y-5 bg-black fixed top-12 xl:top-20 z-50  flex justify-center flex-col items-center">
          <span className="font-bold text-lg xl:text-2xl text-white">
            찾아보고싶은 TV 프로그램을 입력해주세요
          </span>
          <form onSubmit={handleSubmit(onVaild)}>
            <Input
              className="bg-white"
              {...register("query", { required: true, minLength: 2 })}
              placeholder="검색어를 입력해주세요."
              inputProps={ariaLabel}
            />
            <button>
              <SearchIcon
                className="text-white cursor-pointer"
                fontSize="large"
              />
            </button>
          </form>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Header;
