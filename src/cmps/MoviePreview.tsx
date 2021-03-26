import React from "react";

export default function MoviePreview({ movie }) {
  return (
    <section className="movie-preview">
      <p>{movie.title}</p>
    </section>
  );
}
