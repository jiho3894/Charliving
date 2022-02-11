import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const bodyVariants = {
  top: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  scroll: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 3000,
  },
};

const Header = () => {
  const { scrollY } = useViewportScroll();
  const scrollAnimation = useAnimation();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 30) {
        scrollAnimation.start("scroll");
      } else {
        scrollAnimation.start("top");
      }
    });
  }, [scrollY, scrollAnimation]);
  return (
    <motion.div
      variants={bodyVariants}
      initial="top"
      animate={scrollAnimation}
      className="w-full h-20 fixed flex items-center justify-center text-white z-20"
    >
      <div className="w-[95%]  flex items-center">
        <Link to="/">
          <span className=" mr-10 font-bold text-lg sm:text-4xl">
            Charliving
          </span>
        </Link>
        <nav className="flex items-center">
          <div className="w-8 h-8 bg-no-repeat bg-left bg-[url('https://www.tving.com/img/icon_menu_live.svg')]"></div>
          <span className="text-gray-400 hover:text-gray-200 mr-5 font-bold sm:text-xl  text-xs">
            실시간
          </span>
        </nav>
        <nav>
          <span className="text-gray-400 hover:text-gray-200 mr-5 font-bold sm:text-xl text-xs">
            TV프로그램
          </span>
        </nav>
        <nav>
          <span className="text-gray-400 hover:text-gray-200 mr-5 font-bold sm:text-xl text-xs">
            영화
          </span>
        </nav>
      </div>
    </motion.div>
  );
};

export default Header;
