import axios from "axios";

import Movie from "../models/movie";

export const mainService = {
  getMovies,
  loadMovies,
  findMovie,
  toggleFavs,
};

async function getMovies(): Promise<any> {
  try {
    const res = await axios.get("https://swapi.dev/api/films/");
    res.data.results.forEach((result: Movie) => (result.isFavorite = false));
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
}

async function loadMovies(): Promise<Movie[]> {
  let movies: Movie[] = loadFromStorage("movies");
  if (!movies || !movies.length) saveToStorage("movies", await getMovies());
  movies = loadFromStorage("movies");
  return movies;
}

function findMovie(movieId: number): Movie {
  const movies: Movie[] = loadFromStorage("movies");
  const selectedMovie: Movie = movies.find(
    (movie) => movie.episode_id === movieId
  ) as Movie;
  return selectedMovie;
}

function findMovieIdx(movieId: number): number {
  const movies: Movie[] = loadFromStorage("movies");
  const selectedMovieIdx = movies.findIndex(
    (movie) => movie.episode_id === movieId
  ) as number;
  return selectedMovieIdx;
}

function toggleFavs(movieId: number) {
  const movies: Movie[] = loadFromStorage("movies");
  const movieToAdd: number = findMovieIdx(movieId);
  movies[movieToAdd].isFavorite = !movies[movieToAdd].isFavorite;
  saveToStorage("movies", movies);
}

function saveToStorage(key: string, val: any) {
  localStorage.setItem(key, JSON.stringify(val));
}

function loadFromStorage(key: string): Movie[] {
  const val = localStorage.getItem(key) || "[]";
  return JSON.parse(val);
}
