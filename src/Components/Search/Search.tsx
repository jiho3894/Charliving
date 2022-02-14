import { motion } from "framer-motion";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getSearch, IGetSearchResult } from "../../Api/Api";
import { makeImagePath, NothingPoster } from "../../Api/utils";
import Footer from "../../styles/Footer";

const Search = () => {
  const location = useLocation();
  console.log(location);
  const query = new URLSearchParams(location.search).get("query");
  console.log(query);
  const { isLoading, data } = useQuery<IGetSearchResult>("search", () =>
    getSearch(String(query))
  );
  return (
    <React.Fragment>
      {isLoading ? (
        "Loading"
      ) : (
        <React.Fragment>
          <div className="w-full h-full relative flex justify-center items-center ">
            <div className="w-full h-[95%] mt-12 xl:mt-20 grid grid-cols-3 xl:grid-cols-5 justify-center xl:gap-10">
              {data?.results.length === 0 ? (
                <div className="w-full h-48 flex justify-center items-center">
                  <span className="text-white text-center">
                    검색 정보가 없습니다
                  </span>
                </div>
              ) : (
                data?.results.slice(0, 10).map((tv) => {
                  return (
                    <Link
                      to={`/contents/tv/${tv.id}`}
                      className="mt-5 w-[100px] h-[170px] bg-repeat xl:w-[220px] xl:h-[350px] flex flex-col justify-center m-auto items-center "
                    >
                      <motion.img
                        whileHover={{ y: -10 }}
                        src={
                          tv.poster_path === null
                            ? NothingPoster
                            : makeImagePath(tv.poster_path)
                        }
                        className="xl:shadow-2xl rounded-lg"
                      />
                      <span className="mt-2 text-white text-[10px] xl:text-sm font-semibold">
                        {tv.name === undefined ? "" : tv.name}
                      </span>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Search;
