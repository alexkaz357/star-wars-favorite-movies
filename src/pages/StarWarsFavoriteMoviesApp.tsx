import React, { useEffect, useState } from "react";

import { mainService } from "../services/mainService";

import Movie from "../models/movie";

import TableOfContent from "../cmps/TableOfContent";
import MovieDetails from "../cmps/MovieDetails";
import About from "../cmps/About";
import Loader from "../cmps/Loader";

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
    if (window.innerWidth < 550) window.scrollTo(0, 660);
  };

  const toggleFavs = (movieId: number) => {
    mainService.toggleFavs(movieId);
    showSelectedMovieDetails(movieId);
    loadMovies();
    if (window.innerWidth < 550) window.scrollTo(0, 0);
  };

  return (
    <section className="star-wars-movies-app">
      <div className="stars-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      <div className="logo-container">
        <img
          className="logo"
          src={require("../assets/img/logo.png").default}
          alt=""
        />
      </div>

      <div className="container content">
        {movies.length === 0 ? (
          <Loader />
        ) : (
          <TableOfContent
            movies={movies}
            toggleFavs={toggleFavs}
            showSelectedMovieDetails={showSelectedMovieDetails}
          />
        )}
        {Object.keys(selectedMovie).length === 0 ? (
          <About />
        ) : (
          <MovieDetails
            selectedMovie={selectedMovie}
            toggleFavs={toggleFavs}
            setSelectedMovie={setSelectedMovie}
          />
        )}
      </div>
    </section>
  );
}
