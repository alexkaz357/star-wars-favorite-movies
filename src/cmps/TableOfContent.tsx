import React from "react";
import MovieList from "./MovieList";
import Movie from "../models/movie";

export default function TableOfContent({
  movies,
  toggleFavs,
  showSelectedMovieDetails,
}: {
  movies: Movie[];
  toggleFavs: Function;
  showSelectedMovieDetails: Function;
}) {
  return (
    <section className="table-of-content">
      <MovieList
        movies={movies}
        toggleFavs={toggleFavs}
        showSelectedMovieDetails={showSelectedMovieDetails}
      />
    </section>
  );
}
