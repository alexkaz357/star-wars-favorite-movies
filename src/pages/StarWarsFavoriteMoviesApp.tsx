import React, { useEffect, useState } from "react";
import TableOfContent from "../cmps/TableOfContent";
import MovieDetails from "../cmps/MovieDetails";
import { mainService } from "../services/mainService";

export default function StarWarsFavoriteMoviesApp() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = () => {
    mainService.loadMovies().then((movies) => {
      setMovies(movies);
    });
  };

  const showSelectedMovieDetails = (movieId) => {
    const selectedMovie = mainService.findMovie(movieId);
    setSelectedMovie(selectedMovie);
  };

  return (
    <section className="container flex space-between">
      <TableOfContent
        movies={movies}
        showSelectedMovieDetails={showSelectedMovieDetails}
      />
      {selectedMovie && <MovieDetails selectedMovie={selectedMovie} />}
    </section>
  );
}
