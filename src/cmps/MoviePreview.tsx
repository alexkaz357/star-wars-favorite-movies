import React from "react";
import Movie from "../models/movie";

export default function MoviePreview({
  movie,
  showSelectedMovieDetails,
}: {
  movie: Movie;
  showSelectedMovieDetails: Function;
}) {
  return (
    <section
      className="movie-preview flex space-between align-center"
      onClick={() => showSelectedMovieDetails(movie.episode_id)}
    >
      <p>{movie.title}</p>
      <i
        className={`fas fa-heart heart ${movie.isFavorite ? "favorite" : ""}`}
      ></i>
    </section>
  );
}
