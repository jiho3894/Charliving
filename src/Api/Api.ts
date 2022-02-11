const API_Key = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3"; // Base URL

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: string;
}

export interface IGetMoviesResult {
  results: IMovie[];
}

export interface IGetMoviesDetail {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  runtime: number;
}

export const getMovieUpcoming = async (number: number) => {
  const response = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_Key}&page=${number}`
  );
  const json = await response.json();
  return json;
};

export const getMovieDetail = async (moiveID: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${moiveID}?api_key=${API_Key}`
  );
  const json = await response.json();
  return json;
};
