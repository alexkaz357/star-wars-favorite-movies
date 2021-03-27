import React from "react";
import MoviePreview from "./MoviePreview";
import Movie from "../models/movie";

export default function MovieList({
  movies,
  showSelectedMovieDetails,
}: {
  movies: Movie[];
  showSelectedMovieDetails: Function;
}) {
  return (
    <section className="movie-list">
      {movies.map((movie: Movie) => (
        <MoviePreview
          key={movie.episode_id}
          movie={movie}
          showSelectedMovieDetails={showSelectedMovieDetails}
        />
      ))}
    </section>
  );
}
