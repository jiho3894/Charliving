import { useQuery } from "react-query";
import styled from "styled-components";
import { getMovieUpcoming, IGetMoviesResult } from "../Api/Api";
import { makeImagePath, NothingPoster } from "../Api/utils";

const Poster = styled.div<{ bgimg: string }>`
  // 이미지 type 지정
  background-image: url(${(prop) => prop.bgimg});
`;

const Home = () => {
  const { isLoading, data } = useQuery<IGetMoviesResult>(
    "upcoming",
    () => getMovieUpcoming(1) // number type 지정으로 page 숫자 넣기
  );
  return (
    <div className="w-screen h-screen bg-black">
      {isLoading ? (
        "Loading"
      ) : (
        // tailwind 상세값은 []안에서 적을 수 있음 ex) w-[24px] => width:24px
        <div className="w-full h-[calc(100vh-4rem)] grid grid-cols-10 absolute bottom-0 bg-red-200 ">
          {data?.results.map((movie) => {
            return (
              <Poster
                key={movie.id}
                bgimg={
                  movie.backdrop_path === null
                    ? NothingPoster
                    : makeImagePath(movie.poster_path)
                }
                className="bg-slate-500 image bg-cover bg-center"
              >
                <span className="text-white">{movie.title}</span>
              </Poster>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
