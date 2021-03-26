import React from "react";
import MovieList from "./MovieList";

export default function TableOfContent({ movies } ) {
  return (
    <section className="table-of-content">
      <MovieList movies={movies} />
    </section>
  );
}
