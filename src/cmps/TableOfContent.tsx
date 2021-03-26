import React from "react";
import MovieList from "./MovieList";

export default function TableOfContent({ movies, showSelectedMovieDetails } ) {
  return (
    <section className="table-of-content">
      <MovieList movies={movies} showSelectedMovieDetails={showSelectedMovieDetails} />
    </section>
  );
}
