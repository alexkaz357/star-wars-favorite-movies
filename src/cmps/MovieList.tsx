import React from "react";
import MoviePreview from "./MoviePreview";

export default function MovieList({ movies, showSelectedMovieDetails }) {
  return (
    <section className="movie-list">
      {movies.map((movie) => (
        <MoviePreview
          key={movie.episode_id}
          movie={movie}
          showSelectedMovieDetails={showSelectedMovieDetails}
        />
      ))}
    </section>
  );
}
