import { motion } from "framer-motion";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getTv, IGetTVResult } from "../../Api/Api";
import { makeImagePath } from "../../Api/utils";
import Footer from "../../styles/Footer";

const TV = () => {
  const { isLoading, data } = useQuery<IGetTVResult>("TV", () => getTv(1));
  return (
    <React.Fragment>
      {isLoading ? (
        "Loading"
      ) : (
        <React.Fragment>
          <div className="w-full h-full relative flex justify-center items-center ">
            <div className="w-full h-[95%] mt-12 xl:mt-20 grid grid-cols-3 xl:grid-cols-5 justify-center xl:gap-10">
              {data?.results.map((tv) => {
                return (
                  <Link to={`/contents/tv/${tv.id}`} className="mt-5 w-[100px] h-[170px]  xl:w-[220px] xl:h-[350px] flex flex-col justify-center m-auto items-center ">
                    <motion.img
                      whileHover={{y : -10}}
                      src={makeImagePath(tv.poster_path)}
                      className="xl:shadow-2xl rounded-lg"
                    />
                    <span className="mt-2 text-white text-[10px] xl:text-base font-semibold">
                      {tv.original_name.length > 20
                        ? `${tv.original_name.substring(0, 15)} ...`
                        : tv.original_name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default TV;
