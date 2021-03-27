import React, { useEffect, useState } from "react";

import TableOfContent from "../cmps/TableOfContent";
import MovieDetails from "../cmps/MovieDetails";

import { mainService } from "../services/mainService";

import Movie from "../models/movie";

export default function StarWarsFavoriteMoviesApp() {
  const [movies, setMovies] = useState(Array());
  const [selectedMovie, setSelectedMovie] = useState(Object());

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = () => {
    mainService.loadMovies().then((movies) => {
      setMovies(movies);
    });
  };

  const showSelectedMovieDetails = (movieId: number) => {
    const selectedMovie: Movie = mainService.findMovie(movieId);
    setSelectedMovie(selectedMovie);
  };

  const toggleFavs = (movieId: number) => {
    mainService.toggleFavs(movieId);
    showSelectedMovieDetails(movieId);
    loadMovies();
  };

  return (
    <section className="container flex space-between">
      <TableOfContent
        movies={movies}
        showSelectedMovieDetails={showSelectedMovieDetails}
      />
      {Object.keys(selectedMovie).length !== 0 && (
        <MovieDetails selectedMovie={selectedMovie} toggleFavs={toggleFavs} />
      )}
    </section>
  );
}
