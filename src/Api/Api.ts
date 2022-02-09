const API_KEY = "9594c9ccbbcc42235a2072ad7d3699ae"; // TMDB API Key
const BASE_URL = "https://api.themoviedb.org/3"; // Base URL

interface IMovie {
  // Array type 내부 key type 선언
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: string;
}

export interface IGetMoviesResult {
  // Result Array type 선언
  results: IMovie[];
}

export const getMovieUpcoming = async (number: number) => {
  const response = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${number}`
  );
  const json = await response.json();
  return json;
};

getMovieUpcoming(1);
