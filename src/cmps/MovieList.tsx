import React from "react";
import MoviePreview from "./MoviePreview";
import Movie from "../models/movie";

export default function MovieList({
  movies,
  toggleFavs,
  showSelectedMovieDetails,
}: {
  movies: Movie[];
  toggleFavs: Function;
  showSelectedMovieDetails: Function;
}) {
  return (
    <section className="movie-list">
      {movies.map((movie: Movie) => (
        <MoviePreview
          key={movie.episode_id}
          movie={movie}
          toggleFavs={toggleFavs}
          showSelectedMovieDetails={showSelectedMovieDetails}
        />
      ))}
    </section>
  );
}
