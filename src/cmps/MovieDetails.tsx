import React from "react";
import Movie from "../models/movie";

export default function MovieDetails({
  selectedMovie,
  toggleFavs,
}: {
  selectedMovie: Movie;
  toggleFavs: Function;
}) {
  return (
    <section className="movie-details">
      <p>{selectedMovie.title}</p>
      <p>{selectedMovie.opening_crawl}</p>
      <p>
        {selectedMovie.isFavorite
          ? "This movie is one of your favorites"
          : "This movie is not one of your favorites"}
      </p>
      <button
        className="fav-btn"
        onClick={() => toggleFavs(selectedMovie.episode_id)}
      >{`${
        selectedMovie.isFavorite ? "remove from favorites" : "add to favorites"
      }`}</button>
    </section>
  );
}
