import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMovieTrailer, IGetMoviesTrailer } from "../../Api/Api";
import Trailer from "../../styles/Trailer";

const HomeTrailer = () => {
  const tailerID = useParams();
  const { isLoading, data } = useQuery<IGetMoviesTrailer>("Trailer", () =>
    getMovieTrailer(Number(tailerID.id))
  );
  return <Trailer Loading={isLoading} Data={data} />;
};

export default HomeTrailer;
