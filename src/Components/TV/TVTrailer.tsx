import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getTvTrailer, IGetMoviesTrailer } from "../../Api/Api";
import Trailer from "../../styles/Trailer";

const TVTrailer = () => {
  const tailerID = useParams();
  const { isLoading, data } = useQuery<IGetMoviesTrailer>("Trailer", () =>
    getTvTrailer(Number(tailerID.id))
  );
  return <Trailer Loading={isLoading} Data={data} />;
};

export default TVTrailer;
