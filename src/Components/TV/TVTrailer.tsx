import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getTvTrailer, IGetMoviesTrailer } from "../../Api/Api";
import Trailer from "../../styles/Trailer";

const TVTrailer = () => {
  const trailerID = useParams();
  console.log(trailerID);
  const { isLoading, data } = useQuery<IGetMoviesTrailer>("Trailer", () =>
    getTvTrailer(Number(trailerID.id))
  );
  return <Trailer Loading={isLoading} Data={data} />;
};

export default TVTrailer;
