import React from "react";
import MoviePreview from "./MoviePreview";

export default function MovieList({ movies }) {
  return (
    <section className="movie-list">
      {movies.map((movie) => (
        <MoviePreview key={movie.id} movie={movie} />
      ))}
    </section>
  );
}
