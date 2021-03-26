import React from "react";

export default function MoviePreview({ movie, showSelectedMovieDetails }) {
  return (
    <section
      className="movie-preview"
      onClick={() => showSelectedMovieDetails(movie.episode_id)}
    >
      <p>{movie.title}</p>
    </section>
  );
}
