import React from "react";

export default function MovieDetails({ selectedMovie }) {
  return (
    <section className="movie-details">
      <p>{selectedMovie.title}</p>
      <p>{selectedMovie.opening_crawl}</p>
    </section>
  );
}
