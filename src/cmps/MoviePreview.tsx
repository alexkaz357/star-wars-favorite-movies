import React from "react";
import Movie from "../models/movie";

export default function MoviePreview({
  movie,
  toggleFavs,
  showSelectedMovieDetails,
}: {
  movie: Movie;
  toggleFavs: Function;
  showSelectedMovieDetails: Function;
}) {
  const toggleFavorite = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    toggleFavs(movie.episode_id);
  };

  return (
    <section
      className="movie-preview flex space-between align-center"
      onClick={() => showSelectedMovieDetails(movie.episode_id)}
    >
      <p className="title">{movie.title}</p>
      <i
        className={`fas fa-heart heart ${movie.isFavorite ? "favorite" : ""}`}
        onClick={(e) => toggleFavorite(e)}
      ></i>
    </section>
  );
}
