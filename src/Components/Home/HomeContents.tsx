import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieDetail, IGetMoviesDetail } from "../../Api/Api";
import Contents from "../../styles/Contents";

const HomeContents = () => {
  const movieID = useParams();
  const navigate = useNavigate();
  const { isLoading, data } = useQuery<IGetMoviesDetail>("Movie-Detail", () =>
    getMovieDetail(Number(movieID.id))
  );
  const onClickTrailer = () => {
    navigate(`/contents/home/trailer/${movieID.id}`);
  };
  return <Contents Loading={isLoading} Data={data} Trailer={onClickTrailer} />;
};

export default HomeContents;
