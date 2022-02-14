const API_KEY = process.env.REACT_APP_API_KEY;
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

interface ITV {
  id: number;
  backdrop_path: string;
  original_name: string;
  poster_path: string;
}

interface ITrailer {
  key: string;
  site: string;
}

interface ISearch {
  backdrop_path: string;
  id: number;
  original_title: string;
  poster_path: string;
  first_air_date: string;
  vote_average: number;
  media_type: string;
  name: string;
}

export interface IGetMoviesResult {
  results: IMovie[];
}

export interface IGetMoviesDetail {
  original_name: string;
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  runtime: number;
}

export interface IGetMoviesTrailer {
  id: number;
  results: ITrailer[];
}

export interface IGetTVResult {
  page: number;
  results: ITV[];
}

export interface IGetSearchResult {
  results: ISearch[];
  total_results: number;
}

export const getMovieUpcoming = async (number: number) => {
  const response = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${number}`
  );
  const json = await response.json();
  return json;
};

export const getMovieDetail = async (moiveID: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${moiveID}?api_key=${API_KEY}`
  );
  const json = await response.json();
  return json;
};

export const getMovieTrailer = async (moiveID: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${moiveID}/videos?api_key=${API_KEY}`
  );
  const json = await response.json();
  return json;
};

export const getUpcoming = async (number?: number) => {
  const response = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${number}`
  );
  const json = await response.json();
  return json;
};

export const getTv = async (number?: number) => {
  const response = await fetch(
    `${BASE_URL}/tv/popular?api_key=${API_KEY}&page=${number}`
  );
  const json = await response.json();
  return json;
};

export const getTVDetail = async (tvId?: number) => {
  const response = await fetch(
    `${BASE_URL}/tv/${tvId}?api_key=${API_KEY}&language=ko-KR`
  );
  const json = await response.json();
  return json;
};

export const getTvTrailer = async (tvId?: number) => {
  const response = await fetch(
    `${BASE_URL}/tv/${tvId}/videos?api_key=${API_KEY}`
  );
  const json = await response.json();
  return json;
};

export const getSearch = async (query?: string) => {
  const response = await fetch(
    `${BASE_URL}/search/tv?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`
  );
  const json = await response.json();
  return json;
};
