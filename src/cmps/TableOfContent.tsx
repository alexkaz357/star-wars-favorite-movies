import React from "react";
import MovieList from "./MovieList";
import Movie from "../models/movie";

export default function TableOfContent({
  movies,
  showSelectedMovieDetails,
}: {
  movies: Movie[];
  showSelectedMovieDetails: Function;
}) {
  return (
    <section className="table-of-content">
      <MovieList
        movies={movies}
        showSelectedMovieDetails={showSelectedMovieDetails}
      />
    </section>
  );
}
