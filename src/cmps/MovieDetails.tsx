import React from "react";
import Movie from "../models/movie";

export default function MovieDetails({
  selectedMovie,
  toggleFavs,
  setSelectedMovie,
}: {
  selectedMovie: Movie;
  toggleFavs: Function;
  setSelectedMovie: Function;
}) {
  const goBackToMain = () => {
    setSelectedMovie(Object());
  };

  return (
    <section className="movie-details">
      <div className="cross" onClick={goBackToMain}>
        <i className="fas fa-times"></i>
      </div>

      <img
        className="movie-img"
        src={require(`../assets/img/${selectedMovie.episode_id}.jpg`).default}
        alt=""
      />
      <p className="movie-title">{selectedMovie.title}</p>
      <p className="movie-about">{selectedMovie.opening_crawl}</p>
      <p className="movie-director">Directed by : {selectedMovie.director}</p>
      <p className="movie-producer">Produced by : {selectedMovie.producer}</p>
      <p
        className={`movie-is-favorite ${
          selectedMovie.isFavorite ? "favorite" : ""
        }`}
      >
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
