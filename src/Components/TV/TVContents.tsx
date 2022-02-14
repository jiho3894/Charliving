import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getTVDetail, IGetMoviesDetail } from "../../Api/Api";
import Contents from "../../styles/Contents";

const TVContents = () => {
  const movieID = useParams();
  const navigate = useNavigate();
  const { isLoading, data } = useQuery<IGetMoviesDetail>("TV-Detail", () =>
    getTVDetail(Number(movieID.id))
  );
  const onClickTrailer = () => {
    navigate(`/contents/tv/trailer/${movieID.id}`);
  };
  return <Contents Loading={isLoading} Data={data} Trailer={onClickTrailer} />;
};

export default TVContents;
